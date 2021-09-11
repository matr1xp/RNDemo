//Powershell Admin
Set-ExecutionPolicy Unrestricted -Scope Process -Force; iex (New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/microsoft/react-native-windows/master/vnext/Scripts/rnw-dependencies.ps1')

//Install packages
npx react-native-windows-init --overwrite

//Run windows
npx react-native run-windows

//Autolink
npx react-native autolink-windows

//Async storage
https://react-native-async-storage.github.io/async-storage/docs/link/