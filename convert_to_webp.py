import os
from PIL import Image

def convert_png_to_webp():
    images = [
        "public/reminder.png",
        "public/library.png",
        "public/karga.png",
        "public/add.png"
    ]
    
    print("Starting conversion from PNG to WebP...")
    print("-" * 50)
    
    total_original_size = 0
    total_new_size = 0
    
    for img_path in images:
        if not os.path.exists(img_path):
            print(f"File not found: {img_path}")
            continue
            
        webp_path = os.path.splitext(img_path)[0] + ".webp"
        
        # Get original file size
        orig_size = os.path.getsize(img_path)
        total_original_size += orig_size
        
        try:
            # Open and save as WebP
            with Image.open(img_path) as im:
                # Convert to RGBA if transparency is present, otherwise RGB is fine
                # But since webp supports both, keeping mode as is works perfectly
                im.save(webp_path, "WEBP", quality=85)
                
            new_size = os.path.getsize(webp_path)
            total_new_size += new_size
            
            savings_bytes = orig_size - new_size
            savings_pct = (savings_bytes / orig_size) * 100
            
            print(f"Converted: {img_path} -> {webp_path}")
            print(f"  Original Size: {orig_size / 1024:.2f} KB")
            print(f"  WebP Size:     {new_size / 1024:.2f} KB")
            print(f"  Saved:         {savings_bytes / 1024:.2f} KB ({savings_pct:.1f}%)")
            print("-" * 50)
            
        except Exception as e:
            print(f"Failed to convert {img_path}: {e}")
            print("-" * 50)
            
    if total_original_size > 0:
        total_savings = total_original_size - total_new_size
        total_savings_pct = (total_savings / total_original_size) * 100
        print("CONVERSION SUMMARY:")
        print(f"  Total Original: {total_original_size / 1024 / 1024:.2f} MB")
        print(f"  Total WebP:     {total_new_size / 1024 / 1024:.2f} MB")
        print(f"  Total Savings:  {total_savings / 1024 / 1024:.2f} MB ({total_savings_pct:.1f}%)")
    else:
        print("No images were converted.")

if __name__ == "__main__":
    convert_png_to_webp()
