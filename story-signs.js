const storySigns = [
  {
    "image": "assets/no-bicycles.svg",
    "title": "No bicycles",
    "code": "R5-6",
    "description": "Bicycles may not enter this roadway or area. A red circle and diagonal slash turn a familiar bicycle silhouette into a clear restriction.",
    "slug": "no-bicycles"
  },
  {
    "image": "assets/stop.svg",
    "title": "Stop",
    "code": "R1-1",
    "description": "Come to a complete stop before proceeding. The red octagon makes this instruction recognizable even before you read the word.",
    "slug": "stop"
  },
  {
    "image": "assets/yield.svg",
    "title": "Yield",
    "code": "R1-2",
    "description": "Slow down and give the right of way to other traffic. Stop when necessary, then proceed when the way is clear.",
    "slug": "yield"
  },
  {
    "image": "assets/do-not-enter.svg",
    "title": "Do not enter",
    "code": "R5-1",
    "description": "Traffic must not enter from this direction. A white bar cuts across a red circle, marking an entrance that is closed to approaching vehicles.",
    "slug": "do-not-enter"
  },
  {
    "image": "assets/wrong-way.svg",
    "title": "Wrong way",
    "code": "R5-1a",
    "description": "You are traveling against the permitted direction of traffic. The red rectangular sign gives a direct warning to turn around safely.",
    "slug": "wrong-way"
  },
  {
    "image": "assets/wrong-way-for-bicycles.svg",
    "title": "Wrong way for bicycles",
    "code": "R5-1b",
    "description": "Bicycle traffic is traveling in the wrong direction. The bicycle symbol identifies who this red warning is intended for.",
    "slug": "wrong-way-for-bicycles"
  },
  {
    "image": "assets/no-trucks.svg",
    "title": "No trucks",
    "code": "R5-2",
    "description": "Trucks are prohibited from entering this roadway. The red slash crosses the truck silhouette to communicate the restriction visually.",
    "slug": "no-trucks"
  },
  {
    "image": "assets/no-right-turn.svg",
    "title": "No right turn",
    "code": "R3-1",
    "description": "A right turn is prohibited here. The red circle and slash interrupt the turning arrow, making the restricted movement visible at a glance.",
    "slug": "no-right-turn"
  },
  {
    "image": "assets/no-u-turn.svg",
    "title": "No U-turn",
    "code": "R3-4",
    "description": "Turning around in a U-shaped movement is prohibited. The looping arrow is crossed out with a red diagonal slash.",
    "slug": "no-u-turn"
  },
  {
    "image": "assets/no-straight-through.svg",
    "title": "No straight through",
    "code": "R3-27",
    "description": "Continuing straight through is prohibited. A red slash across the upward arrow signals that another permitted movement must be taken.",
    "slug": "no-straight-through"
  },
  {
    "image": "assets/no-pedestrians-crossing.svg",
    "title": "No pedestrians crossing (symbol)",
    "code": "R9-3",
    "description": "Pedestrians may not cross at this location. The walking figure is crossed out in red to identify the restricted activity.",
    "slug": "no-pedestrians-crossing"
  },
  {
    "image": "assets/do-not-drive-on-tracks.svg",
    "title": "Do not drive on tracks",
    "code": "R15-6",
    "description": "Vehicles must not drive along the rail tracks. A car and track symbol inside a red prohibition mark communicate this restriction.",
    "slug": "do-not-drive-on-tracks"
  },
  {
    "image": "assets/no-parking-any-time.svg",
    "title": "No parking any time",
    "code": "R7-1",
    "description": "Parking is prohibited at all times in the indicated direction. Red lettering and an arrow define the restriction and its extent.",
    "slug": "no-parking-any-time"
  },
  {
    "image": "assets/no-parking-times.svg",
    "title": "No parking (times)",
    "code": "R7-2",
    "description": "Parking is prohibited during the hours shown on the sign. Outside those hours, other posted parking rules may apply.",
    "slug": "no-parking-times"
  },
  {
    "image": "assets/no-standing-any-time.svg",
    "title": "No standing any time",
    "code": "R7-4",
    "description": "Standing is prohibited at all times in the directions indicated. Red words and arrows mark the extent of the restriction.",
    "slug": "no-standing-any-time"
  },
  {
    "image": "assets/no-stopping-any-time.svg",
    "title": "No stopping any time",
    "code": "R7-4a",
    "description": "Stopping is prohibited at all times in the directions indicated. The red message makes this curbside restriction explicit.",
    "slug": "no-stopping-any-time"
  },
  {
    "image": "assets/no-parking-loading-zone.svg",
    "title": "No parking, loading zone",
    "code": "R7-6",
    "description": "This area is reserved for loading activity. The red parking restriction and directional arrows identify the loading zone.",
    "slug": "no-parking-loading-zone"
  },
  {
    "image": "assets/tow-away-zone.svg",
    "title": "Tow away zone (plaque)",
    "code": "R7-201aP",
    "description": "This supplemental plaque identifies a tow-away zone. Its red lettering reinforces the consequence of violating the associated restriction.",
    "slug": "tow-away-zone"
  },
  {
    "image": "assets/all-way.svg",
    "title": "All way (plaque)",
    "code": "R1-3P",
    "description": "This plaque accompanies a stop sign to indicate that all approaches to the intersection are controlled by stop signs.",
    "slug": "all-way"
  },
  {
    "image": "assets/yield-here-to-pedestrians-right-r1-5r.svg",
    "title": "Yield here to pedestrians (right)",
    "code": "R1-5R",
    "description": "Directs traffic to yield at the marked location for pedestrians. The arrow identifies the crossing location.",
    "slug": "yield-here-to-pedestrians-right-r1-5r"
  },
  {
    "image": "assets/yield-here-to-pedestrians-left-r1-5l.svg",
    "title": "Yield here to pedestrians (left)",
    "code": "R1-5L",
    "description": "Directs traffic to yield at the marked location for pedestrians. The arrow identifies the crossing location.",
    "slug": "yield-here-to-pedestrians-left-r1-5l"
  },
  {
    "image": "assets/yield-here-to-school-crossing-right-r1-5ar.svg",
    "title": "Yield here to school crossing (right)",
    "code": "R1-5aR",
    "description": "Directs traffic to yield at the marked location for school crossing. The arrow identifies the crossing location.",
    "slug": "yield-here-to-school-crossing-right-r1-5ar"
  },
  {
    "image": "assets/yield-here-to-school-crossing-left-r1-5al.png",
    "title": "Yield here to school crossing (left)",
    "code": "R1-5aL",
    "description": "Directs traffic to yield at the marked location for school crossing. The arrow identifies the crossing location.",
    "slug": "yield-here-to-school-crossing-left-r1-5al"
  },
  {
    "image": "assets/stop-here-for-pedestrians-right-r1-5br.png",
    "title": "Stop here for pedestrians (right)",
    "code": "R1-5bR",
    "description": "Directs traffic to stop at the marked location for pedestrians. The arrow identifies the crossing location.",
    "slug": "stop-here-for-pedestrians-right-r1-5br"
  },
  {
    "image": "assets/stop-here-for-pedestrians-left-r1-5bl.svg",
    "title": "Stop here for pedestrians (left)",
    "code": "R1-5bL",
    "description": "Directs traffic to stop at the marked location for pedestrians. The arrow identifies the crossing location.",
    "slug": "stop-here-for-pedestrians-left-r1-5bl"
  },
  {
    "image": "assets/stop-here-for-school-crossing-right-r1-5cr.png",
    "title": "Stop here for school crossing (right)",
    "code": "R1-5cR",
    "description": "Directs traffic to stop at the marked location for school crossing. The arrow identifies the crossing location.",
    "slug": "stop-here-for-school-crossing-right-r1-5cr"
  },
  {
    "image": "assets/stop-here-for-school-crossing-left-r1-5cl.png",
    "title": "Stop here for school crossing (left)",
    "code": "R1-5cL",
    "description": "Directs traffic to stop at the marked location for school crossing. The arrow identifies the crossing location.",
    "slug": "stop-here-for-school-crossing-left-r1-5cl"
  },
  {
    "image": "assets/yield-here-to-trail-crossing-right-r1-5dr.png",
    "title": "Yield here to trail crossing (right)",
    "code": "R1-5dR",
    "description": "Directs traffic to yield at the marked location for trail crossing. The arrow identifies the crossing location.",
    "slug": "yield-here-to-trail-crossing-right-r1-5dr"
  },
  {
    "image": "assets/yield-here-to-trail-crossing-left-r1-5dl.png",
    "title": "Yield here to trail crossing (left)",
    "code": "R1-5dL",
    "description": "Directs traffic to yield at the marked location for trail crossing. The arrow identifies the crossing location.",
    "slug": "yield-here-to-trail-crossing-left-r1-5dl"
  },
  {
    "image": "assets/stop-here-for-trail-crossing-right-r1-5er.png",
    "title": "Stop here for trail crossing (right)",
    "code": "R1-5eR",
    "description": "Directs traffic to stop at the marked location for trail crossing. The arrow identifies the crossing location.",
    "slug": "stop-here-for-trail-crossing-right-r1-5er"
  },
  {
    "image": "assets/stop-here-for-trail-crossing-left-r1-5el.png",
    "title": "Stop here for trail crossing (left)",
    "code": "R1-5eL",
    "description": "Directs traffic to stop at the marked location for trail crossing. The arrow identifies the crossing location.",
    "slug": "stop-here-for-trail-crossing-left-r1-5el"
  },
  {
    "image": "assets/in-street-pedestrian-crossing-yellow-background-r1-6.png",
    "title": "In-street pedestrian crossing (yellow background)",
    "code": "R1-6",
    "description": "Marks a pedestrian crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    "slug": "in-street-pedestrian-crossing-yellow-background-r1-6"
  },
  {
    "image": "assets/in-street-pedestrian-crossing-yellow-green-background-r1-6.png",
    "title": "In-street pedestrian crossing (yellow-green background)",
    "code": "R1-6",
    "description": "Marks a pedestrian crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    "slug": "in-street-pedestrian-crossing-yellow-green-background-r1-6"
  },
  {
    "image": "assets/in-street-pedestrian-crossing-yellow-background-r1-6a.png",
    "title": "In-street pedestrian crossing (yellow background)",
    "code": "R1-6a",
    "description": "Marks a pedestrian crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    "slug": "in-street-pedestrian-crossing-yellow-background-r1-6a"
  },
  {
    "image": "assets/in-street-pedestrian-crossing-yellow-green-background-r1-6a.png",
    "title": "In-street pedestrian crossing (yellow-green background)",
    "code": "R1-6a",
    "description": "Marks a pedestrian crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    "slug": "in-street-pedestrian-crossing-yellow-green-background-r1-6a"
  },
  {
    "image": "assets/in-street-school-crossing-r1-6b.png",
    "title": "In-street school crossing",
    "code": "R1-6b",
    "description": "Marks a school crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    "slug": "in-street-school-crossing-r1-6b"
  },
  {
    "image": "assets/in-street-school-crossing-r1-6c.png",
    "title": "In-street school crossing",
    "code": "R1-6c",
    "description": "Marks a school crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    "slug": "in-street-school-crossing-r1-6c"
  },
  {
    "image": "assets/in-street-trail-crossing-r1-6d.png",
    "title": "In-street trail crossing",
    "code": "R1-6d",
    "description": "Marks a trail crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    "slug": "in-street-trail-crossing-r1-6d"
  },
  {
    "image": "assets/in-street-trail-crossing-r1-6e.png",
    "title": "In-street trail crossing",
    "code": "R1-6e",
    "description": "Marks a trail crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    "slug": "in-street-trail-crossing-r1-6e"
  },
  {
    "image": "assets/no-right-turn-for-trucks-r3-1b.png",
    "title": "No right turn for trucks",
    "code": "R3-1b",
    "description": "Indicates the restriction shown: No right turn for trucks. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-right-turn-for-trucks-r3-1b"
  },
  {
    "image": "assets/no-right-turn-for-trucks-and-buses-r3-1c.png",
    "title": "No right turn for trucks and buses",
    "code": "R3-1c",
    "description": "Indicates the restriction shown: No right turn for trucks and buses. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-right-turn-for-trucks-and-buses-r3-1c"
  },
  {
    "image": "assets/no-right-turn-for-trucks-over-4-tons-r3-1d.png",
    "title": "No right turn for trucks over 4 tons",
    "code": "R3-1d",
    "description": "Indicates the restriction shown: No right turn for trucks over 4 tons. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-right-turn-for-trucks-over-4-tons-r3-1d"
  },
  {
    "image": "assets/no-right-turn-except-buses-r3-1e.png",
    "title": "No right turn except buses",
    "code": "R3-1e",
    "description": "Indicates the restriction shown: No right turn except buses. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-right-turn-except-buses-r3-1e"
  },
  {
    "image": "assets/no-right-turn-except-buses-and-taxis-r3-1f.png",
    "title": "No right turn except buses and taxis",
    "code": "R3-1f",
    "description": "Indicates the restriction shown: No right turn except buses and taxis. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-right-turn-except-buses-and-taxis-r3-1f"
  },
  {
    "image": "assets/no-right-turn-times-and-days-2-lines-r3-1g.png",
    "title": "No right turn (times and days) (2-lines)",
    "code": "R3-1g",
    "description": "Indicates the restriction shown: No right turn (times and days) (2-lines). Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-right-turn-times-and-days-2-lines-r3-1g"
  },
  {
    "image": "assets/no-right-turn-times-and-days-3-lines-r3-1h-r3-1h.png",
    "title": "No right turn (7\u20139 AM and 4\u20136 PM, Mon\u2013Fri)",
    "code": "R3-1h",
    "description": "Indicates the restriction shown: No right turn (times and days) (3-lines). Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-right-turn-times-and-days-3-lines-r3-1h-r3-1h"
  },
  {
    "image": "assets/no-right-turn-times-and-days-3-lines-r3-1h-1-time-span-r3-1h.png",
    "title": "No right turn (6:45\u20139:30 AM, Mon\u2013Fri)",
    "code": "R3-1h",
    "description": "Indicates the restriction shown: No right turn (times and days) (3-lines). Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-right-turn-times-and-days-3-lines-r3-1h-1-time-span-r3-1h"
  },
  {
    "image": "assets/no-left-turn-r3-2.svg",
    "title": "No left turn",
    "code": "R3-2",
    "description": "Indicates the restriction shown: No left turn. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-left-turn-r3-2"
  },
  {
    "image": "assets/reversible-lane-control-overhead-r3-9e.png",
    "title": "Reversible lane control (overhead)",
    "code": "R3-9e",
    "description": "Marks a pedestrian crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    "slug": "reversible-lane-control-overhead-r3-9e"
  },
  {
    "image": "assets/no-u-or-left-turn-r3-18.png",
    "title": "No U or left turn",
    "code": "R3-18",
    "description": "Indicates the restriction shown: No U or left turn. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-u-or-left-turn-r3-18"
  },
  {
    "image": "assets/toll-costs-on-express-lane-overhead-r3-48.png",
    "title": "Toll Costs on Express Lane (Overhead)",
    "code": "R3-48",
    "description": "Marks a pedestrian crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    "slug": "toll-costs-on-express-lane-overhead-r3-48"
  },
  {
    "image": "assets/toll-costs-on-express-lane-or-hov-overhead-r3-48a.png",
    "title": "Toll Costs on Express Lane or HOV (Overhead)",
    "code": "R3-48a",
    "description": "Marks a pedestrian crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    "slug": "toll-costs-on-express-lane-or-hov-overhead-r3-48a"
  },
  {
    "image": "assets/no-parking-times-alternative-r7-2a.png",
    "title": "No parking (times) (alternative)",
    "code": "R7-2a",
    "description": "Indicates the restriction shown: No parking (times) (alternative). Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-times-alternative-r7-2a"
  },
  {
    "image": "assets/no-parking-except-sundays-and-holidays-r7-3.png",
    "title": "No parking except Sundays and Holidays",
    "code": "R7-3",
    "description": "Indicates the restriction shown: No parking except Sundays and Holidays. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-except-sundays-and-holidays-r7-3"
  },
  {
    "image": "assets/no-parking-bike-lane-r7-9.png",
    "title": "No parking, bike lane",
    "code": "R7-9",
    "description": "Indicates the restriction shown: No parking, bike lane. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-bike-lane-r7-9"
  },
  {
    "image": "assets/no-parking-bike-lane-r7-9a.png",
    "title": "No parking, bike lane",
    "code": "R7-9a",
    "description": "Indicates the restriction shown: No parking, bike lane. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-bike-lane-r7-9a"
  },
  {
    "image": "assets/no-parking-bus-stop-r7-107.png",
    "title": "No parking, bus stop",
    "code": "R7-107",
    "description": "Indicates the restriction shown: No parking, bus stop. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-bus-stop-r7-107"
  },
  {
    "image": "assets/no-parking-bus-stop-r7-107a.png",
    "title": "No parking, bus stop",
    "code": "R7-107a",
    "description": "Indicates the restriction shown: No parking, bus stop. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-bus-stop-r7-107a"
  },
  {
    "image": "assets/no-parking-bus-stop-with-transit-pictograph-r7-107b.png",
    "title": "No parking, bus stop with transit pictograph",
    "code": "R7-107b",
    "description": "Indicates the restriction shown: No parking, bus stop with transit pictograph. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-bus-stop-with-transit-pictograph-r7-107b"
  },
  {
    "image": "assets/no-parking-except-electric-vehicles-r7-111.png",
    "title": "No parking, except electric vehicles",
    "code": "R7-111",
    "description": "Indicates the restriction shown: No parking, except electric vehicles. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-except-electric-vehicles-r7-111"
  },
  {
    "image": "assets/no-parking-times-except-electric-vehicles-r7-111a.png",
    "title": "No parking, (times) except electric vehicles",
    "code": "R7-111a",
    "description": "Indicates the restriction shown: No parking, (times) except electric vehicles. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-times-except-electric-vehicles-r7-111a"
  },
  {
    "image": "assets/no-parking-except-while-charging-r7-113.png",
    "title": "No parking, except while charging",
    "code": "R7-113",
    "description": "Indicates the restriction shown: No parking, except while charging. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-except-while-charging-r7-113"
  },
  {
    "image": "assets/no-parking-and-one-hour-parking-times-combined-r7-200.png",
    "title": "No parking and one hour parking (times) (combined)",
    "code": "R7-200",
    "description": "Indicates the restriction shown: No parking and one hour parking (times) (combined). Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-and-one-hour-parking-times-combined-r7-200"
  },
  {
    "image": "assets/no-parking-and-one-hour-parking-times-combined-r7-200a.png",
    "title": "No parking and one hour parking (times) (combined)",
    "code": "R7-200a",
    "description": "Indicates the restriction shown: No parking and one hour parking (times) (combined). Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-and-one-hour-parking-times-combined-r7-200a"
  },
  {
    "image": "assets/this-side-of-sign-plaque-r7-202p.png",
    "title": "This side of sign (plaque)",
    "code": "R7-202P",
    "description": "Identifies this side of sign (plaque). The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    "slug": "this-side-of-sign-plaque-r7-202p"
  },
  {
    "image": "assets/snow-emergency-route-no-parking-during-snow-emergency-tow-away-zone-r7-203.svg",
    "title": "Snow emergency route, no parking during snow emergency, tow-away zone",
    "code": "R7-203",
    "description": "Identifies snow emergency route, no parking during snow emergency, tow-away zone. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    "slug": "snow-emergency-route-no-parking-during-snow-emergency-tow-away-zone-r7-203"
  },
  {
    "image": "assets/no-parking-on-pavement-r8-1.png",
    "title": "No parking on pavement",
    "code": "R8-1",
    "description": "Indicates the restriction shown: No parking on pavement. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-on-pavement-r8-1"
  },
  {
    "image": "assets/no-parking-except-on-shoulder-r8-2.png",
    "title": "No parking except on shoulder",
    "code": "R8-2",
    "description": "Indicates the restriction shown: No parking except on shoulder. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-except-on-shoulder-r8-2"
  },
  {
    "image": "assets/no-parking-r8-3.png",
    "title": "No parking",
    "code": "R8-3",
    "description": "Indicates the restriction shown: No parking. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-r8-3"
  },
  {
    "image": "assets/no-parking-text-r8-3a.png",
    "title": "No parking (text)",
    "code": "R8-3a",
    "description": "Indicates the restriction shown: No parking (text). Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-text-r8-3a"
  },
  {
    "image": "assets/no-parking-on-pavement-r8-3c.png",
    "title": "No parking on pavement",
    "code": "R8-3c",
    "description": "Indicates the restriction shown: No parking on pavement. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-on-pavement-r8-3c"
  },
  {
    "image": "assets/no-parking-on-bridge-r8-3d.png",
    "title": "No parking on bridge",
    "code": "R8-3d",
    "description": "Indicates the restriction shown: No parking on bridge. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-on-bridge-r8-3d"
  },
  {
    "image": "assets/no-parking-on-tracks-r8-3e.png",
    "title": "No parking on tracks",
    "code": "R8-3e",
    "description": "Indicates the restriction shown: No parking on tracks. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-on-tracks-r8-3e"
  },
  {
    "image": "assets/no-parking-except-on-shoulder-r8-3f.png",
    "title": "No parking except on shoulder",
    "code": "R8-3f",
    "description": "Indicates the restriction shown: No parking except on shoulder. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-parking-except-on-shoulder-r8-3f"
  },
  {
    "image": "assets/no-stopping-on-pavement-r8-5.png",
    "title": "No stopping on pavement",
    "code": "R8-5",
    "description": "Indicates the restriction shown: No stopping on pavement. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-stopping-on-pavement-r8-5"
  },
  {
    "image": "assets/no-stopping-except-on-shoulder-r8-6.png",
    "title": "No stopping except on shoulder",
    "code": "R8-6",
    "description": "Indicates the restriction shown: No stopping except on shoulder. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-stopping-except-on-shoulder-r8-6"
  },
  {
    "image": "assets/no-hitchhiking-symbol-r9-4.png",
    "title": "No hitchhiking (symbol)",
    "code": "R9-4",
    "description": "Indicates the restriction shown: No hitchhiking (symbol). Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-hitchhiking-symbol-r9-4"
  },
  {
    "image": "assets/no-skaters-r9-13.png",
    "title": "No skaters",
    "code": "R9-13",
    "description": "Indicates the restriction shown: No skaters. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-skaters-r9-13"
  },
  {
    "image": "assets/no-equestrians-r9-14.png",
    "title": "No equestrians",
    "code": "R9-14",
    "description": "Indicates the restriction shown: No equestrians. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-equestrians-r9-14"
  },
  {
    "image": "assets/no-snowmobiles-r9-15.png",
    "title": "No snowmobiles",
    "code": "R9-15",
    "description": "Indicates the restriction shown: No snowmobiles. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-snowmobiles-r9-15"
  },
  {
    "image": "assets/no-all-terrain-vehicles-r9-16.png",
    "title": "No all-terrain vehicles",
    "code": "R9-16",
    "description": "Indicates the restriction shown: No all-terrain vehicles. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-all-terrain-vehicles-r9-16"
  },
  {
    "image": "assets/no-turn-on-circular-red-r10-11a.png",
    "title": "No turn on circular red",
    "code": "R10-11a",
    "description": "Indicates the restriction shown: No turn on circular red. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    "slug": "no-turn-on-circular-red-r10-11a"
  },
  {
    "image": "assets/turning-vehicles-yield-to-pedestrians-right-yellow-green-background-r10-15r.png",
    "title": "Turning vehicles yield to pedestrians (right) (yellow background)",
    "code": "R10-15R",
    "description": "Identifies turning vehicles yield to pedestrians (right). The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    "slug": "turning-vehicles-yield-to-pedestrians-right-yellow-green-background-r10-15r"
  },
  {
    "image": "assets/turning-vehicles-yield-to-pedestrians-right-fluorescent-background-r10-15r.png",
    "title": "Turning vehicles yield to pedestrians (right) (yellow-green background)",
    "code": "R10-15R",
    "description": "Identifies turning vehicles yield to pedestrians (right). The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    "slug": "turning-vehicles-yield-to-pedestrians-right-fluorescent-background-r10-15r"
  },
  {
    "image": "assets/turning-vehicles-yield-to-pedestrians-left-yellow-green-background-r10-15l.svg",
    "title": "Turning vehicles yield to pedestrians (left) (yellow background)",
    "code": "R10-15L",
    "description": "Identifies turning vehicles yield to pedestrians (left). The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    "slug": "turning-vehicles-yield-to-pedestrians-left-yellow-green-background-r10-15l"
  },
  {
    "image": "assets/turning-vehicles-yield-to-pedestrians-left-fluorescent-background-r10-15l.png",
    "title": "Turning vehicles yield to pedestrians (left) (yellow-green background)",
    "code": "R10-15L",
    "description": "Identifies turning vehicles yield to pedestrians (left). The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    "slug": "turning-vehicles-yield-to-pedestrians-left-fluorescent-background-r10-15l"
  },
  {
    "image": "assets/turning-vehicles-stop-for-pedestrians-r10-15a.png",
    "title": "Turning vehicles stop for pedestrians",
    "code": "R10-15a",
    "description": "Identifies turning vehicles stop for pedestrians. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    "slug": "turning-vehicles-stop-for-pedestrians-r10-15a"
  },
  {
    "image": "assets/traffic-signal-photo-enforced-r10-18a.png",
    "title": "Traffic signal photo enforced",
    "code": "R10-18a",
    "description": "Identifies traffic signal photo enforced. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    "slug": "traffic-signal-photo-enforced-r10-18a"
  },
  {
    "image": "assets/crosswalk-stop-on-red-r10-23.png",
    "title": "Crosswalk - stop on red",
    "code": "R10-23",
    "description": "Identifies crosswalk - stop on red. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    "slug": "crosswalk-stop-on-red-r10-23"
  },
  {
    "image": "assets/hazardous-material-prohibited-r14-3.png",
    "title": "Hazardous material prohibited",
    "code": "R14-3",
    "description": "Identifies hazardous material prohibited. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    "slug": "hazardous-material-prohibited-r14-3"
  },
  {
    "image": "assets/national-network-prohibited-r14-5.png",
    "title": "National Network prohibited",
    "code": "R14-5",
    "description": "Identifies national network prohibited. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    "slug": "national-network-prohibited-r14-5"
  },
  {
    "image": "assets/school-bus-stop-ahead-s3-1.png",
    "title": "School bus stop ahead",
    "code": "S3-1",
    "description": "Gives advance notice of school bus stop ahead. The red element highlights the traffic control or restriction ahead.",
    "slug": "school-bus-stop-ahead-s3-1"
  },
  {
    "image": "assets/stop-sign-ahead-w3-1.png",
    "title": "Stop sign ahead",
    "code": "W3-1",
    "description": "Directs traffic to stop sign ahead. Read any additional conditions displayed on the sign.",
    "slug": "stop-sign-ahead-w3-1"
  },
  {
    "image": "assets/yield-sign-ahead-w3-2.svg",
    "title": "Yield sign ahead",
    "code": "W3-2",
    "description": "Directs traffic to yield sign ahead. Give the right of way as indicated.",
    "slug": "yield-sign-ahead-w3-2"
  },
  {
    "image": "assets/traffic-light-ahead-w3-3.png",
    "title": "Traffic light ahead",
    "code": "W3-3",
    "description": "Gives advance notice of traffic light ahead. The red element highlights the traffic control or restriction ahead.",
    "slug": "traffic-light-ahead-w3-3"
  },
  {
    "image": "assets/end-of-road-marker-om4-1.png",
    "title": "End Of Road Marker",
    "code": "OM4-1",
    "description": "Marks the end of a road. The red marker highlights a boundary that traffic must not continue beyond.",
    "slug": "end-of-road-marker-om4-1"
  },
  {
    "image": "assets/end-of-road-marker-om4-2.png",
    "title": "End Of Road Marker",
    "code": "OM4-2",
    "description": "Marks the end of a road. The red marker highlights a boundary that traffic must not continue beyond.",
    "slug": "end-of-road-marker-om4-2"
  },
  {
    "image": "assets/end-of-road-marker-om4-3.png",
    "title": "End Of Road Marker",
    "code": "OM4-3",
    "description": "Marks the end of a road. The red marker highlights a boundary that traffic must not continue beyond.",
    "slug": "end-of-road-marker-om4-3"
  },
  {
    "image": "assets/interstate-route-marker-2-digits-m1-1.png",
    "title": "Interstate Route Marker (2 digits)",
    "code": "M1-1",
    "description": "Identifies an Interstate highway route. The red band is part of the familiar red, white, and blue Interstate shield.",
    "slug": "interstate-route-marker-2-digits-m1-1"
  },
  {
    "image": "assets/interstate-route-marker-3-digits-m1-1.png",
    "title": "Interstate Route Marker (3 digits)",
    "code": "M1-1",
    "description": "Identifies an Interstate highway route. The red band is part of the familiar red, white, and blue Interstate shield.",
    "slug": "interstate-route-marker-3-digits-m1-1"
  },
  {
    "image": "assets/interstate-route-marker-with-state-2-digits-m1-1a.png",
    "title": "Interstate Route Marker with State (2 digits)",
    "code": "M1-1a",
    "description": "Identifies an Interstate highway route. The red band is part of the familiar red, white, and blue Interstate shield.",
    "slug": "interstate-route-marker-with-state-2-digits-m1-1a"
  },
  {
    "image": "assets/interstate-route-marker-with-state-3-digits-m1-1a.png",
    "title": "Interstate Route Marker with State (3 digits)",
    "code": "M1-1a",
    "description": "Identifies an Interstate highway route. The red band is part of the familiar red, white, and blue Interstate shield.",
    "slug": "interstate-route-marker-with-state-3-digits-m1-1a"
  },
  {
    "image": "assets/national-scenic-byway-m10-1.svg",
    "title": "National Scenic Byway",
    "code": "M10-1",
    "description": "Identifies national scenic byway. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    "slug": "national-scenic-byway-m10-1"
  },
  {
    "image": "assets/national-scenic-byway-plaque-m10-1ap.png",
    "title": "National Scenic Byway (plaque)",
    "code": "M10-1aP",
    "description": "Identifies national scenic byway (plaque). The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    "slug": "national-scenic-byway-plaque-m10-1ap"
  },
  {
    "image": "assets/project-information-i2-5.png",
    "title": "Project information",
    "code": "I2-5",
    "description": "Identifies project information. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    "slug": "project-information-i2-5"
  },
  {
    "image": "assets/specific-services-sign.png",
    "title": "Specific services sign (food)",
    "code": "UNNUMBERED",
    "description": "Identifies food services at the exit shown. The business logos contain visible red within the blue service sign.",
    "slug": "specific-services-sign"
  },
  {
    "image": "assets/pull-through-destination-e6-1a.png",
    "title": "Pull-Through (Destination)",
    "code": "E6-1a",
    "description": "Identifies pull-through (destination). The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    "slug": "pull-through-destination-e6-1a"
  },
  {
    "image": "assets/post-interchange-travel-time-e7-4.png",
    "title": "Post-Interchange Travel Time",
    "code": "E7-4",
    "description": "Identifies post-interchange travel time. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    "slug": "post-interchange-travel-time-e7-4"
  },
  {
    "image": "assets/distance-and-travel-time-e7-5.png",
    "title": "Distance and Travel Time",
    "code": "E7-5",
    "description": "Identifies distance and travel time. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    "slug": "distance-and-travel-time-e7-5"
  }
];
document.querySelectorAll(".sign-reference").forEach((link) => {
  const slug = new URL(link.href).searchParams.get("sign");
  const sign = storySigns.find((item) => item.slug === slug);
  if (!sign) return;
  link.setAttribute("aria-expanded", "false");
  link.addEventListener("click", (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const existing = link._signPanel;
    if (existing) {
      existing.remove();
      link._signPanel = null;
      link.setAttribute("aria-expanded", "false");
      return;
    }
    const panel = document.createElement("aside");
    panel.className = "story-sign-panel";
    panel.setAttribute("aria-label", sign.title + " sign reference");
    const img = document.createElement("img");
    img.src = sign.image;
    img.alt = sign.title + " road sign";
    const content = document.createElement("div");
    const code = document.createElement("small");
    code.textContent = sign.code + " / THE COLLECTION";
    const title = document.createElement("h2");
    title.textContent = sign.title;
    const description = document.createElement("p");
    description.textContent = sign.description;
    const collection = document.createElement("a");
    collection.href = link.href;
    collection.textContent = "Explore this sign in the collection ↗";
    const close = document.createElement("button");
    close.textContent = "Close ×";
    close.setAttribute("aria-label", "Close " + sign.title + " reference");
    close.addEventListener("click", () => {
      panel.remove();
      link._signPanel = null;
      link.setAttribute("aria-expanded", "false");
      link.focus();
    });
    content.append(code, title, description, collection);
    panel.append(img, content, close);
    link.closest("p, blockquote").after(panel);
    link._signPanel = panel;
    link.setAttribute("aria-expanded", "true");
  });
});
