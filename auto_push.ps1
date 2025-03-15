while ($true) {
    git add .
    git commit -m "Auto commit"
    git push origin main
    Start-Sleep -Seconds 5
} 
