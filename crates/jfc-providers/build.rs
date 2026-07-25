use std::env;

fn main() {
    let home = env::var("HOME").unwrap_or_else(|_| String::from("/home/cole"));
    let lib_dir = env::var("CURL_IMPERSONATE_LIB_DIR").unwrap_or_else(|_| {
        format!("{home}/CLionProjects/forks/curl-impersonate/build/deps/build/curl/lib")
    });
    // Embed RUNPATH so libcurl-impersonate.so is found at runtime.
    // Two bare args to GNU ld (no -Wl, wrapper needed when going via rustc -C link-arg).
    println!("cargo:rustc-link-arg=-rpath");
    println!("cargo:rustc-link-arg={lib_dir}");
    println!("cargo:rerun-if-env-changed=CURL_IMPERSONATE_LIB_DIR");
}
