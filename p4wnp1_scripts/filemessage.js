layout('us');

// Step 1: Open Notepad and type ransom message
press("GUI r");
delay(500);
type("notepad");
press("ENTER");
delay(1000);
type(">>> YOUR FILES HAVE BEEN ENCRYPTED <<<");
press("ENTER");
type("Pay 4 BTC to 123.454.469.568 or else.");
press("ENTER");
type("System in 6 seconds will lock now.");
delay(6000);

// Step 2: Lock the screen
press("GUI l");
delay(6000); // Wait 6 seconds so user logs back in manually

// Step 3: Auto re-open Notepad after unlock
press("GUI r");
delay(500);
type("notepad");
press("ENTER");
delay(1000);
type("Just kidding. This is a demo by Manan for CREÒ 2025.");