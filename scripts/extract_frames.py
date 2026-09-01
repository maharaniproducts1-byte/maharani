import cv2
import os

video_path = "/Users/shamalmohamedmk/MAHARANI/i_want_to_generate_a_premium_s-ezremove.mp4"
output_dir = "/Users/shamalmohamedmk/MAHARANI/public/hero-scroll-frames"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Open the video
cap = cv2.VideoCapture(video_path)
if not cap.isOpened():
    print(f"Error opening video file {video_path}")
    exit(1)

frame_count = 0
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
print(f"Total frames to extract: {total_frames}")

while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    # Save as webp with 80% quality to optimize size
    output_path = os.path.join(output_dir, f"frame_{frame_count:04d}.webp")
    cv2.imwrite(output_path, frame, [cv2.IMWRITE_WEBP_QUALITY, 80])
    
    if frame_count % 10 == 0:
        print(f"Extracted {frame_count} / {total_frames} frames")
        
    frame_count += 1

cap.release()
print(f"Successfully extracted {frame_count} frames to {output_dir}")
