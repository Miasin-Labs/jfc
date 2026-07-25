use std::env;

fn main() {
    let home = env::var("HOME").unwrap_or_else(|_| String::from("/home/cole"));
    let lib_dir = env::var("CURL_IMPERSONATE_LIB_DIR").unwrap_or_else(|_| {
        format!("{home}/CLionProjects/forks/curl-impersonate/build/deps/build/curl/lib")
    });

    println!("cargo:rustc-link-arg=-rpath");
    println!("cargo:rustc-link-arg={lib_dir}");
    println!("cargo:rerun-if-env-changed=CURL_IMPERSONATE_LIB_DIR");
}
