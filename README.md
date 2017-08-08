Mute Incognito
===
Chrome allows every tab to make noise by default. This extension mutes every incognito tab, to stop unintended noise from websites while in incognito mode.

**Note: you must enable "Tab audio muting UI control" in `chrome://flags` to be
able to click the mute/un-mute icon on the tab.**

This extension is based on the extension [mute-new-tabs](https://github.com/ludios/mute-new-tabs) from [ludios](https://github.com/ludios). If you need more functionality use that extension.


## Install from the Chrome Web Store

N/A

## Install from GitHub Download

Note that if you install an extension from outside the Chrome Web Store, you'll see a
"developer mode extensions" nag popup every time you start Chrome, unless you're
using Chrome on Linux (lucky you!).  On other platforms, if you're crazy enough, you
[might be able to hexedit your Chrome binary](http://stackoverflow.com/questions/23055651/disable-developer-mode-extensions-pop-up)
to get rid of it (I have not tested this).

1. [Download the crx file from GitHub](extension.crx).
2. Open Chrome / Chromium
3. Enter `chrome://extensions` in the address bar (Or open the extensions page as you like)
4. Enable Developer mode at the top-right.
5. Drag and drop the downloaded crx file to the extensions page.
6. Click on Details at the extension.
7. Check "Allow in incognito".

## Install from source

Note that if you install an extension from outside the Chrome Web Store, you'll see a
"developer mode extensions" nag popup every time you start Chrome, unless you're
using Chrome on Linux (lucky you!).  On other platforms, if you're crazy enough, you
[might be able to hexedit your Chrome binary](http://stackoverflow.com/questions/23055651/disable-developer-mode-extensions-pop-up)
to get rid of it (I have not tested this).

1. `git clone https://github.com/Scrumplex/mute-incognito`
2. Enter `chrome://extensions` in the address bar (Or open the extensions page as you like)
3. Enable Developer mode at the top-right.
4. Click "Load unpacked extension", then select the cloned `mute-new-tabs` directory.
5. Check "Allow in incognito".
