package com.kaung_myat_soe;

import android.app.WallpaperManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import java.io.IOException;

public class WallpaperModule extends ReactContextBaseJavaModule {

    public WallpaperModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "WallpaperModule";
    }

    @ReactMethod
    public void setWallpaper(String filePath, Promise promise) {
        WallpaperManager wallpaperManager = WallpaperManager.getInstance(getReactApplicationContext());
        Bitmap bitmap = BitmapFactory.decodeFile(filePath);
        try {
            wallpaperManager.setBitmap(bitmap);
            promise.resolve("Wallpaper set successfully");
        } catch (IOException e) {
            promise.reject("Error setting wallpaper", e);
        }
    }
}
