import com.kaung_myat_soe.WallpaperModule; // Import the module

@Override
protected List<ReactPackage> getPackages() {
    @SuppressWarnings("UnnecessaryLocalVariable")
    List<ReactPackage> packages = new PackageList(this).getPackages();
    // Add the following line:
    packages.add(new WallpaperPackage()); // Create and add WallpaperPackage
    return packages;
}
