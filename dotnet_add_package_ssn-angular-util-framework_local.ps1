# 110/09/2022 10:53 am - SSN - Copied from "C:\Sams_P\DevSitesIndex\DevSitesIndex\dotnet_add_package_DAL_local.ps1"

$erroractionpreference = "stop"

$error.clear()
0..10|%{""}
get-date 
""


write-host "testing-20221109-1152 " -foregroundcolor blue 

. C:\Sams\PS\NuGet\add-nuget-package-util.ps1


$projectName = "$psscriptroot\PTC.csproj"

$packageName = "SSN_Angular_Script_Util_Framework"

add-nugetPackage -projectName $projectName -packageName $packageName

  

   

