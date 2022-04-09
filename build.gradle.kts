plugins {
    kotlin("js") version "1.6.10"
    kotlin("plugin.serialization") version "1.6.10"
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

kotlin {
    js {
        browser {
            commonWebpackConfig {
                cssSupport.enabled = true
            }
            testTask {
                useKarma {
                    useChromeHeadless()
                }
            }
        }
        binaries.executable()
    }
}
dependencies {
    testImplementation(kotlin("test-js"))
    implementation("org.jetbrains.kotlin-wrappers:kotlin-react-css:17.0.2-pre.298-kotlin-1.6.10")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.0")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.3.2")
    implementation("io.ktor:ktor-client-serialization:1.6.7")
    implementation("io.ktor:ktor-client-js:1.6.7")
    implementation("io.ktor:ktor-client-json:1.6.7")
    implementation("org.jetbrains.kotlin-wrappers:kotlin-react:17.0.2-pre.265-kotlin-1.5.31")
    implementation("org.jetbrains.kotlin-wrappers:kotlin-styled:5.3.3-pre.265-kotlin-1.5.31")
}
