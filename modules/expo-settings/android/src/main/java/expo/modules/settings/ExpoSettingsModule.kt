package expo.modules.settings

import android.content.Context
import android.content.SharedPreferences
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoSettingsModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoSettings")

    Function("setTheme") { theme: String ->
      getPreferences().edit().putString("theme", theme).commit()
    }

    Function("getTheme") {
      return@Function getPreferences().getString("theme", "system")
    }
    
    Function("hello") {
      "Hello world! 👋"
    }
  }

  private val context
  get() = requireNotNull(appContext.reactContext)

  private fun getPreferences(): SharedPreferences {
    return context.getSharedPreferences(context.packageName + ".settings", Context.MODE_PRIVATE)
  }
}
