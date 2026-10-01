#!/usr/bin/env python3
import json, os, sys, time, urllib.request, urllib.error

KEY = os.environ["BFL_KEY"]
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "images", "gen")
os.makedirs(OUT, exist_ok=True)

STYLE = (
    "Paper cutout collage illustration, made of layered colored construction paper, "
    "flat simple shapes, soft drop shadows between the paper layers, subtle visible paper "
    "grain texture, handcrafted gentle children's-book feel, warm cream background color "
    "like #f6f2e9, limited harmonious palette of sage green, teal, terracotta coral, "
    "mustard yellow and soft sky blue, minimalist and calm, centered composition, "
    "plenty of negative space, no text, no words, no letters, no numbers."
)

IMAGES = {
    "hero": (
        "A wide gentle landscape scene of a river meadow: soft rolling green hills, a winding "
        "teal-blue river, a few round papercut trees, a warm round sun, and two tiny happy "
        "toddlers playing together in the meadow with a few small flowers. Peaceful, airy, "
        "horizontal landscape composition.",
        1216, 768,
    ),
    "konzept": (
        "A small green seedling plant with two leaves growing from a terracotta pot, a warm "
        "sun and a couple of tiny flowers, symbolising nurturing growth and nature.",
        1024, 640,
    ),
    "organisation": (
        "A small cozy cut-paper house with a coral-red roof and two windows, a round green "
        "tree beside it, sitting on a little green hill. Friendly and simple.",
        1024, 640,
    ),
    "anmeldung": (
        "A playful stack of colorful children's building blocks - a teal square, a coral "
        "square, a mustard triangle and a purple circle - arranged as a little tower.",
        1024, 640,
    ),
    "kontakt": (
        "A friendly cream envelope with a coral folded-paper flap, and a small teal location "
        "map pin floating beside it. Simple and inviting.",
        1024, 640,
    ),
    "stellenangebote": (
        "Two friendly simple papercut caregiver figures standing side by side, one in a teal "
        "apron and one in a coral apron, warm and welcoming, with a small sun above.",
        1024, 640,
    ),
}

def submit(prompt, w, h):
    body = json.dumps({
        "prompt": f"{prompt} {STYLE}",
        "width": w, "height": h,
        "prompt_upsampling": False,
        "safety_tolerance": 2,
        "output_format": "jpeg",
    }).encode()
    req = urllib.request.Request(
        "https://api.bfl.ai/v1/flux-pro-1.1", data=body,
        headers={"x-key": KEY, "Content-Type": "application/json"},
    )
    return json.load(urllib.request.urlopen(req))["polling_url"]

def poll(url):
    for _ in range(60):
        time.sleep(2)
        req = urllib.request.Request(url, headers={"x-key": KEY})
        data = json.load(urllib.request.urlopen(req))
        st = data.get("status")
        if st == "Ready":
            return data["result"]["sample"]
        if st in ("Error", "Failed", "Content Moderated", "Request Moderated"):
            raise RuntimeError(f"{st}: {data}")
    raise TimeoutError("polling timed out")

def main():
    for name, (prompt, w, h) in IMAGES.items():
        print(f"→ {name} ({w}x{h}) …", flush=True)
        url = poll(submit(prompt, w, h))
        dest = os.path.join(OUT, f"{name}.jpeg")
        urllib.request.urlretrieve(url, dest)
        print(f"  saved {dest}", flush=True)

if __name__ == "__main__":
    main()
