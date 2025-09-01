# convert-tifs.ps1
# Recursively convert all .tif/.tiff to .jpg using ImageMagick

$root = "public\photos"   # adjust if your photos live somewhere else

# find all tif/tiff files
Get-ChildItem -Path $root -Recurse -Include *.tif, *.tiff | ForEach-Object {
    $inputPath  = $_.FullName
    $outputPath = [System.IO.Path]::ChangeExtension($inputPath, ".jpg")

    Write-Host "Converting $inputPath -> $outputPath"
    magick "$inputPath" "$outputPath"
}
