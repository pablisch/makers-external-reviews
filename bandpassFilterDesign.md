make digital audio workstation plugins
elec music filter changes sounds
band pass filter

takes in wave outpyts wave
array of freq - integer
array input - array output

[60,10,45,60,1500]	[60,40,45,60,1000]

min = 40,
max = 1000

if not array - error
if not int - error - input corrupted
if empty array - error - no frequencies supplied

input       | output
[10]        | [40]
[50]        | [50]
[]          | err - no freq
[10, 1010]  | [40, 1000]