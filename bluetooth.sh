#!/usr/bin/env bash

DEVICE_MAC="41:42:C2:A7:D1:1D"   # <- your pods MAC

# Send commands correctly to bluetoothctl:
printf 'power on\nconnect %s\nquit\n' "$DEVICE_MAC" | bluetoothctl

