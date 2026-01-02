"""
Simple webcam utility for the Day 9 project.
Features:
- Open webcam and show live feed
- Press 's' to save a snapshot (saved to ./snapshots)
- Press 'q' or ESC to quit

Requires: opencv-python
Usage:
    python webcam.py --index 0 --mirror

"""
import os
import cv2
import argparse
from datetime import datetime

def ensure_dir(path):
    if not os.path.exists(path):
        os.makedirs(path, exist_ok=True)


def parse_args():
    p = argparse.ArgumentParser(description="Webcam utility: show feed and save snapshots")
    p.add_argument("--index", type=int, default=0, help="Webcam index (default 0)")
    p.add_argument("--mirror", action="store_true", help="Mirror frames horizontally")
    p.add_argument("--width", type=int, default=640, help="Frame width")
    p.add_argument("--height", type=int, default=480, help="Frame height")
    p.add_argument("--outdir", type=str, default="snapshots", help="Directory to save snapshots")
    return p.parse_args()


def main():
    args = parse_args()
    ensure_dir(args.outdir)

    cap = cv2.VideoCapture(args.index, cv2.CAP_DSHOW)
    if not cap.isOpened():
        print(f"ERROR: Cannot open webcam index {args.index}")
        return

    cap.set(cv2.CAP_PROP_FRAME_WIDTH, args.width)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, args.height)

    print("Press 's' to save a snapshot, 'q' or ESC to quit")

    while True:
        ret, frame = cap.read()
        if not ret:
            print("Failed to grab frame")
            break

        if args.mirror:
            frame = cv2.flip(frame, 1)

        cv2.imshow('Webcam', frame)
        key = cv2.waitKey(1) & 0xFF

        if key == ord('s'):
            ts = datetime.now().strftime('%Y%m%d_%H%M%S')
            fname = os.path.join(args.outdir, f'snapshot_{ts}.png')
            cv2.imwrite(fname, frame)
            print(f"Saved snapshot: {fname}")

        if key == ord('q') or key == 27:
            break

    cap.release()
    cv2.destroyAllWindows()


if __name__ == '__main__':
    main()
