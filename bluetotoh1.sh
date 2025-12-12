  GNU nano 8.7                      bluetooth.sh                                
#!/usr/bin/env bash

DEVICE_MAC="7E:08:13:D7:4F:C1"   # <- your pods MAC

# Send commands correctly to bluetoothctl:
printf 'power on\nconnect %s\nquit\n' "$DEVICE_MAC" | bluetoothctl








