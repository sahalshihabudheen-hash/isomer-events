$files = Get-ChildItem 'src\assets\images\new2' -Filter '*.jpeg' | Sort-Object Name
$count = $files.Count
for ($i = 0; $i -lt $count; $i++) {
    $dest = 'src\assets\images\slide-' + ($i + 1) + '.jpeg'
    Copy-Item $files[$i].FullName $dest
}
Write-Host "Done: $count files copied"
