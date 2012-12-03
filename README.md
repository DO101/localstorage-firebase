localstorage-firebase
=====================

Sync and/or localStorage adapter for FireBase (http://firebase.com)

w3c Web Storage: http://www.w3.org/TR/webstorage/

- (unsigned long) length; // number of key-value pairs available in the list
- (string) key(long index); // returns the index-th key in the list
- (string) getItem(string key);
- (void) setItem(string key, string value);
- (void) removeItem(string key);
- (void) clear();