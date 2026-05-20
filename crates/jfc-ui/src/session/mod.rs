//! Session persistence: save/load chat transcripts to disk.
//!
//! | Submodule       | Contents                                              |
//! |-----------------|-------------------------------------------------------|
//! | `serialization` | `Serialized*` types + `serialize_*`/`deserialize_*`   |
//! | `compaction`    | `coalesce_*`, `persistent_session_messages`, etc.     |
//! | `core`          | `save_session`, `load_session`, `set_session_title`   |

mod compaction;
mod core;
mod serialization;

pub use core::{load_session, load_session_with_model, save_session, set_session_title};
