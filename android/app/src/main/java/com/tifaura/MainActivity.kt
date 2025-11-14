package com.tifaura

import android.os.Bundle
import com.facebook.react.ReactActivity
import android.view.WindowManager;


class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun getMainComponentName(): String = "Tifaura"
}