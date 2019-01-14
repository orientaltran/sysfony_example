/*
jQWidgets v4.5.4 (2017-June)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
! function(a) {
  "use strict";
  a.jqx.timeSpan = function() {
    var b = {
      ticksPerMillisecond: 1e4,
      millisecondsPerTick: 1e-4,
      ticksPerSecond: 1e7,
      secondsPerTick: 1e-7,
      ticksPerMinute: 6e8,
      minutesPerTick: 1 / 6e8,
      ticksPerHour: 36e9,
      hoursPerTick: 1 / 36e9,
      ticksPerDay: 864e9,
      daysPerTick: 1 / 864e9,
      millisPerSecond: 1e3,
      millisPerMinute: 6e4,
      millisPerHour: 36e5,
      millisPerDay: 864e5,
      _ticks: 0
    };
    a.extend(!0, this, b);
    var c = this;
    if (c.ticks = function() {
        return c._ticks
      }, c.days = function() {
        return parseInt(c._ticks / c.ticksPerDay)
      }, c.timeToMS = function(a, b, d, e) {
        var f = 3600 * a + 60 * b + d + e / 1e3;
        return parseInt(f * c.ticksPerSecond)
      }, c.hours = function() {
        return parseInt(c._ticks / c.ticksPerHour) % 24
      }, c.milliseconds = function() {
        return parseInt(c._ticks / c.ticksPerMillisecond) % 1e3
      }, c.minutes = function() {
        return parseInt(c._ticks / c.ticksPerMinute) % 60
      }, c.seconds = function() {
        return parseInt(c._ticks / c.ticksPerSecond) % 60
      }, c.totalDays = function() {
        return parseInt(c._ticks * c.daysPerTick)
      }, c.totalHours = function() {
        return parseInt(c._ticks * c.hoursPerTick)
      }, c.totalMilliseconds = function() {
        var a = c._ticks * c.millisecondsPerTick;
        return parseInt(a)
      }, c.totalMinutes = function() {
        return parseInt(c._ticks * c.minutesPerTick)
      }, c.totalSeconds = function() {
        return parseInt(c._ticks * c.secondsPerTick)
      }, 1 === arguments.length) c._ticks = arguments[0];
    else if (3 === arguments.length) c._ticks = c.timeToMS(arguments[0], arguments[1], arguments[2]);
    else if (4 === arguments.length) {
      var d = arguments[0],
        e = arguments[1],
        f = arguments[2],
        g = arguments[3],
        h = 0,
        i = 1e3 * (3600 * d * 24 + 3600 * e + 60 * f + g) + h;
      c._ticks = i * c.ticksPerMillisecond
    } else if (5 === arguments.length) {
      var d = arguments[0],
        e = arguments[1],
        f = arguments[2],
        g = arguments[3],
        h = arguments[4],
        i = 1e3 * (3600 * d * 24 + 3600 * e + 60 * f + g) + h;
      c._ticks = i * c.ticksPerMillisecond
    }
    return c.add = function(b) {
      var d = c._ticks + b._ticks;
      return new a.jqx.timeSpan(d)
    }, c.substract = function(b) {
      var c = _ticks - b._ticks;
      return new a.jqx.timeSpan(c)
    }, c.duration = function() {
      return c._ticks >= 0 ? new a.jqx.timeSpan(c._ticks) : new a.jqx.timeSpan(-c._ticks)
    }, c.equals = function(a) {
      return c._ticks == a._ticks
    }, c.valueOf = function() {
      return c._ticks
    }, c.compare = function(a, b) {
      return a._ticks > b._ticks ? 1 : a._ticks < b._ticks ? -1 : 0
    }, c.interval = function(b, d) {
      var e = b * d,
        f = e + (b >= 0 ? .5 : -.5);
      return new a.jqx.timeSpan(f * c.ticksPerMillisecond)
    }, c.fromDays = function(a) {
      return c.interval(a, c.millisPerDay)
    }, c.fromHours = function(a) {
      return c.interval(a, c.millisPerHour)
    }, c.fromMilliseconds = function(a) {
      return c.interval(a, 1)
    }, c.fromMinutes = function(a) {
      return c.interval(a, c.millisPerMinute)
    }, c.fromSeconds = function(a) {
      return c.interval(a, c.millisPerSecond)
    }, c.fromTicks = function(b) {
      return new a.jqx.timeSpan(b)
    }, c
  };
  var b = [{
      id: "Local",
      offset: 0,
      offsetHours: 0,
      displayName: "",
      supportsDaylightSavingTime: !1
    }, {
      id: "Dateline Standard Time",
      offset: -720,
      offsetHours: -12,
      displayName: "(UTC-12:00) International Date Line West",
      supportsDaylightSavingTime: !1
    }, {
      id: "UTC-11",
      offset: -660,
      offsetHours: -11,
      displayName: "(UTC-11:00) Coordinated Universal Time-11",
      supportsDaylightSavingTime: !1
    }, {
      id: "Hawaiteratoran Standard Time",
      offset: -600,
      offsetHours: -10,
      displayName: "(UTC-10:00) Hawaiterator",
      supportsDaylightSavingTime: !1
    }, {
      id: "Alaskan Standard Time",
      offset: -540,
      offsetHours: -9,
      displayName: "(UTC-09:00) Alaska",
      supportsDaylightSavingTime: !0
    }, {
      id: "Pacific Standard Time (Mexico)",
      offset: -480,
      offsetHours: -8,
      displayName: "(UTC-08:00) Baja California",
      supportsDaylightSavingTime: !0
    }, {
      id: "Pacific Standard Time",
      offset: -480,
      offsetHours: -8,
      displayName: "(UTC-08:00) Pacific Time (US & Canada)",
      supportsDaylightSavingTime: !0
    }, {
      id: "US Mountain Standard Time",
      offset: -420,
      offsetHours: -7,
      displayName: "(UTC-07:00) Arizona",
      supportsDaylightSavingTime: !1
    }, {
      id: "Mountain Standard Time (Mexico)",
      offset: -420,
      offsetHours: -7,
      displayName: "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
      supportsDaylightSavingTime: !0
    }, {
      id: "Mountain Standard Time",
      offset: -420,
      offsetHours: -7,
      displayName: "(UTC-07:00) Mountain Time (US & Canada)",
      supportsDaylightSavingTime: !0
    }, {
      id: "Central Standard Time",
      offset: -360,
      offsetHours: -6,
      displayName: "(UTC-06:00) Central Time (US & Canada)",
      supportsDaylightSavingTime: !0
    }, {
      id: "Central America Standard Time",
      offset: -360,
      offsetHours: -6,
      displayName: "(UTC-06:00) Central America",
      supportsDaylightSavingTime: !1
    }, {
      id: "Canada Central Standard Time",
      offset: -360,
      offsetHours: -6,
      displayName: "(UTC-06:00) Saskatchewan",
      supportsDaylightSavingTime: !1
    }, {
      id: "Central Standard Time (Mexico)",
      offset: -360,
      offsetHours: -6,
      displayName: "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
      supportsDaylightSavingTime: !0
    }, {
      id: "SA Pacific Standard Time",
      offset: -300,
      offsetHours: -5,
      displayName: "(UTC-05:00) Bogota, Lima, Quito, Rio Branco",
      supportsDaylightSavingTime: !1
    }, {
      id: "Eastern Standard Time",
      offset: -300,
      offsetHours: -5,
      displayName: "(UTC-05:00) Eastern Time (US & Canada)",
      supportsDaylightSavingTime: !0
    }, {
      id: "US Eastern Standard Time",
      offset: -300,
      offsetHours: -5,
      displayName: "(UTC-05:00) Indiana (East)",
      supportsDaylightSavingTime: !0
    }, {
      id: "Venezuela Standard Time",
      offset: -270,
      offsetHours: -4.5,
      displayName: "(UTC-04:30) Caracas",
      supportsDaylightSavingTime: !1
    }, {
      id: "Atlantic Standard Time",
      offset: -240,
      offsetHours: -4,
      displayName: "(UTC-04:00) Atlantic Time (Canada)",
      supportsDaylightSavingTime: !0
    }, {
      id: "Paraguay Standard Time",
      offset: -240,
      offsetHours: -4,
      displayName: "(UTC-04:00) Asuncion",
      supportsDaylightSavingTime: !0
    }, {
      id: "Central Brazilian Standard Time",
      offset: -240,
      offsetHours: -4,
      displayName: "(UTC-04:00) Cuiaba",
      supportsDaylightSavingTime: !0
    }, {
      id: "Pacific SA Standard Time",
      offset: -240,
      offsetHours: -4,
      displayName: "(UTC-04:00) Santiago",
      supportsDaylightSavingTime: !0
    }, {
      id: "SA Western Standard Time",
      offset: -240,
      offsetHours: -4,
      displayName: "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
      supportsDaylightSavingTime: !1
    }, {
      id: "Newfoundland Standard Time",
      offset: -210,
      offsetHours: -3.5,
      displayName: "(UTC-03:30) Newfoundland",
      supportsDaylightSavingTime: !0
    }, {
      id: "SA Eastern Standard Time",
      offset: -180,
      offsetHours: -3,
      displayName: "(UTC-03:00) Cayenne, Fortaleza",
      supportsDaylightSavingTime: !1
    }, {
      id: "Argentina Standard Time",
      offset: -180,
      offsetHours: -3,
      displayName: "(UTC-03:00) Buenos Aires",
      supportsDaylightSavingTime: !0
    }, {
      id: "E. South America Standard Time",
      offset: -180,
      offsetHours: -3,
      displayName: "(UTC-03:00) Brasilia",
      supportsDaylightSavingTime: !0
    }, {
      id: "Bahia Standard Time",
      offset: -180,
      offsetHours: -3,
      displayName: "(UTC-03:00) Salvador",
      supportsDaylightSavingTime: !0
    }, {
      id: "Montevideo Standard Time",
      offset: -180,
      offsetHours: -3,
      displayName: "(UTC-03:00) Montevideo",
      supportsDaylightSavingTime: !0
    }, {
      id: "Greenland Standard Time",
      offset: -180,
      offsetHours: -3,
      displayName: "(UTC-03:00) Greenland",
      supportsDaylightSavingTime: !0
    }, {
      id: "UTC-02",
      offset: -120,
      offsetHours: -2,
      displayName: "(UTC-02:00) Coordinated Universal Time-02",
      supportsDaylightSavingTime: !1
    }, {
      id: "Mid-Atlantic Standard Time",
      offset: -120,
      offsetHours: -2,
      displayName: "(UTC-02:00) Mid-Atlantic - Old",
      supportsDaylightSavingTime: !0
    }, {
      id: "Azores Standard Time",
      offset: -60,
      offsetHours: -1,
      displayName: "(UTC-01:00) Azores",
      supportsDaylightSavingTime: !0
    }, {
      id: "Cape Verde Standard Time",
      offset: -60,
      offsetHours: -1,
      displayName: "(UTC-01:00) Cape Verde Is.",
      supportsDaylightSavingTime: !1
    }, {
      id: "Morocco Standard Time",
      offset: 0,
      offsetHours: 0,
      displayName: "(UTC) Casablanca",
      supportsDaylightSavingTime: !0
    }, {
      id: "UTC",
      offset: 0,
      offsetHours: 0,
      displayName: "(UTC) Coordinated Universal Time",
      supportsDaylightSavingTime: !1
    }, {
      id: "GMT Standard Time",
      offset: 0,
      offsetHours: 0,
      displayName: "(UTC) Dublin, Edinburgh, Lisbon, London",
      supportsDaylightSavingTime: !0
    }, {
      id: "Greenwich Standard Time",
      offset: 0,
      offsetHours: 0,
      displayName: "(UTC) Monrovia, Reykjavik",
      supportsDaylightSavingTime: !1
    }, {
      id: "Central European Standard Time",
      offset: 60,
      offsetHours: 1,
      displayName: "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
      supportsDaylightSavingTime: !0
    }, {
      id: "Namibia Standard Time",
      offset: 60,
      offsetHours: 1,
      displayName: "(UTC+01:00) Windhoek",
      supportsDaylightSavingTime: !0
    }, {
      id: "W. Central Africa Standard Time",
      offset: 60,
      offsetHours: 1,
      displayName: "(UTC+01:00) West Central Africa",
      supportsDaylightSavingTime: !1
    }, {
      id: "W. Europe Standard Time",
      offset: 60,
      offsetHours: 1,
      displayName: "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
      supportsDaylightSavingTime: !0
    }, {
      id: "Central Europe Standard Time",
      offset: 60,
      offsetHours: 1,
      displayName: "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
      supportsDaylightSavingTime: !0
    }, {
      id: "Romance Standard Time",
      offset: 60,
      offsetHours: 1,
      displayName: "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
      supportsDaylightSavingTime: !0
    }, {
      id: "FLE Standard Time",
      offset: 120,
      offsetHours: 2,
      displayName: "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
      supportsDaylightSavingTime: !0
    }, {
      id: "South Africa Standard Time",
      offset: 120,
      offsetHours: 2,
      displayName: "(UTC+02:00) Harare, Pretoria",
      supportsDaylightSavingTime: !1
    }, {
      id: "Turkey Standard Time",
      offset: 120,
      offsetHours: 2,
      displayName: "(UTC+02:00) Istanbul",
      supportsDaylightSavingTime: !0
    }, {
      id: "GTB Standard Time",
      offset: 120,
      offsetHours: 2,
      displayName: "(UTC+02:00) Athens, Bucharest",
      supportsDaylightSavingTime: !0
    }, {
      id: "Libya Standard Time",
      offset: 120,
      offsetHours: 2,
      displayName: "(UTC+02:00) Tripoli",
      supportsDaylightSavingTime: !0
    }, {
      id: "E. Europe Standard Time",
      offset: 120,
      offsetHours: 2,
      displayName: "(UTC+02:00) E. Europe",
      supportsDaylightSavingTime: !0
    }, {
      id: "Jordan Standard Time",
      offset: 120,
      offsetHours: 2,
      displayName: "(UTC+02:00) Amman",
      supportsDaylightSavingTime: !0
    }, {
      id: "Middle East Standard Time",
      offset: 120,
      offsetHours: 2,
      displayName: "(UTC+02:00) Beirut",
      supportsDaylightSavingTime: !0
    }, {
      id: "Egypt Standard Time",
      offset: 120,
      offsetHours: 2,
      displayName: "(UTC+02:00) Cairo",
      supportsDaylightSavingTime: !0
    }, {
      id: "Syria Standard Time",
      offset: 120,
      offsetHours: 2,
      displayName: "(UTC+02:00) Damascus",
      supportsDaylightSavingTime: !0
    }, {
      id: "Israel Standard Time",
      offset: 120,
      offsetHours: 2,
      displayName: "(UTC+02:00) Jerusalem",
      supportsDaylightSavingTime: !0
    }, {
      id: "Arab Standard Time",
      offset: 180,
      offsetHours: 3,
      displayName: "(UTC+03:00) Kuwait, Riyadh",
      supportsDaylightSavingTime: !1
    }, {
      id: "E. Africa Standard Time",
      offset: 180,
      offsetHours: 3,
      displayName: "(UTC+03:00) Nairobi",
      supportsDaylightSavingTime: !1
    }, {
      id: "Arabic Standard Time",
      offset: 180,
      offsetHours: 3,
      displayName: "(UTC+03:00) Baghdad",
      supportsDaylightSavingTime: !0
    }, {
      id: "Kaliningrad Standard Time",
      offset: 180,
      offsetHours: 3,
      displayName: "(UTC+03:00) Kaliningrad, Minsk",
      supportsDaylightSavingTime: !0
    }, {
      id: "Iran Standard Time",
      offset: 210,
      offsetHours: 3.5,
      displayName: "(UTC+03:30) Tehran",
      supportsDaylightSavingTime: !0
    }, {
      id: "Mauritius Standard Time",
      offset: 240,
      offsetHours: 4,
      displayName: "(UTC+04:00) Port Louis",
      supportsDaylightSavingTime: !0
    }, {
      id: "Georgian Standard Time",
      offset: 240,
      offsetHours: 4,
      displayName: "(UTC+04:00) Tbilisi",
      supportsDaylightSavingTime: !1
    }, {
      id: "Caucasus Standard Time",
      offset: 240,
      offsetHours: 4,
      displayName: "(UTC+04:00) Yerevan",
      supportsDaylightSavingTime: !0
    }, {
      id: "Arabian Standard Time",
      offset: 240,
      offsetHours: 4,
      displayName: "(UTC+04:00) Abu Dhabi, Muscat",
      supportsDaylightSavingTime: !1
    }, {
      id: "Azerbaijan Standard Time",
      offset: 240,
      offsetHours: 4,
      displayName: "(UTC+04:00) Baku",
      supportsDaylightSavingTime: !0
    }, {
      id: "Russian Standard Time",
      offset: 240,
      offsetHours: 4,
      displayName: "(UTC+04:00) Moscow, St. Petersburg, Volgograd",
      supportsDaylightSavingTime: !0
    }, {
      id: "Afghanistan Standard Time",
      offset: 270,
      offsetHours: 4.5,
      displayName: "(UTC+04:30) Kabul",
      supportsDaylightSavingTime: !1
    }, {
      id: "Pakistan Standard Time",
      offset: 300,
      offsetHours: 5,
      displayName: "(UTC+05:00) Islamabad, Karachi",
      supportsDaylightSavingTime: !0
    }, {
      id: "West Asia Standard Time",
      offset: 300,
      offsetHours: 5,
      displayName: "(UTC+05:00) Ashgabat, Tashkent",
      supportsDaylightSavingTime: !1
    }, {
      id: "India Standard Time",
      offset: 330,
      offsetHours: 5.5,
      displayName: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
      supportsDaylightSavingTime: !1
    }, {
      id: "Sri Lanka Standard Time",
      offset: 330,
      offsetHours: 5.5,
      displayName: "(UTC+05:30) Sri Jayawardenepura",
      supportsDaylightSavingTime: !1
    }, {
      id: "Nepal Standard Time",
      offset: 345,
      offsetHours: 5.75,
      displayName: "(UTC+05:45) Kathmandu",
      supportsDaylightSavingTime: !1
    }, {
      id: "Central Asia Standard Time",
      offset: 360,
      offsetHours: 6,
      displayName: "(UTC+06:00) Astana",
      supportsDaylightSavingTime: !1
    }, {
      id: "Bangladesh Standard Time",
      offset: 360,
      offsetHours: 6,
      displayName: "(UTC+06:00) Dhaka",
      supportsDaylightSavingTime: !0
    }, {
      id: "Ekaterinburg Standard Time",
      offset: 360,
      offsetHours: 6,
      displayName: "(UTC+06:00) Ekaterinburg",
      supportsDaylightSavingTime: !0
    }, {
      id: "Myanmar Standard Time",
      offset: 390,
      offsetHours: 6.5,
      displayName: "(UTC+06:30) Yangon (Rangoon)",
      supportsDaylightSavingTime: !1
    }, {
      id: "SE Asia Standard Time",
      offset: 420,
      offsetHours: 7,
      displayName: "(UTC+07:00) Bangkok, Hanoi, Jakarta",
      supportsDaylightSavingTime: !1
    }, {
      id: "N. Central Asia Standard Time",
      offset: 420,
      offsetHours: 7,
      displayName: "(UTC+07:00) Novosibirsk",
      supportsDaylightSavingTime: !0
    }, {
      id: "Ulaanbaatar Standard Time",
      offset: 480,
      offsetHours: 8,
      displayName: "(UTC+08:00) Ulaanbaatar",
      supportsDaylightSavingTime: !1
    }, {
      id: "China Standard Time",
      offset: 480,
      offsetHours: 8,
      displayName: "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
      supportsDaylightSavingTime: !1
    }, {
      id: "Singapore Standard Time",
      offset: 480,
      offsetHours: 8,
      displayName: "(UTC+08:00) Kuala Lumpur, Singapore",
      supportsDaylightSavingTime: !1
    }, {
      id: "North Asia Standard Time",
      offset: 480,
      offsetHours: 8,
      displayName: "(UTC+08:00) Krasnoyarsk",
      supportsDaylightSavingTime: !0
    }, {
      id: "Taipei Standard Time",
      offset: 480,
      offsetHours: 8,
      displayName: "(UTC+08:00) Taipei",
      supportsDaylightSavingTime: !1
    }, {
      id: "W. Australia Standard Time",
      offset: 480,
      offsetHours: 8,
      displayName: "(UTC+08:00) Perth",
      supportsDaylightSavingTime: !0
    }, {
      id: "Korea Standard Time",
      offset: 540,
      offsetHours: 9,
      displayName: "(UTC+09:00) Seoul",
      supportsDaylightSavingTime: !1
    }, {
      id: "North Asia East Standard Time",
      offset: 540,
      offsetHours: 9,
      displayName: "(UTC+09:00) Irkutsk",
      supportsDaylightSavingTime: !0
    }, {
      id: "Tokyo Standard Time",
      offset: 540,
      offsetHours: 9,
      displayName: "(UTC+09:00) Osaka, Sapporo, Tokyo",
      supportsDaylightSavingTime: !1
    }, {
      id: "AUS Central Standard Time",
      offset: 570,
      offsetHours: 9.5,
      displayName: "(UTC+09:30) Darwin",
      supportsDaylightSavingTime: !1
    }, {
      id: "Cen. Australia Standard Time",
      offset: 570,
      offsetHours: 9.5,
      displayName: "(UTC+09:30) Adelaide",
      supportsDaylightSavingTime: !0
    }, {
      id: "West Pacific Standard Time",
      offset: 600,
      offsetHours: 10,
      displayName: "(UTC+10:00) Guam, Port Moresby",
      supportsDaylightSavingTime: !1
    }, {
      id: "Tasmania Standard Time",
      offset: 600,
      offsetHours: 10,
      displayName: "(UTC+10:00) Hobart",
      supportsDaylightSavingTime: !0
    }, {
      id: "E. Australia Standard Time",
      offset: 600,
      offsetHours: 10,
      displayName: "(UTC+10:00) Brisbane",
      supportsDaylightSavingTime: !1
    }, {
      id: "AUS Eastern Standard Time",
      offset: 600,
      offsetHours: 10,
      displayName: "(UTC+10:00) Canberra, Melbourne, Sydney",
      supportsDaylightSavingTime: !0
    }, {
      id: "Yakutsk Standard Time",
      offset: 600,
      offsetHours: 10,
      displayName: "(UTC+10:00) Yakutsk",
      supportsDaylightSavingTime: !0
    }, {
      id: "Vladivostok Standard Time",
      offset: 660,
      offsetHours: 11,
      displayName: "(UTC+11:00) Vladivostok",
      supportsDaylightSavingTime: !0
    }, {
      id: "Central Pacific Standard Time",
      offset: 660,
      offsetHours: 11,
      displayName: "(UTC+11:00) Solomon Is., New Caledonia",
      supportsDaylightSavingTime: !1
    }, {
      id: "Magadan Standard Time",
      offset: 720,
      offsetHours: 12,
      displayName: "(UTC+12:00) Magadan",
      supportsDaylightSavingTime: !0
    }, {
      id: "Kamchatka Standard Time",
      offset: 720,
      offsetHours: 12,
      displayName: "(UTC+12:00) Petropavlovsk-Kamchatsky - Old",
      supportsDaylightSavingTime: !0
    }, {
      id: "Fiji Standard Time",
      offset: 720,
      offsetHours: 12,
      displayName: "(UTC+12:00) Fiji",
      supportsDaylightSavingTime: !0
    }, {
      id: "New Zealand Standard Time",
      offset: 720,
      offsetHours: 12,
      displayName: "(UTC+12:00) Auckland, Wellington",
      supportsDaylightSavingTime: !0
    }, {
      id: "UTC+12",
      offset: 720,
      offsetHours: 12,
      displayName: "(UTC+12:00) Coordinated Universal Time+12",
      supportsDaylightSavingTime: !1
    }, {
      id: "Tonga Standard Time",
      offset: 780,
      offsetHours: 13,
      displayName: "(UTC+13:00) Nuku'alofa",
      supportsDaylightSavingTime: !1
    }, {
      id: "Samoa Standard Time",
      offset: 780,
      offsetHours: 13,
      displayName: "(UTC+13:00) Samoa",
      supportsDaylightSavingTime: !0
    }],
    c = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
    d = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
  a.jqx.date = function() {
    var e = this;
    if (e.ticksPerMillisecond = 1e4, e.millisecondsPerTick = 1e-4, e.ticksPerSecond = 1e7, e.secondsPerTick = 1e-7, e.ticksPerMinute = 6e8, e.minutesPerTick = 1 / 6e8, e.ticksPerHour = 36e9, e.hoursPerTick = 1 / 36e9, e.ticksPerDay = 864e9, e.daysPerTick = 1 / 864e9, e.millisPerSecond = 1e3, e.millisPerMinute = 6e4, e.millisPerHour = 36e5, e.millisPerDay = 864e5, e.daysPerYear = 365, e.daysPer4Years = 1461, e.daysPer100Years = 36524, e.daysPer400Years = 146097, e.daysTo1601 = 584388, e.daysTo1899 = 693593, e.daysTo10000 = 3652059, e.minTicks = 0, e.maxTicks = 3155378976e9, e.maxMillis = 3155378976e5, e.datePartYear = 0, e.datePartDayOfYear = 1, e.datePartMonth = 2, e.datePartDay = 3, e.daysToMonth365 = c, e.daysToMonth366 = d, e.minValue = new Date(0), e.maxValue = new Date(3155378976e9), e.ticksMask = 0x4000000000000000, e.flagsMask = 0xc000000000000000, e.localMask = 0x8000000000000000, e.ticksCeiling = 0x4000000000000000, e.kindUnspecified = 0, e.kindUtc = 0x4000000000000000, e.kindLocal = 0x8000000000000000, e.kindLocalAmbiguousDst = 0xc000000000000000, e.kindShift = 62, e.regexTrim = /^\s+|\s+$/g, e.regexInfinity = /^[+-]?infinity$/i, e.regexHex = /^0x[a-f0-9]+$/i, e.regexParseFloat = /^[+-]?\d*\.?\d*(e[+-]?\d+)?$/, e.calendar = {
        "/": "/",
        ":": ":",
        firstDay: 0,
        days: {
          names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
        },
        months: {
          names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
          namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
        },
        AM: ["AM", "am", "AM"],
        PM: ["PM", "pm", "PM"],
        eras: [{
          name: "A.D.",
          start: null,
          offset: 0
        }],
        twoDigitYearMax: 2029,
        patterns: {
          d: "M/d/yyyy",
          D: "dddd, MMMM dd, yyyy",
          t: "h:mm tt",
          T: "h:mm:ss tt",
          f: "dddd, MMMM dd, yyyy h:mm tt",
          F: "dddd, MMMM dd, yyyy h:mm:ss tt",
          M: "MMMM dd",
          Y: "yyyy MMMM",
          S: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
          ISO: "yyyy-MM-dd hh:mm:ss",
          ISO2: "yyyy-MM-dd HH:mm:ss",
          d1: "dd.MM.yyyy",
          d2: "dd-MM-yyyy",
          zone1: "yyyy-MM-ddTHH:mm:ss-HH:mm",
          zone2: "yyyy-MM-ddTHH:mm:ss+HH:mm",
          custom: "yyyy-MM-ddTHH:mm:ss.fff",
          custom2: "yyyy-MM-dd HH:mm:ss.fff"
        },
        percentsymbol: "%",
        currencysymbol: "$",
        currencysymbolposition: "before",
        decimalseparator: ".",
        thousandsseparator: ","
      }, e.dateData = 0, e.timeZone = null, e.timeZones = b, e.internalMS = function() {
        return e.dateData
      }, e.getDatePart = function(a) {
        var b = e.internalMS(),
          c = parseInt(b / e.millisPerDay),
          d = parseInt(c / e.daysPer400Years);
        c -= d * e.daysPer400Years;
        var f = parseInt(c / e.daysPer100Years);
        4 == f && (f = 3), c -= f * e.daysPer100Years;
        var g = parseInt(c / e.daysPer4Years);
        c -= g * e.daysPer4Years;
        var h = parseInt(c / e.daysPerYear);
        if (4 == h && (h = 3), a == e.datePartYear) return parseInt(400 * d + 100 * f + 4 * g + h + 1);
        if (c -= h * e.daysPerYear, a == e.datePartDayOfYear) return parseInt(c + 1);
        for (var i = 3 == h && (24 != g || 3 == f), j = i ? e.daysToMonth366 : e.daysToMonth365, k = c >> 6; c >= j[k];) k++;
        return a == e.datePartMonth ? parseInt(k) : parseInt(c - j[k - 1] + 1)
      }, e.dayOfWeek = function() {
        var a = e.dateData;
        return parseInt(a / e.millisPerDay + 1) % 7
      }, e.dayOfYear = function() {
        return e.getDatePart(e.datePartDayOfYear)
      }, e.weekOfYear = function(a) {
        var b = e.toDate(),
          c = a || e.calendar.firstDay,
          d = new Date(b.getFullYear(), 0, 1),
          f = d.getDay() - c;
        f = f >= 0 ? f : f + 7;
        var g, h = Math.floor((b.getTime() - d.getTime() - 6e4 * (b.getTimezoneOffset() - d.getTimezoneOffset())) / 864e5) + 1;
        return f < 4 ? (g = Math.floor((h + f - 1) / 7) + 1) > 52 && (nYear = new Date(b.getFullYear() + 1, 0, 1), nday = nYear.getDay() - c, nday = nday >= 0 ? nday : nday + 7, g = nday < 4 ? 1 : 53) : g = Math.floor((h + f - 1) / 7), g
      }, e.subtract = function(b) {
        return new a.jqx.timeSpan(e.dateData * e.ticksPerMillisecond - b.dateData * e.ticksPerMillisecond)
      }, e.dateToMS = function(a, b, c) {
        if (a >= 1 && a <= 9999 && b >= 1 && b <= 12) {
          a = parseInt(a);
          var d = e.isLeapYear(a) ? e.daysToMonth366 : e.daysToMonth365;
          if (c >= 1 && c <= d[b] - d[b - 1]) {
            var f = a - 1;
            return (365 * f + parseInt(f / 4) - parseInt(f / 100) + parseInt(f / 400) + d[b - 1] + c - 1) * e.millisPerDay
          }
        }
      }, e.isLeapYear = function(a) {
        if (a < 1 || a > 9999) throw new Error("Year out of Range");
        return a % 4 == 0 && (a % 100 != 0 || a % 400 == 0)
      }, e.timeToMS = function(a, b, c, d) {
        if (a >= 0 && a < 24 && b >= 0 && b < 60 && c >= 0 && c < 60) {
          var f = parseInt(3600 * a + 60 * b + c);
          return d > 0 && d < 1e3 ? f * e.millisPerSecond + d : f * e.millisPerSecond
        }
      }, e.daysInMonth = function(a, b) {
        if (b < 1 || b > 12) throw new Error("Month out of Range");
        var c = e.isLeapYear(a) ? e.daysToMonth366 : e.daysToMonth365;
        return c[b] - c[b - 1]
      }, e.arrayIndexOf = function(a, b) {
        if (a.indexOf) return a.indexOf(b);
        for (var c = 0, d = a.length; c < d; c++)
          if (a[c] === b) return c;
        return -1
      }, e.startsWith = function(a, b) {
        return 0 === a.indexOf(b)
      }, e.endsWith = function(a, b) {
        return a.substr(a.length - b.length) === b
      }, e.trim = function(a) {
        return (a + "").replace(e.regexTrim, "")
      }, e.expandFormat = function(a, b) {
        b = b || "F";
        var c, d = a.patterns,
          e = b.length;
        if (1 === e) {
          if (!(c = d[b])) throw "Invalid date format string '" + b + "'.";
          b = c
        } else 2 === e && "%" === b.charAt(0) && (b = b.charAt(1));
        return b
      }, e.getEra = function(a, b) {
        if (!b) return 0;
        if ("string" == typeof a) return 0;
        for (var c, d = a.getTime(), e = 0, f = b.length; e < f; e++)
          if (null === (c = b[e].start) || d >= c) return e;
        return 0
      }, e.toUpper = function(a) {
        return a.split(" ").join(" ").toUpperCase()
      }, e.toUpperArray = function(a) {
        for (var b = [], c = 0, d = a.length; c < d; c++) b[c] = e.toUpper(a[c]);
        return b
      }, e.getEraYear = function(a, b, c, d) {
        var e = a.getFullYear();
        return !d && b.eras && (e -= b.eras[c].offset), e
      }, e.getDayIndex = function(a, b, c) {
        var d, f = a.days,
          g = a._upperDays;
        return g || (a._upperDays = g = [e.toUpperArray(f.names), e.toUpperArray(f.namesAbbr), e.toUpperArray(f.namesShort)]), b = b.toUpperCase(), c ? -1 === (d = e.arrayIndexOf(g[1], b)) && (d = e.arrayIndexOf(g[2], b)) : d = e.arrayIndexOf(g[0], b), d
      }, e.getMonthIndex = function(a, b, c) {
        var d = a.months,
          f = a.monthsGenitive || a.months,
          g = a._upperMonths,
          h = a._upperMonthsGen;
        g || (a._upperMonths = g = [e.toUpperArray(d.names), e.toUpperArray(d.namesAbbr)], a._upperMonthsGen = h = [e.toUpperArray(f.names), e.toUpperArray(f.namesAbbr)]), b = e.toUpper(b);
        var i = e.arrayIndexOf(c ? g[1] : g[0], b);
        return i < 0 && (i = e.arrayIndexOf(c ? h[1] : h[0], b)), i
      }, e.appendPreOrPostMatch = function(a, b) {
        for (var c = 0, d = !1, e = 0, f = a.length; e < f; e++) {
          var g = a.charAt(e);
          switch (g) {
            case "'":
              d ? b.push("'") : c++, d = !1;
              break;
            case "\\":
              d && b.push("\\"), d = !d;
              break;
            default:
              b.push(g), d = !1
          }
        }
        return c
      }, e.getTokenRegExp = function() {
        return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g
      }, e.tryparseDate = function(b, c, d) {
        if (void 0 == c || null == c) c = e.calendar;
        else if (null != c && c && "string" === a.type(c) && Globalize) {
          var f = Globalize.cultures[c];
          f && (c = f.calendar)
        }
        if (void 0 != d) {
          if ("array" === a.type(d))
            for (var g = 0; g < d.length; g++) {
              var h = e.parseDate(b, d[g], c);
              if (h) return h
            }
          var h = e.parseDate(b, d, c);
          if (h) return h
        }
        if ("" == b) return null;
        if (null == b || b.substring || (b = b.toString()), null != b && "/Date(" == b.substring(0, 6)) {
          var i = /^\/Date\((-?\d+)(\+|-)?(\d+)?\)\/$/,
            j = new Date(+b.replace(/\/Date\((\d+)\)\//, "$1"));
          if ("Invalid Date" == j) {
            var k = b.match(/^\/Date\((\d+)([-+]\d\d)(\d\d)\)\/$/),
              j = null;
            k && (j = new Date(1 * k[1] + 36e5 * k[2] + 6e4 * k[3]))
          }
          if (null == j || "Invalid Date" == j || isNaN(j)) {
            var l = i.exec(b);
            if (l) {
              var m = new Date(parseInt(l[1]));
              if (l[2]) {
                var n = parseInt(l[3]);
                "-" === l[2] && (n = -n);
                var o = m.getUTCMinutes();
                m.setUTCMinutes(o - n)
              }
              if (!isNaN(m.valueOf())) return m
            }
          }
          return j
        }
        var p = {
          jqxdate: "yyyy-MM-dd HH:mm:ss",
          d: "M/d/yyyy",
          D: "dddd, MMMM dd, yyyy",
          t: "h:mm tt",
          T: "h:mm:ss tt",
          f: "dddd, MMMM dd, yyyy h:mm tt",
          F: "dddd, MMMM dd, yyyy h:mm:ss tt",
          M: "MMMM dd",
          Y: "yyyy MMMM",
          S: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
          ISO: "yyyy-MM-dd hh:mm:ss",
          ISO2: "yyyy-MM-dd HH:mm:ss",
          ISO8601: "yyyy-MM-ddTHH:mm:ss.sssZ",
          d1: "dd.MM.yyyy",
          d2: "dd-MM-yyyy",
          d3: "MM-dd-yyyy",
          d4: "MM.dd.yyyy",
          zone1: "yyyy-MM-ddTHH:mm:ss-HH:mm",
          zone2: "yyyy-MM-ddTHH:mm:ss+HH:mm",
          custom: "yyyy-MM-ddTHH:mm:ss.fff",
          custom2: "yyyy-MM-dd HH:mm:ss.fff",
          iso: "yyyy-MM-ddTHH:mm:ssZ",
          iso_date1: "yyyy-MM-dd",
          iso_date2: "yyyy-MM-dd",
          iso_date3: "yyyy-ddd",
          iso_date4: "yyyy-MM-dd HH:mm",
          iso_date5: "yyyy-MM-dd HH:mm Z",
          iso_date6: "yyyy-MMM-dd",
          iso_date7: "yyyy-MM",
          iso_date8: "yyyy-MMM",
          iso_date9: "yyyy-MMMM",
          iso_date10: "yyyy-MMMM-dd",
          iso_time1: "HH:mm:ss.tttt",
          iso_time2: "HH:mm:ss",
          iso_time3: "HH:mm",
          iso_time4: "HH",
          iso_time5: "yyyyyy-MM-dd",
          iso_time6: "yyyyyy-MM-dd"
        };
        for (var q in p)
          if (j = e.parseDate(b, p[q], c)) return j;
        var r = c.patterns;
        for (q in r)
          if (j = e.parseDate(b, r[q], c)) {
            if ("ISO" == q) {
              var s = e.parseDate(b, r.ISO2, c);
              if (s) return s
            }
            return j
          }
        if ("string" === a.type(b)) {
          b = e.trim(b);
          var t = [":", "/", "-", " ", ","];
          b = function(a, b, c) {
            return c.replace(new RegExp(a, "g"), b)
          }(", ", ",", b);
          var u = "",
            v = b;
          b.indexOf(":") >= 0 ? (u = b.substring(b.indexOf(":") - 2), u = e.trim(u), v = b.substring(0, b.indexOf(":") - 2)) : b.toUpperCase().indexOf("AM") >= 0 ? (u = b.substring(b.toUpperCase().indexOf("AM") - 2), u = e.trim(u), v = b.substring(0, b.toUpperCase().indexOf("AM") - 2)) : b.toUpperCase().indexOf("PM") >= 0 && (u = b.substring(b.toUpperCase().indexOf("PM") - 2), u = e.trim(u), v = b.substring(0, b.toUpperCase().indexOf("PM") - 2));
          var w = new Date,
            x = !1;
          if (v) {
            for (var g = 0; g < t.length; g++)
              if (v.indexOf(t[g]) >= 0) {
                Q = v.split(t[g]);
                break
              }
            for (var y = new Array, z = new Array, A = new Array, B = null, C = null, g = 0; g < Q.length; g++) {
              var D = Q[g],
                E = e.parseDate(D, "d", c) || e.parseDate(D, "dd", c) || e.parseDate(D, "ddd", c) || e.parseDate(D, "dddd", c);
              if (E && (y.push(E.getDate()), D.length > 2)) {
                B = g;
                break
              }
            }
            for (var g = 0; g < Q.length; g++) {
              var D = Q[g],
                F = e.parseDate(D, "M", c) || e.parseDate(D, "MM", c) || e.parseDate(D, "MMM", c) || e.parseDate(D, "MMMM", c);
              if (F) {
                if (void 0 != B && B == g) continue;
                if (z.push(F.getMonth()), D.length > 2) {
                  C = g;
                  break
                }
              }
            }
            for (var g = 0; g < Q.length; g++) {
              var D = Q[g],
                G = e.parseDate(D, "yyyy", c);
              if (G) {
                if (void 0 != B && B == g) continue;
                if (void 0 != C && C == g) continue;
                A.push(G.getFullYear())
              }
            }
            for (var H = new Array, I = 0; I < y.length; I++)
              for (var k = 0; k < z.length; k++)
                for (var J = 0; J < A.length; J++) {
                  var m = new Date(A[J], z[k], y[I]);
                  A[J] < 1970 && m.setFullYear(A[J]), NaN != m.getTime() && H.push(m)
                }
            H.length > 0 && (w = H[0], x = !0)
          }
          if (u) {
            var K = u.indexOf(":") >= 0 ? u.split(":") : u,
              L = e.parseDate(u, "h:mm tt", c) || e.parseDate(u, "HH:mm:ss.fff", c) || e.parseDate(u, "HH:mm:ss.ff", c) || e.parseDate(u, "h:mm:ss tt", c) || e.parseDate(u, "HH:mm:ss.tttt", c) || e.parseDate(u, "HH:mm:ss", c) || e.parseDate(u, "HH:mm", c) || e.parseDate(u, "HH", c),
              M = 0,
              N = 0,
              O = 0,
              P = 0;
            L && NaN != L.getTime() ? (M = L.getHours(), N = L.getMinutes(), O = L.getSeconds(), P = L.getMilliseconds()) : (1 == K.length && (M = parseInt(K[0])), 2 == K.length && (M = parseInt(K[0]), N = parseInt(K[1])), 3 == K.length && (M = parseInt(K[0]), N = parseInt(K[1]), K[2].indexOf(".") >= 0 ? (O = parseInt(K[2].toString().split(".")[0]), P = parseInt(K[2].toString().split(".")[1])) : O = parseInt(K[2])), 4 == K.length && (M = parseInt(K[0]), N = parseInt(K[1]), O = parseInt(K[2]), P = parseInt(K[3]))), !w || isNaN(M) || isNaN(N) || isNaN(O) || isNaN(P) || (w.setHours(M, N, O, P), x = !0)
          }
          if (x) return w
        }
        if (null != b) {
          for (var s = null, Q = [":", "/", "-"], R = !0, D = 0; D < Q.length; D++) - 1 != b.indexOf(Q[D]) && (R = !1);
          if (R) {
            var S = new Number(b);
            if (!isNaN(S)) return new Date(S)
          }
        }
        return null
      }, e.getParseRegExp = function(a, b) {
        var c = a._parseRegExp;
        if (c) {
          var d = c[b];
          if (d) return d
        } else a._parseRegExp = c = {};
        for (var f, g = e.expandFormat(a, b).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1"), h = ["^"], i = [], j = 0, k = 0, l = e.getTokenRegExp(); null !== (f = l.exec(g));) {
          var m = g.slice(j, f.index);
          if (j = l.lastIndex, (k += e.appendPreOrPostMatch(m, h)) % 2) h.push(f[0]);
          else {
            var n, o = f[0],
              p = o.length;
            switch (o) {
              case "dddd":
              case "ddd":
              case "MMMM":
              case "MMM":
              case "gg":
              case "g":
                n = "(\\D+)";
                break;
              case "tt":
              case "t":
                n = "(\\D*)";
                break;
              case "yyyy":
              case "fff":
              case "ff":
              case "f":
                n = "(\\d{" + p + "})";
                break;
              case "dd":
              case "d":
              case "MM":
              case "M":
              case "yy":
              case "y":
              case "HH":
              case "H":
              case "hh":
              case "h":
              case "mm":
              case "m":
              case "ss":
              case "s":
                n = "(\\d\\d?)";
                break;
              case "zzz":
                n = "([+-]?\\d\\d?:\\d{2})";
                break;
              case "zz":
              case "z":
                n = "([+-]?\\d\\d?)";
                break;
              case "/":
                n = "(\\" + a["/"] + ")";
                break;
              default:
                throw "Invalid date format pattern '" + o + "'."
            }
            n && h.push(n), i.push(f[0])
          }
        }
        e.appendPreOrPostMatch(g.slice(j), h), h.push("$");
        var q = h.join("").replace(/\s+/g, "\\s+"),
          r = {
            regExp: q,
            groups: i
          };
        return c[b] = r
      }, e.outOfRange = function(a, b, c) {
        return a < b || a > c
      }, e.expandYear = function(a, b) {
        var c = new Date,
          d = e.getEra(c);
        if (b < 100) {
          var f = a.twoDigitYearMax;
          f = "string" == typeof f ? (new Date).getFullYear() % 100 + parseInt(f, 10) : f;
          var g = e.getEraYear(c, a, d);
          b += g - g % 100, b > f && (b -= 100)
        }
        return b
      }, e.parseDate = function(a, b, c) {
        void 0 != c && null != c || (c = e.calendar), a = e.trim(a);
        var d = c,
          f = e.getParseRegExp(d, b),
          g = new RegExp(f.regExp).exec(a);
        if (null === g) return null;
        for (var h, i = f.groups, j = null, k = null, l = null, m = null, n = null, o = 0, p = 0, q = 0, r = 0, s = null, t = !1, u = 0, v = i.length; u < v; u++) {
          var w = g[u + 1];
          if (w) {
            var x = i[u],
              y = x.length,
              z = parseInt(w, 10);
            switch (x) {
              case "dd":
              case "d":
                if (m = z, e.outOfRange(m, 1, 31)) return null;
                break;
              case "MMM":
              case "MMMM":
              case "MMMMM":
              case "MMMMMM":
              case "MMMMMMM":
              case "MMMMMMMM":
                if (l = e.getMonthIndex(d, w, 3 === y), e.outOfRange(l, 0, 11)) return null;
                break;
              case "M":
              case "MM":
                if (l = z - 1, e.outOfRange(l, 0, 11)) return null;
                break;
              case "y":
              case "yy":
              case "yyyy":
                if (k = y < 4 ? e.expandYear(d, z) : z, e.outOfRange(k, 0, 9999)) return null;
                break;
              case "h":
              case "hh":
                if (o = z, 12 === o && (o = 0), e.outOfRange(o, 0, 11)) return null;
                break;
              case "H":
              case "HH":
                if (o = z, e.outOfRange(o, 0, 23)) return null;
                break;
              case "m":
              case "mm":
                if (p = z, e.outOfRange(p, 0, 59)) return null;
                break;
              case "s":
              case "ss":
                if (q = z, e.outOfRange(q, 0, 59)) return null;
                break;
              case "tt":
              case "t":
                if (!(t = d.PM && (w === d.PM[0] || w === d.PM[1] || w === d.PM[2])) && (!d.AM || w !== d.AM[0] && w !== d.AM[1] && w !== d.AM[2])) return null;
                break;
              case "f":
              case "ff":
              case "fff":
                if (r = z * Math.pow(10, 3 - y), e.outOfRange(r, 0, 999)) return null;
                break;
              case "ddd":
              case "dddd":
                if (n = e.getDayIndex(d, w, 3 === y), e.outOfRange(n, 0, 6)) return null;
                break;
              case "zzz":
                var A = w.split(/:/);
                if (2 !== A.length) return null;
                if (h = parseInt(A[0], 10), e.outOfRange(h, -12, 13)) return null;
                var B = parseInt(A[1], 10);
                if (e.outOfRange(B, 0, 59)) return null;
                s = 60 * h + (e.startsWith(w, "-") ? -B : B);
                break;
              case "z":
              case "zz":
                if (h = z, e.outOfRange(h, -12, 13)) return null;
                s = 60 * h;
                break;
              case "g":
              case "gg":
                var C = w;
                if (!C || !d.eras) return null;
                C = trim(eraNathat.toLowerCase());
                for (var D = 0, E = d.eras.length; D < E; D++)
                  if (C === d.eras[D].nathat.toLowerCase()) {
                    j = D;
                    break
                  }
                if (null === j) return null
            }
          }
        }
        var F, G = new Date,
          H = d.convert;
        if (F = G.getFullYear(), null === k ? k = F : d.eras && (k += d.eras[j || 0].offset), null === l && (l = 0), null === m && (m = 1), H) {
          if (null === (G = H.toGregorian(k, l, m))) return null
        } else {
          if (G.setFullYear(k, l, m), G.getDate() !== m) return null;
          if (null !== n && G.getDay() !== n) return null
        }
        if (t && o < 12 && (o += 12), G.setHours(o, p, q, r), null !== s) {
          var I = G.getMinutes() - (s + G.getTimezoneOffset());
          G.setHours(G.getHours() + parseInt(I / 60, 10), I % 60)
        }
        return G
      }, e.toString = function(b, c) {
        function d(a, b) {
          var c, d = a + "";
          return b > 1 && d.length < b ? (c = n[b - 2] + d, c.substr(c.length - b, b)) : c = d
        }

        function f(a, b) {
          if (m) return m[b];
          if (void 0 != a.getMonth) switch (b) {
            case 0:
              return a.getFullYear();
            case 1:
              return a.getMonth();
            case 2:
              return a.getDate()
          }
        }
        if (void 0 === b && (b = "yyyy-MM-dd HH:mm:ss"), a.jqx.date.cache && a.jqx.date.cache[e.dateData + b]) return a.jqx.date.cache[e.dateData + b];
        if (c && "string" === a.type(c) && Globalize) {
          var g = Globalize.cultures[c];
          g && (c = g.calendar)
        }
        var h = e.toDate();
        if (void 0 != c && null != c || (c = e.calendar), "string" == typeof h) return h;
        h.toString();
        if (!b || !b.length || "i" === b) {
          var i;
          return i = e.formatDate(h, c.patterns.F, c)
        }
        var j = c.eras,
          k = "s" === b;
        b = e.expandFormat(c, b), i = [];
        for (var l, m, n = ["0", "00", "000"], o = 0, p = e.getTokenRegExp();;) {
          var q = p.lastIndex,
            r = p.exec(b),
            s = b.slice(q, r ? r.index : b.length);
          if (o += e.appendPreOrPostMatch(s, i), !r) break;
          if (o % 2) i.push(r[0]);
          else {
            var t = r[0],
              u = t.length;
            switch (t) {
              case "ddd":
              case "dddd":
                var v = 3 === u ? c.days.namesAbbr : c.days.names;
                i.push(v[h.getDay()]);
                break;
              case "d":
              case "dd":
                !0, i.push(d(f(h, 2), u));
                break;
              case "MMM":
              case "MMMM":
                var w = f(h, 1);
                i.push(c.months[3 === u ? "namesAbbr" : "names"][w]);
                break;
              case "M":
              case "MM":
                i.push(d(f(h, 1) + 1, u));
                break;
              case "y":
              case "yy":
              case "yyyy":
                w = e.getEraYear(h, c, e.getEra(h, j), k), u < 4 && (w %= 100), i.push(d(w, u));
                break;
              case "h":
              case "hh":
                l = h.getHours() % 12, 0 === l && (l = 12), i.push(d(l, u));
                break;
              case "H":
              case "HH":
                i.push(d(h.getHours(), u));
                break;
              case "m":
              case "mm":
                i.push(d(h.getMinutes(), u));
                break;
              case "s":
              case "ss":
                i.push(d(h.getSeconds(), u));
                break;
              case "t":
              case "tt":
                w = h.getHours() < 12 ? c.AM ? c.AM[0] : " " : c.PM ? c.PM[0] : " ", i.push(1 === u ? w.charAt(0) : w);
                break;
              case "f":
              case "ff":
              case "fff":
                i.push(d(h.getMilliseconds(), 3).substr(0, u));
                break;
              case "z":
              case "zz":
                l = h.getTimezoneOffset() / 60, i.push((l <= 0 ? "+" : "-") + d(Math.floor(Math.abs(l)), u));
                break;
              case "zzz":
                l = h.getTimezoneOffset() / 60, i.push((l <= 0 ? "+" : "-") + d(Math.floor(Math.abs(l)), 2) + ":" + d(Math.abs(h.getTimezoneOffset() % 60), 2));
                break;
              case "g":
              case "gg":
                c.eras && i.push(c.eras[e.getEra(h, j)].name);
                break;
              case "/":
                i.push(c["/"]);
                break;
              default:
                throw "Invalid date format pattern '" + t + "'."
            }
          }
        }
        var x = i.join("");
        return a.jqx.date.cache || (a.jqx.date.cache = new Array), a.jqx.date.cache[e.dateData + b] = x, x
      }, e.add = function(b, c, d) {
        var f = e.internalMS();
        if (void 0 === c) {
          if (!1 === d) return e.dateData = f + parseInt(b._ticks / e.ticksPerMillisecond), e;
          var g = new a.jqx.date(f + parseInt(b._ticks / e.ticksPerMillisecond));
          return g.timeZone = e.timeZone, g
        }
        var h = b * c;
        if (h <= -e.maxMillis || h >= e.maxMillis) throw new Error("Out of Range");
        if (!1 === d) return e.dateData = f + h, e;
        var g = new a.jqx.date(f + h);
        return g.timeZone = e.timeZone, g
      }, e.addDays = function(a, b) {
        return e.add(a, e.millisPerDay, b)
      }, e.clone = function() {
        var b = new a.jqx.date(e.dateData);
        return b.timeZone = e.timeZone, b
      }, e.clearTime = function() {
        var b = e.month(),
          c = e.year(),
          d = e.day(),
          f = new a.jqx.date(c, b, d, 0, 0, 0, 0);
        return f.timeZone = e.timeZone, f
      }, e.addHours = function(a, b) {
        return e.add(a, e.millisPerHour, b)
      }, e.addMilliseconds = function(a, b) {
        return e.add(a, 1, b)
      }, e.addMinutes = function(a, b) {
        return e.add(a, e.millisPerMinute, b)
      }, e.addMonths = function(b, c) {
        if (b < -12e4 || b > 12e4) throw new Error("Invalid Months Value");
        var d = parseInt(e.getDatePart(e.datePartYear)),
          f = parseInt(e.getDatePart(e.datePartMonth)),
          g = parseInt(e.getDatePart(e.datePartDay)),
          h = f - 1 + b;
        if (h >= 0 ? (f = h % 12 + 1, d += h / 12) : (f = 12 + (h + 1) % 12, d += (h - 11) / 12), (d = parseInt(d)) < 1 || d > 9999) throw new Error("Year out of range");
        var i = e.daysInMonth(d, f);
        if (g > i && (g = i), !1 === c) return e.dateData = e.dateToMS(d, f, g) + e.internalMS() % e.millisPerDay, e;
        var j = new a.jqx.date(e.dateToMS(d, f, g) + e.internalMS() % e.millisPerDay);
        return j.timeZone = e.timeZone, j
      }, e.addSeconds = function(a, b) {
        return e.add(a, e.millisPerSecond, b)
      }, e.addYears = function(a, b) {
        return e.addMonths(12 * a, b)
      }, e.getTimeZoneOffset = function() {
        var a = new Date,
          b = new Date(a.getFullYear(), 0, 1),
          c = new Date(a.getFullYear(), 6, 1),
          d = a.getTimezoneOffset() < Math.max(b.getTimezoneOffset(), c.getTimezoneOffset());
        return {
          offset: -a.getTimezoneOffset() / 60,
          dst: +d
        }
      }, e.isInDaylightSavingTime = function() {
        var a = new Date,
          b = new Date(a.getFullYear(), 0, 1),
          c = new Date(a.getFullYear(), 6, 1);
        return e.date().getTimezoneOffset() < Math.max(b.getTimezoneOffset(), c.getTimezoneOffset())
      }, e.supportsDaylightSavingTime = function() {
        var a = new Date,
          b = new Date(a.getFullYear(), 0, 1),
          c = new Date(a.getFullYear(), 6, 1);
        return b.getTimezoneOffset() != c.getTimezoneOffset()
      }, e.date = function() {
        var b = e.month(),
          c = e.year(),
          d = e.day(),
          f = new a.jqx.date(c, b, d);
        return f.timeZone = e.timeZone, f
      }, e.isWeekend = function() {
        return 0 == e.dayOfWeek() || 6 == e.dayOfWeek()
      }, e.toDate = function(a) {
        var b = e.month(),
          c = e.year(),
          d = e.day(),
          f = e.hour(),
          g = e.minute(),
          h = e.second(),
          i = e.millisecond(),
          j = new Date(c, b - 1, d);
        if (c < 1970 && j.setFullYear(c), j.setHours(f, g, h, i), a) {
          var k = e.timeZones.filter(function(b) {
            return b.id == a
          });
          if (k.length) {
            var l = k[0].offset;
            "Local" == a && (l = -j.getTimezoneOffset());
            var m = j.getTime(),
              n = 60 * j.getTimezoneOffset() * 1e3;
            if (e.timeZone) {
              var o = e.timeZones.filter(function(a) {
                return a.id == e.timeZone
              });
              if (o.length) var n = 60 * -o[0].offset * 1e3
            }
            var p = m + n;
            j = new Date(p + 6e4 * l)
          }
        }
        return j
      }, e.toTimeZone = function(b) {
        var c = b;
        null == c && (c = "Local");
        var d = e.toDate(c),
          f = new a.jqx.date(d);
        return f.timeZone = b, f
      }, e.day = function() {
        return e.getDatePart(e.datePartDay)
      }, e.month = function() {
        return e.getDatePart(e.datePartMonth)
      }, e.year = function() {
        return e.getDatePart(e.datePartYear)
      }, e.millisecond = function() {
        return parseInt(e.internalMS() % 1e3)
      }, e.hour = function() {
        return parseInt(e.internalMS() / e.millisPerHour % 24)
      }, e.minute = function() {
        return parseInt(e.internalMS() / e.millisPerMinute % 60)
      }, e.second = function() {
        return parseInt(e.internalMS() / e.millisPerSecond % 60)
      }, e.valueOf = function() {
        return e.dateData
      }, e.equals = function(a) {
        return e.dateData === a.dateData
      }, 0 === arguments.length) {
      var f = new Date;
      e.dateData = e.dateToMS(f.getFullYear(), f.getMonth() + 1, f.getDate()) + e.timeToMS(f.getHours(), f.getMinutes(), f.getSeconds(), f.getMilliseconds())
    } else if (1 === arguments.length) {
      void 0 == arguments[0] && (arguments[0] = "todayDate");
      var g = "number" == typeof arguments[0] && isFinite(arguments[0]);
      if (g || "string" !== a.type(arguments[0]))
        if ("number" == typeof arguments[0]) e.dateData = arguments[0];
        else if ("date" == a.type(arguments[0])) {
        var f = arguments[0];
        e.dateData = e.dateToMS(f.getFullYear(), f.getMonth() + 1, f.getDate()) + e.timeToMS(f.getHours(), f.getMinutes(), f.getSeconds(), f.getMilliseconds())
      } else e.dateData = arguments[0];
      else if ("today" === arguments[0]) {
        var f = new Date;
        e.dateData = e.dateToMS(f.getFullYear(), f.getMonth() + 1, f.getDate()) + e.timeToMS(f.getHours(), f.getMinutes(), f.getSeconds(), f.getMilliseconds())
      } else if ("todayDate" === arguments[0]) {
        var f = new Date;
        f.setHours(0, 0, 0, 0), e.dateData = e.dateToMS(f.getFullYear(), f.getMonth() + 1, f.getDate()) + e.timeToMS(f.getHours(), f.getMinutes(), f.getSeconds(), f.getMilliseconds())
      } else {
        var f = e.tryparseDate(arguments[0]);
        e.dateData = e.dateToMS(f.getFullYear(), f.getMonth() + 1, f.getDate()) + e.timeToMS(f.getHours(), f.getMinutes(), f.getSeconds(), f.getMilliseconds())
      }
    } else if (2 === arguments.length) {
      void 0 == arguments[0] && (arguments[0] = "todayDate");
      var g = "number" == typeof arguments[0] && isFinite(arguments[0]);
      if (g || "string" !== a.type(arguments[0]))
        if ("number" == typeof arguments[0]) e.dateData = arguments[0];
        else if ("date" == a.type(arguments[0])) {
        var f = arguments[0];
        e.dateData = e.dateToMS(f.getFullYear(), f.getMonth() + 1, f.getDate()) + e.timeToMS(f.getHours(), f.getMinutes(), f.getSeconds(), f.getMilliseconds())
      } else e.dateData = arguments[0];
      else if ("today" === arguments[0]) {
        var f = new Date;
        e.dateData = e.dateToMS(f.getFullYear(), f.getMonth() + 1, f.getDate()) + e.timeToMS(f.getHours(), f.getMinutes(), f.getSeconds(), f.getMilliseconds())
      } else if ("todayDate" === arguments[0]) {
        var f = new Date;
        f.setHours(0, 0, 0, 0), e.dateData = e.dateToMS(f.getFullYear(), f.getMonth() + 1, f.getDate()) + e.timeToMS(f.getHours(), f.getMinutes(), f.getSeconds(), f.getMilliseconds())
      } else {
        var f = e.tryparseDate(arguments[0]);
        e.dateData = e.dateToMS(f.getFullYear(), f.getMonth() + 1, f.getDate()) + e.timeToMS(f.getHours(), f.getMinutes(), f.getSeconds(), f.getMilliseconds())
      }
      e.timeZone = arguments[1]
    } else if (arguments.length > 2)
      if ("string" === a.type(arguments[0])) {
        var f = e.tryparseDate(arguments[0], arguments[2], arguments[1]);
        e.dateData = e.dateToMS(f.getFullYear(), f.getMonth() + 1, f.getDate()) + e.timeToMS(f.getHours(), f.getMinutes(), f.getSeconds(), f.getMilliseconds())
      } else {
        var h = arguments[0],
          i = arguments[1],
          j = arguments[2],
          k = arguments[3],
          l = arguments[4],
          m = arguments[5],
          n = arguments[6];
        void 0 === k && (k = 0), void 0 === l && (l = 0), void 0 === m && (m = 0), void 0 === n && (n = 0), i--;
        var f = new Date(h, i, j, k, l, m, n);
        h < 1970 && f.setFullYear(h), e.dateData = e.dateToMS(f.getFullYear(), f.getMonth() + 1, f.getDate()) + e.timeToMS(f.getHours(), f.getMinutes(), f.getSeconds(), f.getMilliseconds())
      }
    return e
  }
}(jqxBaseFramework), Array.prototype.filter || (Array.prototype.filter = function(a) {
  "use strict";
  if (void 0 === this || null === this) throw new TypeError;
  var b = Object(this),
    c = b.length >>> 0;
  if ("function" != typeof a) throw new TypeError;
  for (var d = [], e = arguments[1], f = 0; f < c; f++)
    if (f in b) {
      var g = b[f];
      a.call(e, g, f, b) && d.push(g)
    }
  return d
});
