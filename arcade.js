const arcadeSigns = [
  {
    image: "assets/no-bicycles.svg",
    title: "No bicycles",
    code: "R5-6",
    category: "REGULATORY",
    description:
      "Bicycles may not enter this roadway or area. A red circle and diagonal slash turn a familiar bicycle silhouette into a clear restriction.",
    source: "https://upload.wikimedia.org/wikipedia/commons/a/ad/MUTCD_R5-6.svg",
    wikiCaption: "R5-6 No bicycles",
  },
  {
    image: "assets/stop.svg",
    title: "Stop",
    code: "R1-1",
    category: "REGULATORY",
    description:
      "Come to a complete stop before proceeding. The red octagon makes this instruction recognizable even before you read the word.",
    source: "https://upload.wikimedia.org/wikipedia/commons/c/c0/MUTCD_R1-1.svg",
    wikiCaption: "R1-1 Stop",
  },
  {
    image: "assets/yield.svg",
    title: "Yield",
    code: "R1-2",
    category: "REGULATORY",
    description:
      "Slow down and give the right of way to other traffic. Stop when necessary, then proceed when the way is clear.",
    source: "https://upload.wikimedia.org/wikipedia/commons/3/39/MUTCD_R1-2.svg",
    wikiCaption: "R1-2 Yield",
  },
  {
    image: "assets/do-not-enter.svg",
    title: "Do not enter",
    code: "R5-1",
    category: "REGULATORY",
    description:
      "Traffic must not enter from this direction. A white bar cuts across a red circle, marking an entrance that is closed to approaching vehicles.",
    source: "https://upload.wikimedia.org/wikipedia/commons/7/7d/MUTCD_R5-1.svg",
    wikiCaption: "R5-1 Do not enter",
  },
  {
    image: "assets/wrong-way.svg",
    title: "Wrong way",
    code: "R5-1a",
    category: "REGULATORY",
    description:
      "You are traveling against the permitted direction of traffic. The red rectangular sign gives a direct warning to turn around safely.",
    source: "https://upload.wikimedia.org/wikipedia/commons/2/2a/MUTCD_R5-1a.svg",
    wikiCaption: "R5-1a Wrong way",
  },
  {
    image: "assets/wrong-way-for-bicycles.svg",
    title: "Wrong way for bicycles",
    code: "R5-1b",
    category: "REGULATORY",
    description:
      "Bicycle traffic is traveling in the wrong direction. The bicycle symbol identifies who this red warning is intended for.",
    source: "https://upload.wikimedia.org/wikipedia/commons/e/ec/MUTCD_R5-1b.svg",
    wikiCaption: "R5-1b Wrong way for bicycles",
  },
  {
    image: "assets/no-trucks.svg",
    title: "No trucks",
    code: "R5-2",
    category: "REGULATORY",
    description:
      "Trucks are prohibited from entering this roadway. The red slash crosses the truck silhouette to communicate the restriction visually.",
    source: "https://upload.wikimedia.org/wikipedia/commons/9/98/MUTCD_R5-2.svg",
    wikiCaption: "R5-2 No trucks",
  },
  {
    image: "assets/no-right-turn.svg",
    title: "No right turn",
    code: "R3-1",
    category: "REGULATORY",
    description:
      "A right turn is prohibited here. The red circle and slash interrupt the turning arrow, making the restricted movement visible at a glance.",
    source: "https://upload.wikimedia.org/wikipedia/commons/8/8f/MUTCD_R3-1.svg",
    wikiCaption: "R3-1 No right turn",
  },
  {
    image: "assets/no-u-turn.svg",
    title: "No U-turn",
    code: "R3-4",
    category: "REGULATORY",
    description:
      "Turning around in a U-shaped movement is prohibited. The looping arrow is crossed out with a red diagonal slash.",
    source: "https://upload.wikimedia.org/wikipedia/commons/d/d1/MUTCD_R3-4.svg",
    wikiCaption: "R3-4 No U-turn",
  },
  {
    image: "assets/no-straight-through.svg",
    title: "No straight through",
    code: "R3-27",
    category: "REGULATORY",
    description:
      "Continuing straight through is prohibited. A red slash across the upward arrow signals that another permitted movement must be taken.",
    source: "https://upload.wikimedia.org/wikipedia/commons/a/a9/MUTCD_R3-27.svg",
    wikiCaption: "R3-27 No straight through",
  },
  {
    image: "assets/no-pedestrians-crossing.svg",
    title: "No pedestrians crossing (symbol)",
    code: "R9-3",
    category: "REGULATORY",
    description:
      "Pedestrians may not cross at this location. The walking figure is crossed out in red to identify the restricted activity.",
    source: "https://upload.wikimedia.org/wikipedia/commons/c/c6/MUTCD_R9-3.svg",
    wikiCaption: "R9-3 No pedestrians crossing (symbol)",
  },
  {
    image: "assets/do-not-drive-on-tracks.svg",
    title: "Do not drive on tracks",
    code: "R15-6",
    category: "REGULATORY",
    description:
      "Vehicles must not drive along the rail tracks. A car and track symbol inside a red prohibition mark communicate this restriction.",
    source: "https://upload.wikimedia.org/wikipedia/commons/b/b6/MUTCD_R15-6.svg",
    wikiCaption: "R15-6 Do not drive on tracks",
  },
  {
    image: "assets/no-parking-any-time.svg",
    title: "No parking any time",
    code: "R7-1",
    category: "REGULATORY",
    description:
      "Parking is prohibited at all times in the indicated direction. Red lettering and an arrow define the restriction and its extent.",
    source: "https://upload.wikimedia.org/wikipedia/commons/3/3b/MUTCD_R7-1.svg",
    wikiCaption: "R7-1 No parking any time",
  },
  {
    image: "assets/no-parking-times.svg",
    title: "No parking (times)",
    code: "R7-2",
    category: "REGULATORY",
    description:
      "Parking is prohibited during the hours shown on the sign. Outside those hours, other posted parking rules may apply.",
    source: "https://upload.wikimedia.org/wikipedia/commons/c/c2/MUTCD_R7-2.svg",
    wikiCaption: "R7-2 No parking (times)",
  },
  {
    image: "assets/no-standing-any-time.svg",
    title: "No standing any time",
    code: "R7-4",
    category: "REGULATORY",
    description:
      "Standing is prohibited at all times in the directions indicated. Red words and arrows mark the extent of the restriction.",
    source: "https://upload.wikimedia.org/wikipedia/commons/2/2f/MUTCD_R7-4.svg",
    wikiCaption: "R7-4 No standing any time",
  },
  {
    image: "assets/no-stopping-any-time.svg",
    title: "No stopping any time",
    code: "R7-4a",
    category: "REGULATORY",
    description:
      "Stopping is prohibited at all times in the directions indicated. The red message makes this curbside restriction explicit.",
    source: "https://upload.wikimedia.org/wikipedia/commons/8/84/MUTCD_R7-4a.svg",
    wikiCaption: "R7-4a No stopping any time",
  },
  {
    image: "assets/no-parking-loading-zone.svg",
    title: "No parking, loading zone",
    code: "R7-6",
    category: "REGULATORY",
    description:
      "This area is reserved for loading activity. The red parking restriction and directional arrows identify the loading zone.",
    source: "https://upload.wikimedia.org/wikipedia/commons/5/55/MUTCD_R7-6.svg",
    wikiCaption: "R7-6 No parking, loading zone",
  },
  {
    image: "assets/tow-away-zone.svg",
    title: "Tow away zone (plaque)",
    code: "R7-201aP",
    category: "REGULATORY",
    description:
      "This supplemental plaque identifies a tow-away zone. Its red lettering reinforces the consequence of violating the associated restriction.",
    source: "https://upload.wikimedia.org/wikipedia/commons/5/54/MUTCD_R7-201aP.svg",
    wikiCaption: "R7-201aP Tow away zone (plaque)",
  },
  {
    image: "assets/all-way.svg",
    title: "All way (plaque)",
    code: "R1-3P",
    category: "REGULATORY",
    description:
      "This plaque accompanies a stop sign to indicate that all approaches to the intersection are controlled by stop signs.",
    source: "https://upload.wikimedia.org/wikipedia/commons/c/c7/MUTCD_R1-3P.svg",
    wikiCaption: "R1-3P All way (plaque)",
  },
  {
    image: "assets/yield-here-to-pedestrians-right-r1-5r.svg",
    title: "Yield here to pedestrians (right)",
    code: "R1-5R",
    category: "REGULATORY",
    description:
      "Directs traffic to yield at the marked location for pedestrians. The arrow identifies the crossing location.",
    source: "https://upload.wikimedia.org/wikipedia/commons/1/15/MUTCD_R1-5R.svg",
    wikiCaption: "R1-5R Yield here to pedestrians (right)",
  },
  {
    image: "assets/yield-here-to-pedestrians-left-r1-5l.svg",
    title: "Yield here to pedestrians (left)",
    code: "R1-5L",
    category: "REGULATORY",
    description:
      "Directs traffic to yield at the marked location for pedestrians. The arrow identifies the crossing location.",
    source: "https://upload.wikimedia.org/wikipedia/commons/f/f5/MUTCD_R1-5L.svg",
    wikiCaption: "R1-5L Yield here to pedestrians (left)",
  },
  {
    image: "assets/yield-here-to-school-crossing-right-r1-5ar.svg",
    title: "Yield here to school crossing (right)",
    code: "R1-5aR",
    category: "REGULATORY",
    description:
      "Directs traffic to yield at the marked location for school crossing. The arrow identifies the crossing location.",
    source: "https://upload.wikimedia.org/wikipedia/commons/a/a5/MUTCD_R1-5aR.svg",
    wikiCaption: "R1-5aR Yield here to school crossing (right)",
  },
  {
    image: "assets/yield-here-to-school-crossing-left-r1-5al.png",
    title: "Yield here to school crossing (left)",
    code: "R1-5aL",
    category: "REGULATORY",
    description:
      "Directs traffic to yield at the marked location for school crossing. The arrow identifies the crossing location.",
    source: "https://upload.wikimedia.org/wikipedia/commons/e/ef/MUTCD_R1-5aL.svg",
    wikiCaption: "R1-5aL Yield here to school crossing (left)",
  },
  {
    image: "assets/stop-here-for-pedestrians-right-r1-5br.png",
    title: "Stop here for pedestrians (right)",
    code: "R1-5bR",
    category: "REGULATORY",
    description:
      "Directs traffic to stop at the marked location for pedestrians. The arrow identifies the crossing location.",
    source: "https://upload.wikimedia.org/wikipedia/commons/b/bc/MUTCD_R1-5bR.svg",
    wikiCaption: "R1-5bR Stop here for pedestrians (right)",
  },
  {
    image: "assets/stop-here-for-pedestrians-left-r1-5bl.svg",
    title: "Stop here for pedestrians (left)",
    code: "R1-5bL",
    category: "REGULATORY",
    description:
      "Directs traffic to stop at the marked location for pedestrians. The arrow identifies the crossing location.",
    source: "https://upload.wikimedia.org/wikipedia/commons/8/83/MUTCD_R1-5bL.svg",
    wikiCaption: "R1-5bL Stop here for pedestrians (left)",
  },
  {
    image: "assets/stop-here-for-school-crossing-right-r1-5cr.png",
    title: "Stop here for school crossing (right)",
    code: "R1-5cR",
    category: "REGULATORY",
    description:
      "Directs traffic to stop at the marked location for school crossing. The arrow identifies the crossing location.",
    source: "https://upload.wikimedia.org/wikipedia/commons/1/1d/MUTCD_R1-5cR.svg",
    wikiCaption: "R1-5cR Stop here for school crossing (right)",
  },
  {
    image: "assets/stop-here-for-school-crossing-left-r1-5cl.png",
    title: "Stop here for school crossing (left)",
    code: "R1-5cL",
    category: "REGULATORY",
    description:
      "Directs traffic to stop at the marked location for school crossing. The arrow identifies the crossing location.",
    source: "https://upload.wikimedia.org/wikipedia/commons/4/4c/MUTCD_R1-5cL.svg",
    wikiCaption: "R1-5cL Stop here for school crossing (left)",
  },
  {
    image: "assets/yield-here-to-trail-crossing-right-r1-5dr.png",
    title: "Yield here to trail crossing (right)",
    code: "R1-5dR",
    category: "REGULATORY",
    description:
      "Directs traffic to yield at the marked location for trail crossing. The arrow identifies the crossing location.",
    source: "https://upload.wikimedia.org/wikipedia/commons/2/25/MUTCD_R1-5dR.svg",
    wikiCaption: "R1-5dR Yield here to trail crossing (right)",
  },
  {
    image: "assets/yield-here-to-trail-crossing-left-r1-5dl.png",
    title: "Yield here to trail crossing (left)",
    code: "R1-5dL",
    category: "REGULATORY",
    description:
      "Directs traffic to yield at the marked location for trail crossing. The arrow identifies the crossing location.",
    source: "https://upload.wikimedia.org/wikipedia/commons/8/8f/MUTCD_R1-5dL.svg",
    wikiCaption: "R1-5dL Yield here to trail crossing (left)",
  },
  {
    image: "assets/stop-here-for-trail-crossing-right-r1-5er.png",
    title: "Stop here for trail crossing (right)",
    code: "R1-5eR",
    category: "REGULATORY",
    description:
      "Directs traffic to stop at the marked location for trail crossing. The arrow identifies the crossing location.",
    source: "https://upload.wikimedia.org/wikipedia/commons/2/24/MUTCD_R1-5eR.svg",
    wikiCaption: "R1-5eR Stop here for trail crossing (right)",
  },
  {
    image: "assets/stop-here-for-trail-crossing-left-r1-5el.png",
    title: "Stop here for trail crossing (left)",
    code: "R1-5eL",
    category: "REGULATORY",
    description:
      "Directs traffic to stop at the marked location for trail crossing. The arrow identifies the crossing location.",
    source: "https://upload.wikimedia.org/wikipedia/commons/c/c3/MUTCD_R1-5eL.svg",
    wikiCaption: "R1-5eL Stop here for trail crossing (left)",
  },
  {
    image: "assets/in-street-pedestrian-crossing-yellow-background-r1-6.png",
    title: "In-street pedestrian crossing (yellow background)",
    code: "R1-6",
    category: "REGULATORY",
    description:
      "Marks a pedestrian crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    source: "https://upload.wikimedia.org/wikipedia/commons/7/71/MUTCD_R1-6_%28yellow%29.svg",
    wikiCaption: "R1-6 In-street pedestrian crossing [ a ] [ b ]",
  },
  {
    image: "assets/in-street-pedestrian-crossing-yellow-green-background-r1-6.png",
    title: "In-street pedestrian crossing (yellow-green background)",
    code: "R1-6",
    category: "REGULATORY",
    description:
      "Marks a pedestrian crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    source: "https://upload.wikimedia.org/wikipedia/commons/2/2f/MUTCD_R1-6.svg",
    wikiCaption: "R1-6 In-street pedestrian crossing",
  },
  {
    image: "assets/in-street-pedestrian-crossing-yellow-background-r1-6a.png",
    title: "In-street pedestrian crossing (yellow background)",
    code: "R1-6a",
    category: "REGULATORY",
    description:
      "Marks a pedestrian crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    source: "https://upload.wikimedia.org/wikipedia/commons/c/c3/MUTCD_R1-6a_%28yellow%29.svg",
    wikiCaption: "R1-6a In-street pedestrian crossing [ a ] [ b ]",
  },
  {
    image: "assets/in-street-pedestrian-crossing-yellow-green-background-r1-6a.png",
    title: "In-street pedestrian crossing (yellow-green background)",
    code: "R1-6a",
    category: "REGULATORY",
    description:
      "Marks a pedestrian crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    source: "https://upload.wikimedia.org/wikipedia/commons/5/58/MUTCD_R1-6a.svg",
    wikiCaption: "R1-6a In-street pedestrian crossing",
  },
  {
    image: "assets/in-street-school-crossing-r1-6b.png",
    title: "In-street school crossing",
    code: "R1-6b",
    category: "REGULATORY",
    description:
      "Marks a school crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    source: "https://upload.wikimedia.org/wikipedia/commons/6/68/MUTCD_R1-6b.svg",
    wikiCaption: "R1-6b In-street school crossing",
  },
  {
    image: "assets/in-street-school-crossing-r1-6c.png",
    title: "In-street school crossing",
    code: "R1-6c",
    category: "REGULATORY",
    description:
      "Marks a school crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    source: "https://upload.wikimedia.org/wikipedia/commons/8/81/MUTCD_R1-6c.svg",
    wikiCaption: "R1-6c In-street school crossing",
  },
  {
    image: "assets/in-street-trail-crossing-r1-6d.png",
    title: "In-street trail crossing",
    code: "R1-6d",
    category: "REGULATORY",
    description:
      "Marks a trail crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    source: "https://upload.wikimedia.org/wikipedia/commons/7/77/MUTCD_R1-6d.svg",
    wikiCaption: "R1-6d In-street trail crossing",
  },
  {
    image: "assets/in-street-trail-crossing-r1-6e.png",
    title: "In-street trail crossing",
    code: "R1-6e",
    category: "REGULATORY",
    description:
      "Marks a trail crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    source: "https://upload.wikimedia.org/wikipedia/commons/b/b3/MUTCD_R1-6e.svg",
    wikiCaption: "R1-6e In-street trail crossing",
  },
  {
    image: "assets/no-right-turn-for-trucks-r3-1b.png",
    title: "No right turn for trucks",
    code: "R3-1b",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No right turn for trucks. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/b/bc/MUTCD_R3-1b.svg",
    wikiCaption: "R3-1b No right turn for trucks",
  },
  {
    image: "assets/no-right-turn-for-trucks-and-buses-r3-1c.png",
    title: "No right turn for trucks and buses",
    code: "R3-1c",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No right turn for trucks and buses. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/4/4a/MUTCD_R3-1c.svg",
    wikiCaption: "R3-1c No right turn for trucks and buses",
  },
  {
    image: "assets/no-right-turn-for-trucks-over-4-tons-r3-1d.png",
    title: "No right turn for trucks over 4 tons",
    code: "R3-1d",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No right turn for trucks over 4 tons. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/a/a2/MUTCD_R3-1d.svg",
    wikiCaption: "R3-1d No right turn for trucks over 4 tons",
  },
  {
    image: "assets/no-right-turn-except-buses-r3-1e.png",
    title: "No right turn except buses",
    code: "R3-1e",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No right turn except buses. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/2/28/MUTCD_R3-1e.svg",
    wikiCaption: "R3-1e No right turn except buses",
  },
  {
    image: "assets/no-right-turn-except-buses-and-taxis-r3-1f.png",
    title: "No right turn except buses and taxis",
    code: "R3-1f",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No right turn except buses and taxis. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/7/74/MUTCD_R3-1f.svg",
    wikiCaption: "R3-1f No right turn except buses and taxis",
  },
  {
    image: "assets/no-right-turn-times-and-days-2-lines-r3-1g.png",
    title: "No right turn (times and days) (2-lines)",
    code: "R3-1g",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No right turn (times and days) (2-lines). Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/2/24/MUTCD_R3-1g.svg",
    wikiCaption: "R3-1g No right turn (times and days) (2-lines)",
  },
  {
    image: "assets/no-right-turn-times-and-days-3-lines-r3-1h-r3-1h.png",
    title: "No right turn (7–9 AM and 4–6 PM, Mon–Fri)",
    code: "R3-1h",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No right turn (times and days) (3-lines). Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/1/1e/MUTCD_R3-1h.svg",
    wikiCaption: "R3-1h No right turn (times and days) (3-lines)",
  },
  {
    image: "assets/no-right-turn-times-and-days-3-lines-r3-1h-1-time-span-r3-1h.png",
    title: "No right turn (6:45–9:30 AM, Mon–Fri)",
    code: "R3-1h",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No right turn (times and days) (3-lines). Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/6/61/MUTCD_R3-1h_%281_time_span%29.svg",
    wikiCaption: "R3-1h No right turn (times and days) (3-lines)",
  },
  {
    image: "assets/no-left-turn-r3-2.svg",
    title: "No left turn",
    code: "R3-2",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No left turn. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/1/11/MUTCD_R3-2.svg",
    wikiCaption: "R3-2 No left turn",
  },
  {
    image: "assets/reversible-lane-control-overhead-r3-9e.png",
    title: "Reversible lane control (overhead)",
    code: "R3-9e",
    category: "REGULATORY",
    description:
      "Marks a pedestrian crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    source: "https://upload.wikimedia.org/wikipedia/commons/3/32/MUTCD_R3-9e.svg",
    wikiCaption: "R3-9e Reversible lane control (overhead)",
  },
  {
    image: "assets/no-u-or-left-turn-r3-18.png",
    title: "No U or left turn",
    code: "R3-18",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No U or left turn. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/a/a1/MUTCD_R3-18.svg",
    wikiCaption: "R3-18 No U or left turn",
  },
  {
    image: "assets/toll-costs-on-express-lane-overhead-r3-48.png",
    title: "Toll Costs on Express Lane (Overhead)",
    code: "R3-48",
    category: "REGULATORY",
    description:
      "Marks a pedestrian crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    source: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MUTCD_R3-48.svg",
    wikiCaption: "R3-48 Toll Costs on Express Lane (Overhead)",
  },
  {
    image: "assets/toll-costs-on-express-lane-or-hov-overhead-r3-48a.png",
    title: "Toll Costs on Express Lane or HOV (Overhead)",
    code: "R3-48a",
    category: "REGULATORY",
    description:
      "Marks a pedestrian crossing. The red STOP or YIELD symbol identifies the action shown on the sign.",
    source: "https://upload.wikimedia.org/wikipedia/commons/d/dd/MUTCD_R3-48a.svg",
    wikiCaption: "R3-48a Toll Costs on Express Lane or HOV (Overhead)",
  },
  {
    image: "assets/no-parking-times-alternative-r7-2a.png",
    title: "No parking (times) (alternative)",
    code: "R7-2a",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking (times) (alternative). Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/a/af/MUTCD_R7-2a.svg",
    wikiCaption: "R7-2a No parking (times) (alternative)",
  },
  {
    image: "assets/no-parking-except-sundays-and-holidays-r7-3.png",
    title: "No parking except Sundays and Holidays",
    code: "R7-3",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking except Sundays and Holidays. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/e/e8/MUTCD_R7-3.svg",
    wikiCaption: "R7-3 No parking except Sundays and Holidays",
  },
  {
    image: "assets/no-parking-bike-lane-r7-9.png",
    title: "No parking, bike lane",
    code: "R7-9",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking, bike lane. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/b/b6/MUTCD_R7-9.svg",
    wikiCaption: "R7-9 No parking, bike lane",
  },
  {
    image: "assets/no-parking-bike-lane-r7-9a.png",
    title: "No parking, bike lane",
    code: "R7-9a",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking, bike lane. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/1/1c/MUTCD_R7-9a.svg",
    wikiCaption: "R7-9a No parking, bike lane",
  },
  {
    image: "assets/no-parking-bus-stop-r7-107.png",
    title: "No parking, bus stop",
    code: "R7-107",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking, bus stop. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/5/51/MUTCD_R7-107.svg",
    wikiCaption: "R7-107 No parking, bus stop",
  },
  {
    image: "assets/no-parking-bus-stop-r7-107a.png",
    title: "No parking, bus stop",
    code: "R7-107a",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking, bus stop. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/4/41/MUTCD_R7-107a.svg",
    wikiCaption: "R7-107a No parking, bus stop",
  },
  {
    image: "assets/no-parking-bus-stop-with-transit-pictograph-r7-107b.png",
    title: "No parking, bus stop with transit pictograph",
    code: "R7-107b",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking, bus stop with transit pictograph. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/a/ae/MUTCD_R7-107b.svg",
    wikiCaption: "R7-107b No parking, bus stop with transit pictograph",
  },
  {
    image: "assets/no-parking-except-electric-vehicles-r7-111.png",
    title: "No parking, except electric vehicles",
    code: "R7-111",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking, except electric vehicles. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/7/7f/MUTCD_R7-111.svg",
    wikiCaption: "R7-111 No parking, except electric vehicles",
  },
  {
    image: "assets/no-parking-times-except-electric-vehicles-r7-111a.png",
    title: "No parking, (times) except electric vehicles",
    code: "R7-111a",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking, (times) except electric vehicles. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/e/e0/MUTCD_R7-111a.svg",
    wikiCaption: "R7-111a No parking, (times) except electric vehicles",
  },
  {
    image: "assets/no-parking-except-while-charging-r7-113.png",
    title: "No parking, except while charging",
    code: "R7-113",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking, except while charging. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/c/ce/MUTCD_R7-113.svg",
    wikiCaption: "R7-113 No parking, except while charging",
  },
  {
    image: "assets/no-parking-and-one-hour-parking-times-combined-r7-200.png",
    title: "No parking and one hour parking (times) (combined)",
    code: "R7-200",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking and one hour parking (times) (combined). Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/c/c6/MUTCD_R7-200.svg",
    wikiCaption: "R7-200 No parking and one hour parking (times) (combined)",
  },
  {
    image: "assets/no-parking-and-one-hour-parking-times-combined-r7-200a.png",
    title: "No parking and one hour parking (times) (combined)",
    code: "R7-200a",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking and one hour parking (times) (combined). Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/1/1d/MUTCD_R7-200a.svg",
    wikiCaption: "R7-200a No parking and one hour parking (times) (combined)",
  },
  {
    image: "assets/this-side-of-sign-plaque-r7-202p.png",
    title: "This side of sign (plaque)",
    code: "R7-202P",
    category: "REGULATORY",
    description:
      "Identifies this side of sign (plaque). The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    source: "https://upload.wikimedia.org/wikipedia/commons/1/14/MUTCD_R7-202P.svg",
    wikiCaption: "R7-202P This side of sign (plaque)",
  },
  {
    image: "assets/snow-emergency-route-no-parking-during-snow-emergency-tow-away-zone-r7-203.svg",
    title: "Snow emergency route, no parking during snow emergency, tow-away zone",
    code: "R7-203",
    category: "REGULATORY",
    description:
      "Identifies snow emergency route, no parking during snow emergency, tow-away zone. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    source: "https://upload.wikimedia.org/wikipedia/commons/2/24/MUTCD_R7-203.svg",
    wikiCaption: "R7-203 Snow emergency route, no parking during snow emergency, tow-away zone",
  },
  {
    image: "assets/no-parking-on-pavement-r8-1.png",
    title: "No parking on pavement",
    code: "R8-1",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking on pavement. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/c/c9/MUTCD_R8-1.svg",
    wikiCaption: "R8-1 No parking on pavement",
  },
  {
    image: "assets/no-parking-except-on-shoulder-r8-2.png",
    title: "No parking except on shoulder",
    code: "R8-2",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking except on shoulder. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/6/61/MUTCD_R8-2.svg",
    wikiCaption: "R8-2 No parking except on shoulder",
  },
  {
    image: "assets/no-parking-r8-3.png",
    title: "No parking",
    code: "R8-3",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/b/bb/MUTCD_R8-3.svg",
    wikiCaption: "R8-3 No parking",
  },
  {
    image: "assets/no-parking-text-r8-3a.png",
    title: "No parking (text)",
    code: "R8-3a",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking (text). Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/f/fa/MUTCD_R8-3a.svg",
    wikiCaption: "R8-3a No parking (text)",
  },
  {
    image: "assets/no-parking-on-pavement-r8-3c.png",
    title: "No parking on pavement",
    code: "R8-3c",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking on pavement. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/2/22/MUTCD_R8-3c.svg",
    wikiCaption: "R8-3c No parking on pavement",
  },
  {
    image: "assets/no-parking-on-bridge-r8-3d.png",
    title: "No parking on bridge",
    code: "R8-3d",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking on bridge. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/2/22/MUTCD_R8-3d.svg",
    wikiCaption: "R8-3d No parking on bridge",
  },
  {
    image: "assets/no-parking-on-tracks-r8-3e.png",
    title: "No parking on tracks",
    code: "R8-3e",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking on tracks. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/c/c0/MUTCD_R8-3e.svg",
    wikiCaption: "R8-3e No parking on tracks",
  },
  {
    image: "assets/no-parking-except-on-shoulder-r8-3f.png",
    title: "No parking except on shoulder",
    code: "R8-3f",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No parking except on shoulder. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/8/82/MUTCD_R8-3f.svg",
    wikiCaption: "R8-3f No parking except on shoulder",
  },
  {
    image: "assets/no-stopping-on-pavement-r8-5.png",
    title: "No stopping on pavement",
    code: "R8-5",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No stopping on pavement. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/6/6f/MUTCD_R8-5.svg",
    wikiCaption: "R8-5 No stopping on pavement",
  },
  {
    image: "assets/no-stopping-except-on-shoulder-r8-6.png",
    title: "No stopping except on shoulder",
    code: "R8-6",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No stopping except on shoulder. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/f/f9/MUTCD_R8-6.svg",
    wikiCaption: "R8-6 No stopping except on shoulder",
  },
  {
    image: "assets/no-hitchhiking-symbol-r9-4.png",
    title: "No hitchhiking (symbol)",
    code: "R9-4",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No hitchhiking (symbol). Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/7/7d/MUTCD_R9-4.svg",
    wikiCaption: "R9-4 No hitchhiking (symbol)",
  },
  {
    image: "assets/no-skaters-r9-13.png",
    title: "No skaters",
    code: "R9-13",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No skaters. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/4/48/MUTCD_R9-13.svg",
    wikiCaption: "R9-13 No skaters",
  },
  {
    image: "assets/no-equestrians-r9-14.png",
    title: "No equestrians",
    code: "R9-14",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No equestrians. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/a/a3/MUTCD_R9-14.svg",
    wikiCaption: "R9-14 No equestrians",
  },
  {
    image: "assets/no-snowmobiles-r9-15.png",
    title: "No snowmobiles",
    code: "R9-15",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No snowmobiles. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/1/1a/MUTCD_R9-15.svg",
    wikiCaption: "R9-15 No snowmobiles",
  },
  {
    image: "assets/no-all-terrain-vehicles-r9-16.png",
    title: "No all-terrain vehicles",
    code: "R9-16",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No all-terrain vehicles. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/3/3d/MUTCD_R9-16.svg",
    wikiCaption: "R9-16 No all-terrain vehicles",
  },
  {
    image: "assets/no-turn-on-circular-red-r10-11a.png",
    title: "No turn on circular red",
    code: "R10-11a",
    category: "REGULATORY",
    description:
      "Indicates the restriction shown: No turn on circular red. Any arrows, times, vehicle classes, or exceptions on the sign define where and when it applies.",
    source: "https://upload.wikimedia.org/wikipedia/commons/b/b5/MUTCD_R10-11.svg",
    wikiCaption: "R10-11a No turn on circular red",
  },
  {
    image: "assets/turning-vehicles-yield-to-pedestrians-right-yellow-green-background-r10-15r.png",
    title: "Turning vehicles yield to pedestrians (right) (yellow background)",
    code: "R10-15R",
    category: "REGULATORY",
    description:
      "Identifies turning vehicles yield to pedestrians (right). The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    source: "https://upload.wikimedia.org/wikipedia/commons/1/14/MUTCD_R10-15R.svg",
    wikiCaption: "R10-15R Turning vehicles yield to pedestrians (right) [ b ]",
  },
  {
    image: "assets/turning-vehicles-yield-to-pedestrians-right-fluorescent-background-r10-15r.png",
    title: "Turning vehicles yield to pedestrians (right) (yellow-green background)",
    code: "R10-15R",
    category: "REGULATORY",
    description:
      "Identifies turning vehicles yield to pedestrians (right). The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    source:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/MUTCD_R10-15R_%28fluorescent%29.svg",
    wikiCaption: "R10-15R Turning vehicles yield to pedestrians (right)",
  },
  {
    image: "assets/turning-vehicles-yield-to-pedestrians-left-yellow-green-background-r10-15l.svg",
    title: "Turning vehicles yield to pedestrians (left) (yellow background)",
    code: "R10-15L",
    category: "REGULATORY",
    description:
      "Identifies turning vehicles yield to pedestrians (left). The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    source: "https://upload.wikimedia.org/wikipedia/commons/f/fe/MUTCD_R10-15L.svg",
    wikiCaption: "R10-15L Turning vehicles yield to pedestrians (left) [ b ]",
  },
  {
    image: "assets/turning-vehicles-yield-to-pedestrians-left-fluorescent-background-r10-15l.png",
    title: "Turning vehicles yield to pedestrians (left) (yellow-green background)",
    code: "R10-15L",
    category: "REGULATORY",
    description:
      "Identifies turning vehicles yield to pedestrians (left). The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    source:
      "https://upload.wikimedia.org/wikipedia/commons/3/35/MUTCD_R10-15L_%28fluorescent%29.svg",
    wikiCaption: "R10-15L Turning vehicles yield to pedestrians (left)",
  },
  {
    image: "assets/turning-vehicles-stop-for-pedestrians-r10-15a.png",
    title: "Turning vehicles stop for pedestrians",
    code: "R10-15a",
    category: "REGULATORY",
    description:
      "Identifies turning vehicles stop for pedestrians. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    source: "https://upload.wikimedia.org/wikipedia/commons/9/9c/MUTCD_R10-15a.svg",
    wikiCaption: "R10-15a Turning vehicles stop for pedestrians [ b ]",
  },
  {
    image: "assets/traffic-signal-photo-enforced-r10-18a.png",
    title: "Traffic signal photo enforced",
    code: "R10-18a",
    category: "REGULATORY",
    description:
      "Identifies traffic signal photo enforced. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    source: "https://upload.wikimedia.org/wikipedia/commons/0/0e/MUTCD_R10-18a.svg",
    wikiCaption: "R10-18a Traffic signal photo enforced",
  },
  {
    image: "assets/crosswalk-stop-on-red-r10-23.png",
    title: "Crosswalk - stop on red",
    code: "R10-23",
    category: "REGULATORY",
    description:
      "Identifies crosswalk - stop on red. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    source: "https://upload.wikimedia.org/wikipedia/commons/5/53/MUTCD_R10-23.svg",
    wikiCaption: "R10-23 Crosswalk - stop on red",
  },
  {
    image: "assets/hazardous-material-prohibited-r14-3.png",
    title: "Hazardous material prohibited",
    code: "R14-3",
    category: "REGULATORY",
    description:
      "Identifies hazardous material prohibited. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    source: "https://upload.wikimedia.org/wikipedia/commons/8/80/MUTCD_R14-3.svg",
    wikiCaption: "R14-3 Hazardous material prohibited",
  },
  {
    image: "assets/national-network-prohibited-r14-5.png",
    title: "National Network prohibited",
    code: "R14-5",
    category: "REGULATORY",
    description:
      "Identifies national network prohibited. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    source: "https://upload.wikimedia.org/wikipedia/commons/7/74/MUTCD_R14-5.svg",
    wikiCaption: "R14-5 National Network prohibited",
  },
  {
    image: "assets/school-bus-stop-ahead-s3-1.png",
    title: "School bus stop ahead",
    code: "S3-1",
    category: "SCHOOL",
    description:
      "Gives advance notice of school bus stop ahead. The red element highlights the traffic control or restriction ahead.",
    source: "https://upload.wikimedia.org/wikipedia/commons/c/cf/MUTCD_S3-1_%28new%29.svg",
    wikiCaption: "S3-1 School bus stop ahead",
  },
  {
    image: "assets/stop-sign-ahead-w3-1.png",
    title: "Stop sign ahead",
    code: "W3-1",
    category: "WARNING",
    description:
      "Directs traffic to stop sign ahead. Read any additional conditions displayed on the sign.",
    source: "https://upload.wikimedia.org/wikipedia/commons/7/7d/MUTCD_W3-1.svg",
    wikiCaption: "W3-1 Stop sign ahead",
  },
  {
    image: "assets/yield-sign-ahead-w3-2.svg",
    title: "Yield sign ahead",
    code: "W3-2",
    category: "WARNING",
    description: "Directs traffic to yield sign ahead. Give the right of way as indicated.",
    source: "https://upload.wikimedia.org/wikipedia/commons/6/63/MUTCD_W3-2.svg",
    wikiCaption: "W3-2 Yield sign ahead",
  },
  {
    image: "assets/traffic-light-ahead-w3-3.png",
    title: "Traffic light ahead",
    code: "W3-3",
    category: "WARNING",
    description:
      "Gives advance notice of traffic light ahead. The red element highlights the traffic control or restriction ahead.",
    source: "https://upload.wikimedia.org/wikipedia/commons/a/a4/MUTCD_W3-3.svg",
    wikiCaption: "W3-3 Traffic light ahead",
  },
  {
    image: "assets/end-of-road-marker-om4-1.png",
    title: "End Of Road Marker",
    code: "OM4-1",
    category: "OBJECT MARKER",
    description:
      "Marks the end of a road. The red marker highlights a boundary that traffic must not continue beyond.",
    source: "https://upload.wikimedia.org/wikipedia/commons/b/b7/MUTCD_OM4-1.svg",
    wikiCaption: "OM4-1 End Of Road Marker",
  },
  {
    image: "assets/end-of-road-marker-om4-2.png",
    title: "End Of Road Marker",
    code: "OM4-2",
    category: "OBJECT MARKER",
    description:
      "Marks the end of a road. The red marker highlights a boundary that traffic must not continue beyond.",
    source: "https://upload.wikimedia.org/wikipedia/commons/a/ab/MUTCD_OM4-2.svg",
    wikiCaption: "OM4-2 End Of Road Marker",
  },
  {
    image: "assets/end-of-road-marker-om4-3.png",
    title: "End Of Road Marker",
    code: "OM4-3",
    category: "OBJECT MARKER",
    description:
      "Marks the end of a road. The red marker highlights a boundary that traffic must not continue beyond.",
    source: "https://upload.wikimedia.org/wikipedia/commons/4/4d/MUTCD_OM4-3.svg",
    wikiCaption: "OM4-3 End Of Road Marker",
  },
  {
    image: "assets/interstate-route-marker-2-digits-m1-1.png",
    title: "Interstate Route Marker (2 digits)",
    code: "M1-1",
    category: "ROUTE MARKER",
    description:
      "Identifies an Interstate highway route. The red band is part of the familiar red, white, and blue Interstate shield.",
    source: "https://upload.wikimedia.org/wikipedia/commons/d/d4/MUTCD_M1-1_%282_digits%29.svg",
    wikiCaption: "M1-1 Interstate Route Marker (2 digits)",
  },
  {
    image: "assets/interstate-route-marker-3-digits-m1-1.png",
    title: "Interstate Route Marker (3 digits)",
    code: "M1-1",
    category: "ROUTE MARKER",
    description:
      "Identifies an Interstate highway route. The red band is part of the familiar red, white, and blue Interstate shield.",
    source: "https://upload.wikimedia.org/wikipedia/commons/0/06/MUTCD_M1-1_%283_digits%29.svg",
    wikiCaption: "M1-1 Interstate Route Marker (3 digits)",
  },
  {
    image: "assets/interstate-route-marker-with-state-2-digits-m1-1a.png",
    title: "Interstate Route Marker with State (2 digits)",
    code: "M1-1a",
    category: "ROUTE MARKER",
    description:
      "Identifies an Interstate highway route. The red band is part of the familiar red, white, and blue Interstate shield.",
    source: "https://upload.wikimedia.org/wikipedia/commons/0/08/I-95_%28FL%29.svg",
    wikiCaption: "M1-1a Interstate Route Marker with State (2 digits)",
  },
  {
    image: "assets/interstate-route-marker-with-state-3-digits-m1-1a.png",
    title: "Interstate Route Marker with State (3 digits)",
    code: "M1-1a",
    category: "ROUTE MARKER",
    description:
      "Identifies an Interstate highway route. The red band is part of the familiar red, white, and blue Interstate shield.",
    source: "https://upload.wikimedia.org/wikipedia/commons/b/b5/I-595_%28FL%29.svg",
    wikiCaption: "M1-1a Interstate Route Marker with State (3 digits)",
  },
  {
    image: "assets/national-scenic-byway-m10-1.svg",
    title: "National Scenic Byway",
    code: "M10-1",
    category: "ROUTE MARKER",
    description:
      "Identifies national scenic byway. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    source: "https://upload.wikimedia.org/wikipedia/commons/7/73/MUTCD_M10-1.svg",
    wikiCaption: "M10-1 National Scenic Byway",
  },
  {
    image: "assets/national-scenic-byway-plaque-m10-1ap.png",
    title: "National Scenic Byway (plaque)",
    code: "M10-1aP",
    category: "ROUTE MARKER",
    description:
      "Identifies national scenic byway (plaque). The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    source: "https://upload.wikimedia.org/wikipedia/commons/0/01/MUTCD_M10-1aP.svg",
    wikiCaption: "M10-1aP National Scenic Byway (plaque)",
  },
  {
    image: "assets/project-information-i2-5.png",
    title: "Project information",
    code: "I2-5",
    category: "PROJECT INFORMATION",
    description:
      "Identifies project information. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    source: "https://upload.wikimedia.org/wikipedia/commons/c/c6/MUTCD_I2-5_%28state%29.svg",
    wikiCaption: "I2-5 Project information",
  },
  {
    image: "assets/specific-services-sign.png",
    title: "Specific services sign (food)",
    code: "UNNUMBERED",
    category: "MOTORIST SERVICES",
    description:
      "Identifies food services at the exit shown. The business logos contain visible red within the blue service sign.",
    source: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_Sign.svg",
    wikiCaption: "Specific services sign",
  },
  {
    image: "assets/pull-through-destination-e6-1a.png",
    title: "Pull-Through (Destination)",
    code: "E6-1a",
    category: "GUIDE",
    description:
      "Identifies pull-through (destination). The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    source: "https://upload.wikimedia.org/wikipedia/commons/9/9d/MUTCD_E6-1a.svg",
    wikiCaption: "E6-1a Pull-Through (Destination)",
  },
  {
    image: "assets/post-interchange-travel-time-e7-4.png",
    title: "Post-Interchange Travel Time",
    code: "E7-4",
    category: "GUIDE",
    description:
      "Identifies post-interchange travel time. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    source: "https://upload.wikimedia.org/wikipedia/commons/f/f1/MUTCD_E7-4.svg",
    wikiCaption: "E7-4 Post-Interchange Travel Time",
  },
  {
    image: "assets/distance-and-travel-time-e7-5.png",
    title: "Distance and Travel Time",
    code: "E7-5",
    category: "GUIDE",
    description:
      "Identifies distance and travel time. The red-containing design is shown here as labeled in the U.S. road-sign gallery.",
    source: "https://upload.wikimedia.org/wikipedia/commons/6/63/MUTCD_E7-5.svg",
    wikiCaption: "E7-5 Distance and Travel Time",
  },
];
const cabinet = document.querySelector("#cabinet"),
  scoreNode = document.querySelector("#score"),
  timeNode = document.querySelector("#time"),
  bestNode = document.querySelector("#best"),
  playButton = document.querySelector("#playButton"),
  statusNode = document.querySelector("#gameStatus");
let score = 0,
  best = 0,
  playing = false,
  sound = true,
  deadline = 0,
  clockId = 0,
  roundId = 0,
  bag = [],
  lastTarget = -1;
const timers = new Set(),
  targets = [],
  rows = [];
try {
  best = Number(localStorage.getItem("red-signs-arcade-best")) || 0;
} catch {}
bestNode.textContent = String(best).padStart(3, "0");
const soundPool = Array.from({ length: 6 }, () => {
  const a = new Audio("assets/metal-clank.mp3");
  a.preload = "auto";
  a.volume = 0.55;
  return a;
});
let voice = 0;
function shuffle() {
  bag = arcadeSigns.map((s, i) => i);
  for (let i = bag.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [bag[i], bag[j]] = [bag[j], bag[i]];
  }
}
function choose() {
  if (!bag.length) shuffle();
  let id = bag.pop();
  if (targets.some((t) => t.signId === id)) {
    const index = bag.findIndex((v) => !targets.some((t) => t.signId === v));
    if (index >= 0) {
      bag.push(id);
      id = bag.splice(index, 1)[0];
    }
  }
  return id;
}
function setSign(t) {
  t.signId = choose();
  const s = arcadeSigns[t.signId];
  t.img.src = s.image;
  t.button.setAttribute("aria-label", "Knock down " + s.title);
}
function later(fn, ms) {
  const timer = setTimeout(() => {
    timers.delete(timer);
    fn();
  }, ms);
  timers.add(timer);
}
function effect(text, parent, kind) {
  const el = document.createElement("span");
  el.className = kind;
  el.textContent = text;
  el.setAttribute("aria-hidden", "true");
  parent.append(el);
  later(() => el.remove(), 850);
}
function updateScore() {
  scoreNode.textContent = String(score).padStart(3, "0");
}
function finish() {
  if (!playing) return;
  playing = false;
  roundId++;
  clearInterval(clockId);
  timers.forEach(clearTimeout);
  timers.clear();
  targets.forEach((t) => {
    t.button.disabled = true;
  });
  cabinet.querySelectorAll(".points,.shelf-bonus").forEach((e) => e.remove());
  cabinet.classList.add("finished");
  timeNode.textContent = "0";
  playButton.disabled = false;
  playButton.textContent = "Play again ↗";
  const record = score > best;
  if (record) {
    best = score;
    bestNode.textContent = String(best).padStart(3, "0");
    try {
      localStorage.setItem("red-signs-arcade-best", String(best));
    } catch {}
  }
  statusNode.textContent =
    "Time’s up. " +
    score +
    " points." +
    (record ? " New personal best!" : " Hit Play again for another round.");
}
function tick() {
  if (!playing) return;
  const left = Math.max(0, Math.ceil((deadline - performance.now()) / 1000));
  timeNode.textContent = String(left);
  if (left === 0) finish();
}
function knock(t) {
  if (!playing || t.down || performance.now() >= deadline) {
    tick();
    return;
  }
  t.down = true;
  t.button.disabled = true;
  t.button.classList.add("down");
  score += 10;
  updateScore();
  effect("+10", t.slot, "points");
  if (sound) {
    const a = soundPool[voice++ % soundPool.length];
    a.currentTime = 0;
    a.play().catch(() => {});
  }
  const row = rows[t.row];
  if (row.every((x) => x.down)) {
    score += 50;
    updateScore();
    effect("SHELF CLEAR +50", t.slot.parentElement, "shelf-bonus");
  }
  const token = roundId;
  later(
    () => {
      if (!playing || roundId !== token) return;
      setSign(t);
      t.down = false;
      t.button.classList.remove("down");
      t.button.disabled = false;
    },
    1250 + Math.random() * 450,
  );
}
for (let row = 0; row < 3; row++) {
  const shelf = document.createElement("div");
  shelf.className = "shelf";
  rows[row] = [];
  for (let col = 0; col < 4; col++) {
    const slot = document.createElement("div");
    slot.className = "target-slot";
    const button = document.createElement("button");
    button.className = "arcade-target";
    button.disabled = true;
    const pole = document.createElement("span");
    pole.className = "target-pole";
    pole.setAttribute("aria-hidden", "true");
    const img = document.createElement("img");
    img.alt = "";
    img.draggable = false;
    button.append(pole, img);
    slot.append(button);
    shelf.append(slot);
    const t = { slot, button, img, row, down: false, signId: -1 };
    targets.push(t);
    rows[row].push(t);
    setSign(t);
    button.addEventListener("click", () => knock(t));
  }
  cabinet.append(shelf);
}
playButton.addEventListener("click", () => {
  roundId++;
  timers.forEach(clearTimeout);
  timers.clear();
  clearInterval(clockId);
  cabinet.querySelectorAll(".points,.shelf-bonus").forEach((e) => e.remove());
  score = 0;
  updateScore();
  playing = true;
  cabinet.classList.remove("finished");
  playButton.disabled = true;
  playButton.textContent = "Go!";
  targets.forEach((t) => {
    t.down = false;
    setSign(t);
    t.button.classList.remove("down");
    t.button.disabled = false;
  });
  deadline = performance.now() + 30000;
  timeNode.textContent = "30";
  statusNode.textContent = "Go! Knock down as many signs as you can. Clear a shelf for +50.";
  clockId = setInterval(tick, 100);
  targets[0].button.focus({ preventScroll: true });
});
document.querySelector("#arcadeSound").addEventListener("click", (e) => {
  sound = !sound;
  e.currentTarget.textContent = sound ? "Sound on ◉" : "Sound off ○";
  e.currentTarget.setAttribute("aria-pressed", String(sound));
});
document.addEventListener("visibilitychange", tick);
window.addEventListener("pagehide", () => {
  clearInterval(clockId);
  timers.forEach(clearTimeout);
  soundPool.forEach((a) => a.pause());
});
