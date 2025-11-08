package com.myapp;

import android.app.Application;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultReactHost;
import com.facebook.react.ReactNativeApplicationEntryPoint;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;

import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactHost reactHost;

  public MainApplication() {
    // Correct type: List<ReactPackage>
    List<ReactPackage> packages = new PackageList(this).getPackages();

    // Create ReactHost using new API
    reactHost = DefaultReactHost.getDefaultReactHost(
        getApplicationContext(),
        packages,
        /* jsMainModuleName */ "index",
        /* bundleAssetName */ "index.android.bundle",
        /* entryFile */ null,
        /* jsRuntimeFactory */ null,
        /* useDeveloperSupport */ BuildConfig.DEBUG,
        /* turboModules */ null,
        /* errorHandler */ exception -> {
            exception.printStackTrace();
            return null;
        },
        /* bindingsInstaller */ null
    );
  }

  @Override
  public ReactHost getReactHost() {
    return reactHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    ReactNativeApplicationEntryPoint.loadReactNative(this);
  }
}
