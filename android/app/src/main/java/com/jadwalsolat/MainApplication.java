package com.jadwalsolat;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.emekalites.react.alarm.notification.ANPackage;
import pro.equinoxstudio.react_native_alarm_clock.RNAlarmClockPackage;
import com.horcrux.svg.SvgPackage;
import com.ocetnik.timer.BackgroundTimerPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import android.app.NotificationManager;
import android.app.NotificationChannel;
import android.content.Context;
import android.graphics.Color;
import android.os.Build;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ANPackage(),
            new RNAlarmClockPackage(),
            new SvgPackage(),
            new BackgroundTimerPackage(),
            new ReactNativePushNotificationPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    String id = "my_channel_id";					// The id of the channel. 
    CharSequence name = "my_channel_name";			// The user-visible name of the channel. 
    String description = "my_channel_description";	// The user-visible description of the channel. 
 
    if (android.os.Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      NotificationChannel mChannel = new NotificationChannel(id, name, NotificationManager.IMPORTANCE_DEFAULT);
 
      // Configure the notification channel.  
      mChannel.setDescription(description);
 
      mChannel.enableLights(true);
      // Sets the notification light color for notifications posted to this 
      // channel, if the device supports this feature.  
      mChannel.setLightColor(Color.RED);
 
      mChannel.enableVibration(true);
      mChannel.setVibrationPattern(new long[]{100, 200, 300, 400, 500, 400, 300, 200, 400});
 
      NotificationManager mNotificationManager = (NotificationManager) this.getSystemService(Context.NOTIFICATION_SERVICE);
      mNotificationManager.createNotificationChannel(mChannel);
    }
    SoLoader.init(this, /* native exopackage */ false);
  }
}
