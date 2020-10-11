Object.assign(window.search, {"doc_urls":["01-getting-started/getting-started.html#getting-started","01-getting-started/introduction.html#introduction","01-getting-started/why-session-types.html#why-session-types","01-getting-started/hello-world.html#hello-world","01-getting-started/hello-world.html#dependencies","01-getting-started/hello-world.html#hello-world-provider","01-getting-started/hello-world.html#hello-world-provider-and-client","01-getting-started/type-errors.html#type-errors","01-getting-started/macros.html#macros"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":2,"title":2},"1":{"body":2,"breadcrumbs":3,"title":1},"2":{"body":0,"breadcrumbs":4,"title":2},"3":{"body":0,"breadcrumbs":4,"title":2},"4":{"body":10,"breadcrumbs":3,"title":1},"5":{"body":21,"breadcrumbs":5,"title":3},"6":{"body":43,"breadcrumbs":6,"title":4},"7":{"body":0,"breadcrumbs":4,"title":2},"8":{"body":0,"breadcrumbs":3,"title":1}},"docs":{"0":{"body":"","breadcrumbs":"Getting Started","id":"0","title":"Getting Started"},"1":{"body":"Ferrite introduction.","breadcrumbs":"Getting Started » Introduction","id":"1","title":"Introduction"},"2":{"body":"","breadcrumbs":"Getting Started » Why Session Types","id":"2","title":"Why Session Types"},"3":{"body":"","breadcrumbs":"Getting Started » Hello World","id":"3","title":"Hello World"},"4":{"body":"[dependencies]\nferrite = { git = \"https://github.com/maybevoid/ferrite\" }\nasync-std = { version = \"1.6.5\", features = [\"attributes\"] }","breadcrumbs":"Getting Started » Dependencies","id":"4","title":"Dependencies"},"5":{"body":"use ferrite::*; #[async_std::main]\nasync fn main () { let session : Session < SendValue < String, End > > = send_value! ( \"Hello World!\".to_string(), terminate! () ); let result = run_session_with_result ( session ).await; println!(\"{}\", result);\n}","breadcrumbs":"Getting Started » Hello World Provider","id":"5","title":"Hello World Provider"},"6":{"body":"use std::time::Duration;\nuse async_std::task::sleep; let hello_provider : Session < SendValue < String, End > > = send_value! ( { sleep(Duration::from_secs(2)).await; \"Hello World!\".to_string() }, terminate() ); let hello_client : Session < ReceiveChannel < SendValue < String, End >, End > > = receive_channel! ( provider => { receive_value_from! ( provider, greeting => { println! ( \"Received greetings from provider: {}\", greeting ); wait! ( provider, terminate! () ) }) }); let session : Session < End > = apply_channel ( hello_client, hello_provider ); run_session ( session ).await;","breadcrumbs":"Getting Started » Hello World Provider and Client","id":"6","title":"Hello World Provider and Client"},"7":{"body":"","breadcrumbs":"Getting Started » Type Errors","id":"7","title":"Type Errors"},"8":{"body":"","breadcrumbs":"Getting Started » Macros","id":"8","title":"Macros"}},"length":9,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{".":{"6":{".":{"5":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"y":{"_":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"n":{"c":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"d":{":":{":":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{":":{":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"w":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{}}},"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":2.0}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"f":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":3,"docs":{"1":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}}}}},"n":{"df":1,"docs":{"5":{"tf":1.0}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"_":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"df":3,"docs":{"3":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"y":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"/":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"m":{"a":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"d":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":2.23606797749979}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"6":{"tf":1.0}},"e":{"_":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}}},"u":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"_":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":3,"docs":{"2":{"tf":1.0},"5":{"tf":1.7320508075688772},"6":{"tf":2.23606797749979}}}}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"(":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{":":{":":{"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"s":{"(":{"2":{")":{")":{".":{"a":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"d":{":":{":":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{":":{":":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.0},"7":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"s":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"w":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"!":{"\"":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":3,"docs":{"3":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"breadcrumbs":{"root":{"1":{".":{"6":{".":{"5":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"y":{"_":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"n":{"c":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"d":{":":{":":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{":":{":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"w":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{}}},"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":2.0}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}}}},"f":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":3,"docs":{"1":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}}}}},"n":{"df":1,"docs":{"5":{"tf":1.0}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":9,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0}}}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"_":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"df":3,"docs":{"3":{"tf":1.4142135623730951},"5":{"tf":1.7320508075688772},"6":{"tf":1.7320508075688772}}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"y":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"/":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"m":{"a":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"d":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":2.449489742783178}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"6":{"tf":1.0}},"e":{"_":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}}},"u":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"_":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":3,"docs":{"2":{"tf":1.4142135623730951},"5":{"tf":1.7320508075688772},"6":{"tf":2.23606797749979}}}}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"(":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{":":{":":{"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"s":{"(":{"2":{")":{")":{".":{"a":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":9,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0}}}}},"d":{":":{":":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{":":{":":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951}}}}}},"u":{"df":0,"docs":{},"s":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"w":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"!":{"\"":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":3,"docs":{"3":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"title":{"root":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":3,"docs":{"3":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"m":{"a":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"d":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.0},"7":{"tf":1.0}}}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":3,"docs":{"3":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});