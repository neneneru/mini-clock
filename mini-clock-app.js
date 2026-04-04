(() => {
  const $ = id => document.getElementById(id);
  const els = {
    appRoot: document.querySelector(".app"),
    topbar: document.querySelector(".topbar"),
    sideRail: document.querySelector(".side-rail"),
    stage: document.querySelector(".stage"),
    timerButton: $("timerButton"),
    timerText: $("timerText"),
    clockMeridiem: $("clockMeridiem"),
    phaseSplash: $("phaseSplash"),
    statusPill: $("statusPill"),
    previewPill: $("previewPill"),
    durationPill: $("durationPill"),
    soundPill: $("soundPill"),
    uiToggle: $("uiToggle"),
    uiTogglePath: $("uiTogglePath"),
    uiToggleLabel: $("uiToggleLabel"),
    settingsOpenBtn: $("settingsOpenBtn"),
    railPresetBtn: $("railPresetBtn"),
    railSoundBtn: $("railSoundBtn"),
    railPresetSaveBtn: $("railPresetSaveBtn"),
    applyBtn: $("applyBtn"),
    stagePauseBtn: $("stagePauseBtn"),
    stageResetBtn: $("stageResetBtn"),
    fontButton: $("fontButton"),
    fontValue: $("fontValue"),
    sizeButton: $("sizeButton"),
    sizeValue: $("sizeValue"),
    unitLabel: $("unitLabel"),
    timeLabel: $("timeLabel"),
    unitSegment: $("unitSegment"),
    clockAnimButton: $("clockAnimButton"),
    clockAnimValue: $("clockAnimValue"),
    typeButton: $("typeButton"),
    typeValue: $("typeValue"),
    timeButton: $("timeButton"),
    timeValue: $("timeValue"),
    presetButton: $("presetButton"),
    presetValue: $("presetValue"),
    presetSaveBtn: $("presetSaveBtn"),
    panelButton: $("panelButton"),
    panelValue: $("panelValue"),
    dockTypeBtn: $("dockTypeBtn"),
    dockTypeValue: $("dockTypeValue"),
    dockFontBtn: $("dockFontBtn"),
    dockFontValue: $("dockFontValue"),
    dockSizeBtn: $("dockSizeBtn"),
    dockSizeValue: $("dockSizeValue"),
    dockUnitBtn: $("dockUnitBtn"),
    dockUnitValue: $("dockUnitValue"),
    dockPresetBtn: $("dockPresetBtn"),
    dockPresetValue: $("dockPresetValue"),
    dockPresetSaveBtn: $("dockPresetSaveBtn"),
    dockPanelBtn: $("dockPanelBtn"),
    dockPanelValue: $("dockPanelValue"),
    dockTimeBtn: $("dockTimeBtn"),
    dockTimeValue: $("dockTimeValue"),
    stopwatchPanel: $("stopwatchPanel"),
    stopwatchStartBtn: $("stopwatchStartBtn"),
    stopwatchResetBtn: $("stopwatchResetBtn"),
    stopwatchLapBtn: $("stopwatchLapBtn"),
    stopwatchAvgChip: $("stopwatchAvgChip"),
    stopwatchBestChip: $("stopwatchBestChip"),
    stopwatchWorstChip: $("stopwatchWorstChip"),
    stopwatchLaps: $("stopwatchLaps"),
    alarmBoard: $("alarmBoard"),
    alarmCards: $("alarmCards"),
    alarmDisplayToggle: $("alarmDisplayToggle"),
    alarmDisplayToggleBtn: $("alarmDisplayToggleBtn"),
    alarmDisplayToggleLabel: $("alarmDisplayToggleLabel"),
    alarmOverlay: $("alarmOverlay"),
    alarmAlertMessage: $("alarmAlertMessage"),
    alarmAlertMeta: $("alarmAlertMeta"),
    alarmSnoozeBtn: $("alarmSnoozeBtn"),
    alarmDismissBtn: $("alarmDismissBtn"),
    stageStart: document.querySelector(".stage-start"),
    sequencePanel: $("sequencePanel"),
    sequenceGuide: $("sequenceGuide"),
    sequenceVisibilityBtn: $("sequenceVisibilityBtn"),
    sequenceVisibilityLabel: $("sequenceVisibilityLabel"),
    sequenceCollapsedBtn: $("sequenceCollapsedBtn"),
    sequenceKicker: $("sequenceKicker"),
    sequenceTitle: $("sequenceTitle"),
    sequenceLead: $("sequenceLead"),
    sequenceNow: $("sequenceNow"),
    sequenceNext: $("sequenceNext"),
    sequenceMeta: $("sequenceMeta"),
    sequenceRail: $("sequenceRail"),
    clockControls: $("clockControls"),
    clockHourSegment: $("clockHourSegment"),
    clockPrecisionSegment: $("clockPrecisionSegment"),
    clockWorldSegment: $("clockWorldSegment"),
    clockWorld: $("clockWorld"),
    stageSkipBtn: $("stageSkipBtn"),
    pickerOverlay: $("pickerOverlay"),
    pickerLabel: $("pickerLabel"),
    pickerDesc: $("pickerDesc"),
    pickerColumns: $("pickerColumns"),
    pickerEditor: $("pickerEditor"),
    pickerClose: $("pickerClose"),
    pickerCancel: $("pickerCancel"),
    pickerConfirm: $("pickerConfirm"),
    settingsOverlay: $("settingsOverlay"),
    settingsCloseBtn: $("settingsCloseBtn"),
    settingsMeta: $("settingsMeta"),
    settingsPresetMeta: $("settingsPresetMeta"),
    settingsPresetType: $("settingsPresetType"),
    settingsPresetTypePicker: $("settingsPresetTypePicker"),
    settingsPresetTypeButton: $("settingsPresetTypeButton"),
    settingsPresetTypeValue: $("settingsPresetTypeValue"),
    settingsPresetTypeMenu: $("settingsPresetTypeMenu"),
    settingsPresetName: $("settingsPresetName"),
    settingsSavePresetBtn: $("settingsSavePresetBtn"),
    settingsPresetList: $("settingsPresetList"),
    settingsHistoryList: $("settingsHistoryList"),
    settingsClearHistoryBtn: $("settingsClearHistoryBtn"),
    settingsSoundToggleBtn: $("settingsSoundToggleBtn"),
    settingsSoundPreset: $("settingsSoundPreset"),
    settingsSoundTonePicker: $("settingsSoundTonePicker"),
    settingsSoundToneButton: $("settingsSoundToneButton"),
    settingsSoundToneValue: $("settingsSoundToneValue"),
    settingsSoundToneMenu: $("settingsSoundToneMenu"),
    settingsSoundVolume: $("settingsSoundVolume"),
    settingsSoundVolumeValue: $("settingsSoundVolumeValue"),
    settingsSoundPreviewBtn: $("settingsSoundPreviewBtn"),
    settingsClockAmPmStyle: $("settingsClockAmPmStyle"),
    settingsClockAmPmPicker: $("settingsClockAmPmPicker"),
    settingsClockAmPmButton: $("settingsClockAmPmButton"),
    settingsClockAmPmValue: $("settingsClockAmPmValue"),
    settingsClockAmPmMenu: $("settingsClockAmPmMenu"),
  };

  if (!els.timerButton || !els.timerText || !els.pickerOverlay) return;

  const FONT_OPTIONS = [
    { id: "Inter", label: "Inter", stack: "'Inter',sans-serif" },
    { id: "Noto Sans JP", label: "Noto Sans JP", stack: "'Noto Sans JP',sans-serif" },
    { id: "M PLUS Rounded 1c", label: "M PLUS Rounded 1c", stack: "'M PLUS Rounded 1c',sans-serif" },
    { id: "Zen Kaku Gothic New", label: "Zen Kaku Gothic New", stack: "'Zen Kaku Gothic New',sans-serif" },
    { id: "Shippori Mincho", label: "Shippori Mincho", stack: "'Shippori Mincho',serif" },
    { id: "Kosugi Maru", label: "Kosugi Maru", stack: "'Kosugi Maru',sans-serif" },
    { id: "IBM Plex Sans JP", label: "IBM Plex Sans JP", stack: "'IBM Plex Sans JP',sans-serif" },
    { id: "Sawarabi Gothic", label: "Sawarabi Gothic", stack: "'Sawarabi Gothic',sans-serif" },
    { id: "Sawarabi Mincho", label: "Sawarabi Mincho", stack: "'Sawarabi Mincho',serif" },
    { id: "Poppins", label: "Poppins", stack: "'Poppins',sans-serif" },
    { id: "Montserrat", label: "Montserrat", stack: "'Montserrat',sans-serif" },
    { id: "Raleway", label: "Raleway", stack: "'Raleway',sans-serif" },
    { id: "Lexend", label: "Lexend", stack: "'Lexend',sans-serif" },
    { id: "Nunito", label: "Nunito", stack: "'Nunito',sans-serif" },
    { id: "Rubik", label: "Rubik", stack: "'Rubik',sans-serif" },
    { id: "Manrope", label: "Manrope", stack: "'Manrope',sans-serif" },
    { id: "DM Sans", label: "DM Sans", stack: "'DM Sans',sans-serif" },
    { id: "Playfair Display", label: "Playfair Display", stack: "'Playfair Display',serif" },
    { id: "Cormorant Garamond", label: "Cormorant Garamond", stack: "'Cormorant Garamond',serif" },
    { id: "Bebas Neue", label: "Bebas Neue", stack: "'Bebas Neue',sans-serif" },
  ];

  const TYPE_OPTIONS = [
    { value: "countdown", label: "COUNTDOWN", desc: "One clean deadline" },
    { value: "countup", label: "COUNT UP", desc: "Rise toward a goal" },
    { value: "clock", label: "CLOCK", desc: "Live local and world time" },
    { value: "alarm", label: "ALARM", desc: "Alert, message, and snooze" },
    { value: "stopwatch", label: "STOPWATCH", desc: "Pure elapsed time" },
    { value: "pomodoro", label: "POMODORO", desc: "Focus and breaks" },
    { value: "loop", label: "LOOP", desc: "Repeat by count" },
    { value: "interval", label: "INTERVAL", desc: "Warm up and repeat" },
    { value: "tabata", label: "TABATA", desc: "20 / 10 preset" },
    { value: "scenario", label: "SCENARIO", desc: "Custom multi-step" },
  ];

  const UNIT_OPTIONS = [
    { value: "seconds", label: "SECONDS" },
    { value: "clock", label: "H:M:S" },
  ];
  const CLOCK_HOUR_OPTIONS = [
    { id: 24, label: "24H" },
    { id: 12, label: "12H" },
  ];
  const CLOCK_PRECISION_OPTIONS = [
    { id: "minute", label: "MIN" },
    { id: "seconds", label: "SEC" },
    { id: "milliseconds", label: "MS" },
  ];
  const CLOCK_CITY_LIBRARY = [
    { id: "honolulu", label: "Honolulu", timeZone: "Pacific/Honolulu" },
    { id: "anchorage", label: "Anchorage", timeZone: "America/Anchorage" },
    { id: "japan", label: "Japan", timeZone: "Asia/Tokyo" },
    { id: "tokyo", label: "Tokyo", timeZone: "Asia/Tokyo" },
    { id: "seoul", label: "Seoul", timeZone: "Asia/Seoul" },
    { id: "delhi", label: "Delhi", timeZone: "Asia/Kolkata" },
    { id: "singapore", label: "Singapore", timeZone: "Asia/Singapore" },
    { id: "hongkong", label: "Hong Kong", timeZone: "Asia/Hong_Kong" },
    { id: "bangkok", label: "Bangkok", timeZone: "Asia/Bangkok" },
    { id: "jakarta", label: "Jakarta", timeZone: "Asia/Jakarta" },
    { id: "sydney", label: "Sydney", timeZone: "Australia/Sydney" },
    { id: "perth", label: "Perth", timeZone: "Australia/Perth" },
    { id: "darwin", label: "Darwin", timeZone: "Australia/Darwin" },
    { id: "adelaide", label: "Adelaide", timeZone: "Australia/Adelaide" },
    { id: "melbourne", label: "Melbourne", timeZone: "Australia/Melbourne" },
    { id: "noumea", label: "Noumea", timeZone: "Pacific/Noumea" },
    { id: "auckland", label: "Auckland", timeZone: "Pacific/Auckland" },
    { id: "dubai", label: "Dubai", timeZone: "Asia/Dubai" },
    { id: "pontadelgada", label: "Ponta Delgada", timeZone: "Atlantic/Azores" },
    { id: "london", label: "London", timeZone: "Europe/London" },
    { id: "lisbon", label: "Lisbon", timeZone: "Europe/Lisbon" },
    { id: "paris", label: "Paris", timeZone: "Europe/Paris" },
    { id: "berlin", label: "Berlin", timeZone: "Europe/Berlin" },
    { id: "rome", label: "Rome", timeZone: "Europe/Rome" },
    { id: "madrid", label: "Madrid", timeZone: "Europe/Madrid" },
    { id: "athens", label: "Athens", timeZone: "Europe/Athens" },
    { id: "moscow", label: "Moscow", timeZone: "Europe/Moscow" },
    { id: "samara", label: "Samara", timeZone: "Europe/Samara" },
    { id: "accra", label: "Accra", timeZone: "Africa/Accra" },
    { id: "casablanca", label: "Casablanca", timeZone: "Africa/Casablanca" },
    { id: "cairo", label: "Cairo", timeZone: "Africa/Cairo" },
    { id: "lagos", label: "Lagos", timeZone: "Africa/Lagos" },
    { id: "nairobi", label: "Nairobi", timeZone: "Africa/Nairobi" },
    { id: "johannesburg", label: "Johannesburg", timeZone: "Africa/Johannesburg" },
    { id: "mauritius", label: "Port Louis", timeZone: "Indian/Mauritius" },
    { id: "newyork", label: "New York", timeZone: "America/New_York" },
    { id: "chicago", label: "Chicago", timeZone: "America/Chicago" },
    { id: "toronto", label: "Toronto", timeZone: "America/Toronto" },
    { id: "mexicocity", label: "Mexico City", timeZone: "America/Mexico_City" },
    { id: "losangeles", label: "Los Angeles", timeZone: "America/Los_Angeles" },
    { id: "saopaulo", label: "Sao Paulo", timeZone: "America/Sao_Paulo" },
    { id: "portmoresby", label: "Port Moresby", timeZone: "Pacific/Port_Moresby" },
  ];
  const LEGACY_CLOCK_ZONE_ALIASES = {
    utc: "UTC",
    ...Object.fromEntries(CLOCK_CITY_LIBRARY.map(city => [city.id.toLowerCase(), city.timeZone])),
  };
  const CLOCK_ZONE_OPTIONS = (() => {
    const now = new Date();
    const supported = typeof Intl.supportedValuesOf === "function"
      ? Intl.supportedValuesOf("timeZone")
      : CLOCK_CITY_LIBRARY.map(city => city.timeZone);
    const toOffsetMinutes = timeZone => {
      try {
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone,
          hourCycle: "h23",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        const parts = formatter.formatToParts(now);
        const pick = type => Number(parts.find(part => part.type === type)?.value || 0);
        const asUtc = Date.UTC(
          pick("year"),
          pick("month") - 1,
          pick("day"),
          pick("hour"),
          pick("minute"),
          pick("second"),
        );
        return Math.round((asUtc - now.getTime()) / 60000);
      } catch {
        return 0;
      }
    };
    const timeZones = [...new Set(["UTC", ...supported, ...CLOCK_CITY_LIBRARY.map(city => city.timeZone)])];
    const zones = timeZones
      .filter(Boolean)
      .map(timeZone => ({
        id: timeZone,
        label: timeZone,
        timeZone,
        sortMinutes: toOffsetMinutes(timeZone),
      }))
      .sort((left, right) => left.sortMinutes - right.sortMinutes || left.id.localeCompare(right.id));
    return [
      { id: "device", label: "LOCAL", timeZone: null, sortMinutes: Number.NEGATIVE_INFINITY },
      ...zones,
    ];
  })();
  const CLOCK_ZONE_META = {
    device: { code: "LOCAL", name: "Local Time" },
    utc: { code: "UTC", name: "Coordinated Universal Time" },
    "asia/tokyo": { code: "JST", name: "Japan Standard Time" },
    "asia/seoul": { code: "KST", name: "Korea Standard Time" },
    "asia/singapore": { code: "SGT", name: "Singapore Time" },
    "asia/hong_kong": { code: "HKT", name: "Hong Kong Time" },
    "asia/bangkok": { code: "ICT", name: "Indochina Time" },
    "asia/dubai": { code: "GST", name: "Gulf Standard Time" },
    "europe/london": { code: "GMT/BST", name: "Greenwich Mean Time" },
    "america/new_york": { code: "EST/EDT", name: "Eastern Time" },
    "america/chicago": { code: "CST/CDT", name: "Central Time" },
    "america/los_angeles": { code: "PST/PDT", name: "Pacific Time" },
    "australia/sydney": { code: "AEST/AEDT", name: "Australian Eastern Time" },
  };
  const CLOCK_CITY_SET_OPTIONS = [
    {
      id: "global",
      label: "GLOBAL",
      cityIds: ["honolulu", "newyork", "london", "dubai", "auckland"],
      backupIds: ["japan", "sydney"],
    },
    {
      id: "asia",
      label: "ASIA",
      cityIds: ["dubai", "delhi", "bangkok", "hongkong", "japan"],
      backupIds: ["seoul", "singapore"],
    },
    {
      id: "europe",
      label: "EUROPE",
      cityIds: ["pontadelgada", "london", "berlin", "athens", "samara"],
      backupIds: ["moscow", "lisbon"],
    },
    {
      id: "africa",
      label: "AFRICA",
      cityIds: ["accra", "lagos", "cairo", "nairobi", "mauritius"],
      backupIds: ["casablanca", "johannesburg"],
    },
    {
      id: "america",
      label: "AMERICA",
      cityIds: ["honolulu", "losangeles", "chicago", "newyork", "saopaulo"],
      backupIds: ["anchorage", "mexicocity"],
    },
    {
      id: "oceania",
      label: "OCEANIA",
      cityIds: ["perth", "darwin", "portmoresby", "noumea", "auckland"],
      backupIds: ["sydney", "adelaide"],
    },
  ];
  const CLOCK_AMPM_STYLE_OPTIONS = [
    { id: "after-inline", label: "After inline" },
    { id: "before-inline", label: "Before inline" },
    { id: "before-badge", label: "Before badge vertical" },
    { id: "after-badge", label: "After badge vertical" },
    { id: "before-badge-horizontal", label: "Before badge horizontal" },
    { id: "after-badge-horizontal", label: "After badge horizontal" },
    { id: "slanted", label: "Slanted decor" },
  ];
  const PANEL_OPTIONS = [
    { value: "hide", label: "HIDE", desc: "Minimal clears detail" },
    { value: "show", label: "SHOW", desc: "Minimal keeps detail" },
  ];
  const ALARM_REPEAT_OPTIONS = [
    { id: "once", label: "ONCE" },
    { id: "daily", label: "DAILY" },
    { id: "weekdays", label: "WEEKDAYS" },
    { id: "weekends", label: "WEEKENDS" },
    { id: "custom", label: "CUSTOM" },
  ];
  const ALARM_WEEKDAY_OPTIONS = [
    { id: 0, label: "SUN", long: "Sunday" },
    { id: 1, label: "MON", long: "Monday" },
    { id: 2, label: "TUE", long: "Tuesday" },
    { id: 3, label: "WED", long: "Wednesday" },
    { id: 4, label: "THU", long: "Thursday" },
    { id: 5, label: "FRI", long: "Friday" },
    { id: 6, label: "SAT", long: "Saturday" },
  ];
  const ALARM_SNOOZE_OPTIONS = [1, 3, 5, 10, 15, 20, 30, 45, 60];
  const SOUND_OPTIONS = [
    { id: "Glass", label: "Glass" },
    { id: "Bell", label: "Bell" },
    { id: "Bloom", label: "Bloom" },
    { id: "Chime", label: "Chime" },
    { id: "Pulse", label: "Pulse" },
    { id: "Nova", label: "Nova" },
    { id: "Ripple", label: "Ripple" },
    { id: "Orbit", label: "Orbit" },
    { id: "Spark", label: "Spark" },
    { id: "Dawn", label: "Dawn" },
    { id: "Aurora", label: "Aurora" },
    { id: "Pebble", label: "Pebble" },
    { id: "Echo", label: "Echo" },
    { id: "Halo", label: "Halo" },
    { id: "Lumen", label: "Lumen" },
    { id: "Harbor", label: "Harbor" },
    { id: "Prism", label: "Prism" },
    { id: "Velvet", label: "Velvet" },
    { id: "Quartz", label: "Quartz" },
    { id: "Ember", label: "Ember" },
    { id: "Tidal", label: "Tidal" },
    { id: "Meadow", label: "Meadow" },
    { id: "Willow", label: "Willow" },
    { id: "Cedar", label: "Cedar" },
    { id: "Breeze", label: "Breeze" },
    { id: "Maple", label: "Maple" },
    { id: "Linen", label: "Linen" },
    { id: "Drift", label: "Drift" },
    { id: "Hearth", label: "Hearth" },
    { id: "Opal", label: "Opal" },
  ];

  const SIZE_OPTIONS = Array.from({ length: 20 }, (_, i) => (i + 1) * 10);
  const CLOCK_WORLD_CITIES = CLOCK_CITY_LIBRARY;
  const DEFAULT_SCENARIO = [
    { label: "Warm up", seconds: 60 },
    { label: "Work", seconds: 300 },
    { label: "Break", seconds: 60 },
  ];
  const SCENARIO_LABEL_PRESETS = [
    "Warm up",
    "Focus",
    "Work",
    "Break",
    "Long Break",
    "Rest",
    "Stretch",
    "Walk",
    "Breath",
    "Read",
    "Write",
    "Plan",
    "Review",
    "Journal",
  ];
  const SCENARIO_DEFAULT_PRESET = "Work";
  const STORAGE_KEY = "mini-clock:settings:v1";
  const HISTORY_LIMIT = 120;
  const PRESET_LIMIT = 64;

  const DEFAULT_STATE = {
    uiVisible: true,
    detailPanelVisible: true,
    type: "countdown",
    fontId: "Manrope",
    size: 50,
    unit: "seconds",
    clock: {
      hourCycle: 24,
      precision: "seconds",
      showWorld: true,
      citySet: "global",
      zoneId: "device",
      ampmStyle: "after-inline",
    },
    alarmDisplayMode: "countdown",
    alarm: {
      scheduleMode: "time",
      timeMinutes: 450,
      offsetMinutes: 60,
      targetDate: alarmDateInputValue(),
      hourlyMinute: 50,
      hourlyLeadMinutes: 0,
      repeat: "weekdays",
      weekdays: [1, 2, 3, 4, 5],
      snoozeMinutes: 10,
      message: "Time to begin",
      sound: {
        enabled: true,
        preset: "Bell",
        volume: 72,
      },
    },
    alarms: [{
      id: "alarm_default",
      scheduleMode: "time",
      timeMinutes: 450,
      offsetMinutes: 60,
      targetDate: alarmDateInputValue(),
      hourlyMinute: 50,
      hourlyLeadMinutes: 0,
      repeat: "weekdays",
      weekdays: [1, 2, 3, 4, 5],
      snoozeMinutes: 10,
      message: "Time to begin",
      sound: {
        enabled: true,
        preset: "Bell",
        volume: 72,
      },
    }],
    alarmSelectedId: "alarm_default",
    countdownSeconds: 300,
    countupTargetSeconds: 0,
    stopwatchStartSeconds: 0,
    pomodoro: {
      focusSeconds: 1500,
      shortBreakSeconds: 300,
      longBreakSeconds: 900,
      cycles: 4,
    },
    loop: {
      workSeconds: 1500,
      restSeconds: 300,
      repeats: 4,
    },
    interval: {
      warmupSeconds: 60,
      workSeconds: 45,
      restSeconds: 15,
      rounds: 8,
    },
    tabata: {
      workSeconds: 20,
      restSeconds: 10,
      rounds: 8,
    },
    scenario: cloneScenario(DEFAULT_SCENARIO),
  };

  const state = cloneState(DEFAULT_STATE);
  const appStore = {
    history: [],
    presets: [],
    future: {
      sound: {
        enabled: false,
        preset: "Glass",
        volume: 50,
      },
      theme: {
        id: "Soft Bloom",
      },
      liveClock: {
        enabled: false,
      },
    },
  };
  const settingsUi = {
    presetType: state.type,
  };
  const runtime = {
    phase: "idle",
    plan: null,
    phaseIndex: 0,
    phaseEndsAt: 0,
    phaseRemainingMs: 0,
    pausedElapsedMs: 0,
    startAt: 0,
    rafId: 0,
    trailStage: "",
    trailAt: 0,
    loopCycles: 0,
    stopwatchLaps: [],
    stopwatchLapStartMs: 0,
    stopwatchSort: "default",
    stopwatchRenderKey: "",
    alarmConsumedIds: [],
  };
  let audioContext = null;
  let soundPreviewTimer = 0;
  let soundPreviewSignature = "";
  let clockTicker = 0;
  let alarmTicker = 0;
  let alarmAlertLoopTimer = 0;
  let clockTickerProfile = "";
  let clockAnimationAt = 0;
  let clockRenderedText = "";
  let clockRenderedFormatKey = "";
  let clockMeridiemFrame = 0;
  let clockMeridiemSyncTimer = 0;
  let clockMeridiemResizeObserver = null;
  let clockMeridiemObserversReady = false;
  let alarmDisplayTicker = 0;
  let alarmDisplayToggleFrame = 0;

  const picker = {
    kind: null,
    columns: [],
    selection: [],
    draftScenario: null,
    returnToSettings: false,
    presetId: null,
    presetType: null,
    presetUnit: "seconds",
    presetName: "",
    selectionFrame: 0,
    wheels: [],
    manualInputs: [],
    activeColumn: 0,
    previewSnapshot: null,
    previewKind: null,
    soundVolume: 50,
    alarmWeekdays: [],
    alarmMessage: "",
    alarmIncludeRepeat: false,
    alarmDraftConfig: null,
  };

  const timerFrame = els.timerButton.parentElement;
  const uiToggleGlyph = els.uiToggle?.querySelector(".toggle-glyph") || els.uiToggle;
  const SEQUENCE_DETAIL_TYPES = new Set(["pomodoro", "loop", "interval", "tabata", "scenario"]);

  function cloneScenario(steps) {
    return (steps || []).map(step => ({
      label: String(step?.label || "Step").trim() || "Step",
      seconds: Math.max(1, Number(step?.seconds) || 1),
    }));
  }

  function cloneAlarmWeekdays(days) {
    return [...new Set((Array.isArray(days) ? days : []).map(value => clamp(Math.floor(Number(value) || 0), 0, 6)))].sort((left, right) => left - right);
  }

  function normalizeAlarmDisplayMode(mode) {
    return String(mode || "").toLowerCase() === "clock" ? "clock" : "countdown";
  }

  function normalizeAlarmEntry(entry, fallback = DEFAULT_STATE.alarm, fallbackId = null) {
    const source = entry && typeof entry === "object" ? entry : {};
    const safe = normalizeTypeConfig("alarm", Object.keys(source).length ? source : fallback);
    return {
      id: String(source.id || fallbackId || createId("alarm")),
      ...safe,
      weekdays: cloneAlarmWeekdays(safe.weekdays),
    };
  }

  function normalizeAlarmEntries(entries, { fallbackConfig = DEFAULT_STATE.alarm, selectedId = null } = {}) {
    const rawList = Array.isArray(entries) && entries.length ? entries : [fallbackConfig];
    const seen = new Set();
    const list = rawList.map((entry, index) => {
      const normalized = normalizeAlarmEntry(entry, fallbackConfig, index === 0 ? "alarm_default" : null);
      let id = normalized.id;
      while (seen.has(id)) id = createId("alarm");
      seen.add(id);
      return {
        ...normalized,
        id,
      };
    });
    const safeSelectedId = list.find(item => item.id === String(selectedId || ""))?.id || list[0].id;
    const selected = list.find(item => item.id === safeSelectedId) || list[0];
    return {
      list,
      selectedId: safeSelectedId,
      selected: normalizeTypeConfig("alarm", selected),
    };
  }

  function alarmEntries(source = state) {
    return normalizeAlarmEntries(source.alarms, {
      fallbackConfig: source.alarm,
      selectedId: source.alarmSelectedId,
    }).list;
  }

  function selectedAlarmEntry(source = state) {
    const normalized = normalizeAlarmEntries(source.alarms, {
      fallbackConfig: source.alarm,
      selectedId: source.alarmSelectedId,
    });
    return normalized.list.find(item => item.id === normalized.selectedId) || normalized.list[0];
  }

  function syncAlarmState(source = state) {
    const normalized = normalizeAlarmEntries(source.alarms, {
      fallbackConfig: source.alarm,
      selectedId: source.alarmSelectedId,
    });
    source.alarms = normalized.list.map(item => ({
      ...item,
      weekdays: cloneAlarmWeekdays(item.weekdays),
    }));
    source.alarmSelectedId = normalized.selectedId;
    source.alarm = normalized.selected;
    return source.alarms.find(item => item.id === source.alarmSelectedId) || source.alarms[0];
  }

  function setSelectedAlarmEntry(id) {
    syncAlarmState();
    const target = state.alarms.find(item => item.id === String(id || ""));
    if (!target) return null;
    state.alarmSelectedId = target.id;
    state.alarm = normalizeTypeConfig("alarm", target);
    return target;
  }

  function updateSelectedAlarm(config) {
    syncAlarmState();
    const safe = normalizeTypeConfig("alarm", config);
    const targetId = state.alarmSelectedId || state.alarms[0]?.id || "alarm_default";
    state.alarms = state.alarms.map(item => item.id === targetId
      ? {
          id: item.id,
          ...safe,
          weekdays: cloneAlarmWeekdays(safe.weekdays),
        }
      : item);
    state.alarmSelectedId = targetId;
    state.alarm = safe;
    return safe;
  }

  function addAlarmEntry(config = DEFAULT_STATE.alarm) {
    syncAlarmState();
    const entry = normalizeAlarmEntry({
      id: createId("alarm"),
      ...normalizeTypeConfig("alarm", config),
    });
    state.alarms = [...state.alarms, entry];
    state.alarmSelectedId = entry.id;
    state.alarm = normalizeTypeConfig("alarm", entry);
    return entry;
  }

  function removeAlarmEntry(id) {
    syncAlarmState();
    if (state.alarms.length <= 1) return null;
    const index = state.alarms.findIndex(item => item.id === String(id || ""));
    if (index < 0) return null;
    const [removed] = state.alarms.splice(index, 1);
    if (state.alarmSelectedId === removed.id) {
      const fallback = state.alarms[Math.max(0, index - 1)] || state.alarms[0];
      state.alarmSelectedId = fallback.id;
      state.alarm = normalizeTypeConfig("alarm", fallback);
    }
    return removed;
  }

  function alarmUsesClockDisplay() {
    return state.type === "alarm" && normalizeAlarmDisplayMode(state.alarmDisplayMode) === "clock";
  }

  function cloneState(source) {
    const alarms = normalizeAlarmEntries(source.alarms, {
      fallbackConfig: source.alarm,
      selectedId: source.alarmSelectedId,
    });
    return {
      uiVisible: source.uiVisible,
      detailPanelVisible: source.detailPanelVisible !== false,
      type: source.type,
      fontId: source.fontId,
      size: source.size,
      unit: source.unit,
      alarmDisplayMode: normalizeAlarmDisplayMode(source.alarmDisplayMode),
      clock: {
        hourCycle: clockHourOptionById(source.clock?.hourCycle).id,
        precision: clockPrecisionOptionById(source.clock?.precision).id,
        showWorld: source.clock?.showWorld !== false,
        zoneId: clockZoneOptionById(source.clock?.zoneId).id,
        citySet: clockCitySetById(source.clock?.citySet).id,
        ampmStyle: clockAmPmStyleOptionById(source.clock?.ampmStyle).id,
      },
      alarm: alarms.selected,
      alarms: alarms.list.map(item => ({
        ...item,
        weekdays: cloneAlarmWeekdays(item.weekdays),
      })),
      alarmSelectedId: alarms.selectedId,
      countdownSeconds: source.countdownSeconds,
      countupTargetSeconds: source.countupTargetSeconds,
      stopwatchStartSeconds: source.stopwatchStartSeconds,
      pomodoro: { ...source.pomodoro },
      loop: { ...source.loop },
      interval: { ...source.interval },
      tabata: { ...source.tabata },
      scenario: cloneScenario(source.scenario),
    };
  }

  function replaceState(source) {
    const next = cloneState(source);
    state.uiVisible = next.uiVisible;
    state.detailPanelVisible = next.detailPanelVisible;
    state.type = next.type;
    state.fontId = next.fontId;
    state.size = next.size;
    state.unit = next.unit;
    state.alarmDisplayMode = normalizeAlarmDisplayMode(next.alarmDisplayMode);
    state.clock = {
      hourCycle: clockHourOptionById(next.clock?.hourCycle).id,
      precision: clockPrecisionOptionById(next.clock?.precision).id,
      showWorld: next.clock?.showWorld !== false,
      zoneId: clockZoneOptionById(next.clock?.zoneId).id,
      citySet: clockCitySetById(next.clock?.citySet).id,
      ampmStyle: clockAmPmStyleOptionById(next.clock?.ampmStyle).id,
    };
    state.alarm = normalizeTypeConfig("alarm", next.alarm);
    state.alarms = next.alarms.map(item => ({
      ...item,
      weekdays: cloneAlarmWeekdays(item.weekdays),
    }));
    state.alarmSelectedId = next.alarmSelectedId;
    state.countdownSeconds = next.countdownSeconds;
    state.countupTargetSeconds = next.countupTargetSeconds;
    state.stopwatchStartSeconds = next.stopwatchStartSeconds;
    state.pomodoro = { ...next.pomodoro };
    state.loop = { ...next.loop };
    state.interval = { ...next.interval };
    state.tabata = { ...next.tabata };
    state.scenario = cloneScenario(next.scenario);
    syncAlarmState();
  }

  function isDesktopPickerMode() {
    if (typeof window.matchMedia === "function") {
      return !window.matchMedia("(pointer: coarse), (max-width: 820px)").matches;
    }
    return window.innerWidth > 820;
  }

  function isMobileUiMode() {
    if (typeof window.matchMedia === "function") {
      return window.matchMedia("(pointer: coarse), (max-width: 820px)").matches;
    }
    return window.innerWidth <= 820;
  }

  function shouldEmbedRailInTopbar() {
    if (typeof window.matchMedia === "function") {
      return window.matchMedia("(max-width: 820px) and (orientation: portrait) and (pointer: coarse)").matches;
    }
    return window.innerWidth <= 820;
  }

  function syncSideRailPlacement() {
    if (!els.sideRail || !els.topbar || !els.appRoot) return;
    const targetParent = shouldEmbedRailInTopbar() ? els.topbar : els.appRoot;
    if (els.sideRail.parentElement === targetParent) return;

    if (targetParent === els.topbar) {
      els.topbar.appendChild(els.sideRail);
      return;
    }

    if (els.topbar.nextSibling) {
      els.appRoot.insertBefore(els.sideRail, els.topbar.nextSibling);
      return;
    }
    els.appRoot.appendChild(els.sideRail);
  }

  function pickerSupportsLivePreview(kind = picker.kind) {
    if (kind === "sound") return true;
    return isDesktopPickerMode() && [
      "type",
      "font",
      "size",
      "unit",
      "panel",
      "time",
      "scenario",
      "preset",
      "preset-config",
      "clock-zone",
      "clock-cityset",
      "alarm-repeat",
      "alarm-time",
    ].includes(kind);
  }

  function rectsIntersect(a, b, padding = 0) {
    return (a.left - padding) < (b.right + padding)
      && (a.right + padding) > (b.left - padding)
      && (a.top - padding) < (b.bottom + padding)
      && (a.bottom + padding) > (b.top - padding);
  }

  function updatePickerLegibility() {
    if (!els.pickerOverlay) return;
    if (els.pickerOverlay.hidden) {
      els.pickerOverlay.classList.remove("is-legible");
      return;
    }
    const sheet = els.pickerOverlay.querySelector(".picker-sheet");
    if (!sheet) return;
    const sheetRect = sheet.getBoundingClientRect();
    const targets = [els.timerText, els.stageStart, els.stopwatchPanel, els.sequencePanel, els.alarmBoard];
    const overlap = targets.some(target => {
      if (!target || target.hidden) return false;
      const rect = target.getBoundingClientRect();
      if (rect.width <= 2 || rect.height <= 2) return false;
      return rectsIntersect(sheetRect, rect, 6);
    });
    els.pickerOverlay.classList.toggle("is-legible", overlap);
  }

  function setPickerPreviewSnapshot(kind) {
    picker.previewKind = kind;
    picker.previewSnapshot = pickerSupportsLivePreview(kind)
      ? {
          state: cloneState(state),
          sound: sanitizeSoundSettings(appStore.future.sound),
        }
      : null;
  }

  function clearPickerPreviewSnapshot() {
    picker.previewSnapshot = null;
    picker.previewKind = null;
  }

  function restorePickerPreviewSnapshot() {
    if (!picker.previewSnapshot) return;
    replaceState(picker.previewSnapshot.state || state);
    appStore.future.sound = sanitizeSoundSettings(picker.previewSnapshot.sound);
    updateAllUI();
    clearPickerPreviewSnapshot();
  }

  function parseStoredJSON(raw) {
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  function createId(prefix) {
    return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
  }

  function normalizeType(type) {
    return TYPE_OPTIONS.some(option => option.value === type) ? type : "countdown";
  }

  function normalizeUnit(unit) {
    return unit === "clock" ? "clock" : "seconds";
  }

  function normalizeFontId(fontId) {
    return FONT_OPTIONS.some(font => font.id === fontId) ? fontId : FONT_OPTIONS[0].id;
  }

  function normalizeScaleValue(size) {
    return clamp(Number(size) || 100, 10, 200);
  }

  function clockHourOptionById(id) {
    const value = Number(id) === 12 ? 12 : 24;
    return CLOCK_HOUR_OPTIONS.find(option => option.id === value) || CLOCK_HOUR_OPTIONS[0];
  }

  function clockPrecisionOptionById(id) {
    const value = String(id || "");
    return CLOCK_PRECISION_OPTIONS.find(option => option.id === value) || CLOCK_PRECISION_OPTIONS[1];
  }

  function normalizeClockZoneId(id) {
    const value = String(id || "").trim();
    if (!value) return "device";
    return LEGACY_CLOCK_ZONE_ALIASES[value.toLowerCase()] || value;
  }

  function clockZoneOptionById(id) {
    const value = normalizeClockZoneId(id);
    return CLOCK_ZONE_OPTIONS.find(option => option.id === value) || CLOCK_ZONE_OPTIONS[0];
  }

  function clockZoneMetaById(id) {
    return CLOCK_ZONE_META[String(normalizeClockZoneId(id) || "").toLowerCase()] || {};
  }

  function intlTimeZoneName(locale, timeZone, timeZoneName, date = new Date()) {
    try {
      const parts = new Intl.DateTimeFormat(locale, {
        timeZone,
        timeZoneName,
        hour: "2-digit",
      }).formatToParts(date);
      return parts.find(part => part.type === "timeZoneName")?.value || "";
    } catch {
      return "";
    }
  }

  function clockTimeZoneOffsetMinutes(timeZone, date = new Date()) {
    if (!timeZone) return 0;
    try {
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hourCycle: "h23",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      const parts = formatter.formatToParts(date);
      const pick = type => Number(parts.find(part => part.type === type)?.value || 0);
      const asUtc = Date.UTC(
        pick("year"),
        pick("month") - 1,
        pick("day"),
        pick("hour"),
        pick("minute"),
        pick("second"),
      );
      return Math.round((asUtc - date.getTime()) / 60000);
    } catch {
      return 0;
    }
  }

  function clockZoneOffsetLabel(timeZone, date = new Date()) {
    const offset = clockTimeZoneOffsetMinutes(timeZone, date);
    const sign = offset >= 0 ? "+" : "-";
    const absolute = Math.abs(offset);
    const hours = pad2(Math.floor(absolute / 60));
    const minutes = pad2(absolute % 60);
    return `UTC${sign}${hours}${minutes}`;
  }

  function clockZoneEnglishName(value, date = new Date()) {
    const option = typeof value === "object" && value ? value : clockZoneOptionById(value);
    const meta = clockZoneMetaById(option.id);
    if (meta.name) return meta.name;
    const timeZone = option.timeZone || localTimeZone();
    const longGeneric = intlTimeZoneName("en-US", timeZone, "longGeneric", date);
    const long = intlTimeZoneName("en-US", timeZone, "long", date);
    const name = [longGeneric, long].find(Boolean);
    if (name) return name.replace(/^GMT/, "UTC");
    const fallback = String(timeZone || option.label || "Local Time")
      .split("/")
      .pop()
      .replace(/_/g, " ")
      .replace(/\b\w/g, letter => letter.toUpperCase());
    return fallback.includes("Time") ? fallback : `${fallback} Time`;
  }

  function clockZoneCode(value, date = new Date()) {
    const option = typeof value === "object" && value ? value : clockZoneOptionById(value);
    const meta = clockZoneMetaById(option.id);
    if (meta.code) return meta.code;
    const timeZone = option.timeZone || localTimeZone();
    const short = intlTimeZoneName("en-US", timeZone, "short", date)
      || intlTimeZoneName("en-US", timeZone, "shortGeneric", date);
    if (short && /^[A-Z]{2,10}(?:\/[A-Z]{2,10})?$/.test(short)) return short;
    if (short && /^(GMT|UTC)[+-]/.test(short)) return clockZoneOffsetLabel(timeZone, date);
    const words = clockZoneEnglishName(option, date)
      .replace(/[^A-Za-z0-9 ]+/g, " ")
      .split(/\s+/)
      .filter(Boolean);
    const initials = words.map(word => word[0]?.toUpperCase() || "").join("");
    return initials || clockZoneOffsetLabel(timeZone, date).replace("UTC", "UTC");
  }

  function clockZoneCompactLabel(value) {
    const option = typeof value === "object" && value ? value : clockZoneOptionById(value);
    return clockZoneCode(option);
  }

  function clockZoneDisplayParts(value, date = new Date()) {
    const option = typeof value === "object" && value ? value : clockZoneOptionById(value);
    const timeZone = option.timeZone || localTimeZone();
    return {
      value: option.id,
      code: clockZoneCode(option, date),
      name: clockZoneEnglishName(option, date),
      offset: clockZoneOffsetLabel(timeZone, date),
    };
  }

  function clockZoneVerboseLabel(value, date = new Date()) {
    const parts = clockZoneDisplayParts(value, date);
    return `${parts.code} ${parts.name} ${parts.offset}`;
  }

  function buildClockZoneItems(date = new Date()) {
    const seen = new Set();
    const items = [];
    CLOCK_ZONE_OPTIONS.forEach(option => {
      const parts = clockZoneDisplayParts(option, date);
      if (option.id !== "device") {
        const signature = `${parts.code}|${parts.name}|${parts.offset}`;
        if (seen.has(signature)) return;
        seen.add(signature);
      }
      items.push({
        ...parts,
        isLocal: option.id === "device",
        label: clockZoneVerboseLabel(option, date),
      });
    });
    const firstGlobal = items.findIndex(item => !item.isLocal);
    if (firstGlobal >= 0) items[firstGlobal].hasBreak = true;
    return items;
  }

  function clockZonePickerValue(value, date = new Date()) {
    const parts = clockZoneDisplayParts(value, date);
    const match = buildClockZoneItems(date).find(item =>
      item.code === parts.code
      && item.name === parts.name
      && item.offset === parts.offset
    );
    return match?.value || clockZoneOptionById(value).id;
  }

  function renderClockZonePickerNode(item) {
    const row = document.createElement("span");
    row.className = "picker-zone-row";
    if (item.isLocal) row.classList.add("is-local");
    if (item.hasBreak) row.classList.add("has-break");
    const code = document.createElement("span");
    code.className = "picker-zone-code";
    code.textContent = item.code;
    const name = document.createElement("span");
    name.className = "picker-zone-name";
    name.textContent = item.name;
    name.title = item.name;
    const offset = document.createElement("span");
    offset.className = "picker-zone-offset";
    offset.textContent = item.offset;
    row.append(code, name, offset);
    return row;
  }

  function clockCitySetById(id) {
    const value = String(id || "");
    return CLOCK_CITY_SET_OPTIONS.find(option => option.id === value) || CLOCK_CITY_SET_OPTIONS[0];
  }

  function clockAmPmStyleOptionById(id) {
    const value = String(id || "");
    return CLOCK_AMPM_STYLE_OPTIONS.find(option => option.id === value) || CLOCK_AMPM_STYLE_OPTIONS[0];
  }

  function soundOptionById(id) {
    const target = String(id || "");
    return SOUND_OPTIONS.find(option => option.id === target) || SOUND_OPTIONS[0];
  }

  function alarmRepeatOptionById(id) {
    const value = String(id || "");
    return ALARM_REPEAT_OPTIONS.find(option => option.id === value) || ALARM_REPEAT_OPTIONS[2];
  }

  function normalizeAlarmWeekdays(days, fallback = DEFAULT_STATE.alarm.weekdays) {
    const values = cloneAlarmWeekdays(days);
    return values.length ? values : cloneAlarmWeekdays(fallback);
  }

  function alarmDateInputValue(date = new Date()) {
    const target = date instanceof Date && !Number.isNaN(date.getTime()) ? date : new Date();
    return `${target.getFullYear()}-${pad2(target.getMonth() + 1)}-${pad2(target.getDate())}`;
  }

  function normalizeAlarmScheduleMode(mode) {
    const value = String(mode || "").toLowerCase();
    if (value === "relative" || value === "date" || value === "hourly") return value;
    return "time";
  }

  function normalizeAlarmHourlyMinute(value, fallback = DEFAULT_STATE.alarm.hourlyMinute) {
    return clamp(Math.floor(Number(value) || fallback), 0, 59);
  }

  function normalizeAlarmHourlyLeadMinutes(value, fallback = DEFAULT_STATE.alarm.hourlyLeadMinutes) {
    return clamp(Math.floor(Number(value) || fallback), 0, 59);
  }

  function normalizeAlarmDateValue(value, fallback = alarmDateInputValue()) {
    const raw = String(value || "").trim();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) return fallback;
    const [year, month, day] = raw.split("-").map(part => Number(part));
    const candidate = new Date(year, month - 1, day);
    if (
      candidate.getFullYear() !== year
      || candidate.getMonth() !== month - 1
      || candidate.getDate() !== day
    ) return fallback;
    return raw;
  }

  function normalizeAlarmMessage(message) {
    const value = String(message || "").replace(/\s+/g, " ").trim();
    return value.slice(0, 160) || DEFAULT_STATE.alarm.message;
  }

  function alarmWeekdaysForRepeat(config = state.alarm) {
    const scheduleMode = normalizeAlarmScheduleMode(config?.scheduleMode);
    if (scheduleMode !== "time") return [];
    const repeat = alarmRepeatOptionById(config?.repeat).id;
    if (repeat === "daily") return [0, 1, 2, 3, 4, 5, 6];
    if (repeat === "weekdays") return [1, 2, 3, 4, 5];
    if (repeat === "weekends") return [0, 6];
    if (repeat === "custom") return normalizeAlarmWeekdays(config?.weekdays);
    return [];
  }

  function formatAlarmOffset(minutes = state.alarm?.offsetMinutes) {
    const total = Math.max(1, Math.floor(Number(minutes) || 1));
    const hours = Math.floor(total / 60);
    const mins = total % 60;
    if (hours && mins) return `${hours}h ${mins}m`;
    if (hours) return `${hours}h`;
    return `${mins}m`;
  }

  function formatAlarmDateLabel(value = state.alarm?.targetDate) {
    const safe = normalizeAlarmDateValue(value, alarmDateInputValue());
    const date = new Date(`${safe}T00:00:00`);
    if (Number.isNaN(date.getTime())) return safe;
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
    }).format(date).toUpperCase();
  }

  function alarmHourlyRingMinute(config = state.alarm) {
    const safe = normalizeTypeConfig("alarm", config);
    return ((safe.hourlyMinute - safe.hourlyLeadMinutes) % 60 + 60) % 60;
  }

  function formatAlarmHourlyRule(config = state.alarm) {
    const safe = normalizeTypeConfig("alarm", config);
    const target = `:${pad2(safe.hourlyMinute)}`;
    return safe.hourlyLeadMinutes > 0 ? `${target} -${safe.hourlyLeadMinutes}m` : target;
  }

  function alarmRepeatLabel(config = state.alarm) {
    const scheduleMode = normalizeAlarmScheduleMode(config?.scheduleMode);
    if (scheduleMode === "relative") return `IN ${formatAlarmOffset(config?.offsetMinutes)}`;
    if (scheduleMode === "date") return `ON ${formatAlarmDateLabel(config?.targetDate)}`;
    if (scheduleMode === "hourly") return `HOURLY ${formatAlarmHourlyRule(config)}`;
    const repeat = alarmRepeatOptionById(config?.repeat).id;
    if (repeat !== "custom") return alarmRepeatOptionById(repeat).label;
    return normalizeAlarmWeekdays(config?.weekdays)
      .map(day => ALARM_WEEKDAY_OPTIONS.find(option => option.id === day)?.label || "")
      .filter(Boolean)
      .join(" ");
  }

  function formatAlarmFace(timeMinutes = state.alarm?.timeMinutes) {
    const total = clamp(Math.floor(Number(timeMinutes) || 0), 0, 1439);
    const hour = Math.floor(total / 60);
    const minute = total % 60;
    return `${pad2(hour)}:${pad2(minute)}`;
  }

  function formatAlarmPrimary(config = state.alarm) {
    const safe = normalizeTypeConfig("alarm", config);
    if (safe.scheduleMode === "relative") {
      return formatClock(Math.max(60, safe.offsetMinutes * 60));
    }
    if (safe.scheduleMode === "hourly") {
      return `:${pad2(alarmHourlyRingMinute(safe))}`;
    }
    return formatAlarmFace(safe.timeMinutes);
  }

  function formatAlarmSnooze(minutes = state.alarm?.snoozeMinutes) {
    return `${Math.max(1, Math.floor(Number(minutes) || 1))} min`;
  }

  function formatAlarmMessageExcerpt(message = state.alarm?.message, max = 34) {
    const value = normalizeAlarmMessage(message);
    return value.length > max ? `${value.slice(0, Math.max(1, max - 1))}…` : value;
  }

  function nextAlarmDate(config = state.alarm, from = new Date()) {
    const safe = normalizeTypeConfig("alarm", config);
    const scheduleMode = normalizeAlarmScheduleMode(safe.scheduleMode);
    if (scheduleMode === "relative") {
      return new Date(from.getTime() + Math.max(1, safe.offsetMinutes) * 60000);
    }
    if (scheduleMode === "date") {
      const baseDate = normalizeAlarmDateValue(safe.targetDate, alarmDateInputValue(from));
      const [year, month, day] = baseDate.split("-").map(part => Number(part));
      const candidate = new Date(year, month - 1, day);
      candidate.setHours(Math.floor(safe.timeMinutes / 60), safe.timeMinutes % 60, 0, 0);
      if (candidate.getTime() >= from.getTime() + 500) return candidate;
      return new Date(from.getTime() + 500);
    }
    if (scheduleMode === "hourly") {
      const minute = alarmHourlyRingMinute(safe);
      const threshold = from.getTime() + 500;
      const candidate = new Date(from);
      candidate.setSeconds(0, 0);
      candidate.setMinutes(minute);
      if (candidate.getTime() < threshold) {
        candidate.setHours(candidate.getHours() + 1);
        candidate.setMinutes(minute, 0, 0);
      }
      return candidate;
    }
    const minutes = clamp(Math.floor(Number(safe.timeMinutes) || 0), 0, 1439);
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    const base = new Date(from);
    const threshold = from.getTime() + 500;
    const weekdays = alarmWeekdaysForRepeat(safe);
    const searchDays = safe.repeat === "once" ? 2 : 14;

    for (let offset = 0; offset <= searchDays; offset += 1) {
      const candidate = new Date(base);
      candidate.setSeconds(0, 0);
      candidate.setDate(base.getDate() + offset);
      candidate.setHours(hour, minute, 0, 0);
      if (safe.repeat !== "once" && weekdays.length && !weekdays.includes(candidate.getDay())) continue;
      if (candidate.getTime() >= threshold) return candidate;
    }

    const fallback = new Date(base);
    fallback.setDate(base.getDate() + 1);
    fallback.setHours(hour, minute, 0, 0);
    return fallback;
  }

  function alarmRelativeLabel(date = new Date()) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(date);
    target.setHours(0, 0, 0, 0);
    const diffDays = Math.round((target.getTime() - today.getTime()) / 86400000);
    if (diffDays === 0) return "TODAY";
    if (diffDays === 1) return "TOMORROW";
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "2-digit",
      day: "2-digit",
    }).format(date).toUpperCase();
  }

  function formatAlarmNextLabel(date) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "--";
    return `${alarmRelativeLabel(date)} · ${formatAlarmFace(date.getHours() * 60 + date.getMinutes())}`;
  }

  function alarmDurationSummary(config = state.alarm) {
    const safe = normalizeTypeConfig("alarm", config);
    const mode = safe.scheduleMode === "relative"
      ? `IN ${formatAlarmOffset(safe.offsetMinutes)}`
      : `NEXT ${formatAlarmNextLabel(nextAlarmDate(safe))}`;
    return `${mode} · SNOOZE ${formatAlarmSnooze(safe?.snoozeMinutes)}`;
  }

  function alarmRuntimeSummary(config = state.alarm, targetAt = null) {
    const safe = normalizeTypeConfig("alarm", config);
    const nextDate = targetAt instanceof Date && !Number.isNaN(targetAt.getTime())
      ? targetAt
      : targetAt ? new Date(targetAt) : nextAlarmDate(safe);
    return `NEXT ${formatAlarmNextLabel(nextDate)} · SNOOZE ${formatAlarmSnooze(safe.snoozeMinutes)}`;
  }

  function nextAlarmSchedule(from = new Date(), { excludeIds = runtime.alarmConsumedIds || [] } = {}) {
    const excluded = new Set((excludeIds || []).map(value => String(value)));
    let match = null;
    alarmEntries(state).forEach(entry => {
      if (excluded.has(entry.id)) return;
      const targetAt = nextAlarmDate(entry, from);
      if (!match || targetAt < match.targetAt || (
        targetAt.getTime() === match.targetAt.getTime()
        && String(entry.id).localeCompare(String(match.entry.id)) < 0
      )) {
        match = {
          entry,
          targetAt,
        };
      }
    });
    return match;
  }

  function alarmCollectionSummary(from = new Date(), options = {}) {
    const count = alarmEntries(state).length;
    const next = nextAlarmSchedule(from, options);
    if (!next) return count > 1 ? `${count} ALARMS · OFF` : "ALARM OFF";
    return `NEXT ${formatAlarmNextLabel(next.targetAt)} · ${count > 1 ? `${count} ALARMS` : "1 ALARM"}`;
  }

  function clampSoundVolume(value) {
    return clamp(Math.round(Number(value) || 0), 0, 100);
  }

  function sanitizeSoundSettings(source) {
    const raw = source && typeof source === "object" ? source : {};
    const option = soundOptionById(raw.preset);
    return {
      enabled: raw.enabled === true,
      preset: option.id,
      volume: clampSoundVolume(raw.volume ?? 50),
    };
  }

  function soundModeLabel(sound = appStore.future.sound) {
    const safe = sanitizeSoundSettings(sound);
    const icon = safe.enabled ? "♪" : "INF";
    return `${icon} ${safe.volume} ${safe.preset}`;
  }

  function soundBadgeLabel(sound = appStore.future.sound) {
    const safe = sanitizeSoundSettings(sound);
    const icon = safe.enabled ? "♪" : "INF";
    return `${icon} ${safe.volume} ${safe.preset}`;
  }

  function alarmSoundSettingLabel(config = state.alarm, { compact = false } = {}) {
    const sound = sanitizeSoundSettings(normalizeTypeConfig("alarm", config).sound);
    if (!sound.enabled || sound.volume <= 0) {
      return compact ? "Silent" : "SILENT";
    }
    const tone = soundOptionById(sound.preset).label;
    return compact ? `${tone} ${sound.volume}` : `${tone.toUpperCase()} ${sound.volume}`;
  }

  function alarmPickerDescription(config = state.alarm, { includeRepeat = false } = {}) {
    const safe = normalizeTypeConfig("alarm", config);
    if (safe.scheduleMode === "relative") {
      return "Set how many hours and minutes from now the alarm should ring, then choose a tone, volume, or silent message-only mode. Enter confirms.";
    }
    if (safe.scheduleMode === "date") {
      return "Pick a specific date and time for a one-shot alarm, then tailor its tone, volume, and popup message. Enter confirms.";
    }
    if (safe.scheduleMode === "hourly") {
      return "Set the minute mark within each hour, then optionally subtract a lead time such as 10 minutes before :50. Tone, volume, and popup message stay per alarm. Enter confirms.";
    }
    return includeRepeat
      ? "Set the ring time, choose how often it repeats, and keep its own tone, volume, and popup message in sync. Enter confirms."
      : "Set the ring time, snooze, and popup message. Each alarm keeps its own tone, volume, or silent mode. Enter confirms.";
  }

  function normalizeTypeConfig(type, config) {
    const safeType = normalizeType(type);
    const source = config && typeof config === "object" ? config : {};
    switch (safeType) {
      case "clock":
        {
          const legacyPrecision = source.showSeconds === false ? "minute" : "seconds";
          const zoneFromTimeZone = CLOCK_ZONE_OPTIONS.find(option => option.timeZone === source.timeZone);
          return {
            hourCycle: clockHourOptionById(source.hourCycle).id,
            precision: clockPrecisionOptionById(source.precision || legacyPrecision).id,
            showWorld: source.showWorld !== false,
            zoneId: clockZoneOptionById(source.zoneId || zoneFromTimeZone?.id).id,
            citySet: clockCitySetById(source.citySet).id,
            ampmStyle: clockAmPmStyleOptionById(source.ampmStyle).id,
          };
        }
      case "alarm":
        return {
          scheduleMode: normalizeAlarmScheduleMode(source.scheduleMode),
          timeMinutes: clamp(Math.floor(Number(source.timeMinutes) || DEFAULT_STATE.alarm.timeMinutes), 0, 1439),
          offsetMinutes: clamp(Math.floor(Number(source.offsetMinutes) || DEFAULT_STATE.alarm.offsetMinutes), 1, 24 * 60 * 14),
          targetDate: normalizeAlarmDateValue(source.targetDate, alarmDateInputValue()),
          hourlyMinute: normalizeAlarmHourlyMinute(source.hourlyMinute),
          hourlyLeadMinutes: normalizeAlarmHourlyLeadMinutes(source.hourlyLeadMinutes),
          repeat: alarmRepeatOptionById(source.repeat).id,
          weekdays: normalizeAlarmWeekdays(source.weekdays),
          snoozeMinutes: clamp(Math.floor(Number(source.snoozeMinutes) || DEFAULT_STATE.alarm.snoozeMinutes), 1, 60),
          message: normalizeAlarmMessage(source.message),
          sound: sanitizeSoundSettings(source.sound || DEFAULT_STATE.alarm.sound),
        };
      case "countdown":
        return { seconds: Math.max(1, Number(source.seconds) || DEFAULT_STATE.countdownSeconds) };
      case "countup":
        return { seconds: Math.max(0, Number(source.seconds) || 0) };
      case "stopwatch":
        return { seconds: Math.max(0, Number(source.seconds) || 0) };
      case "pomodoro":
        return {
          focusSeconds: Math.max(1, Number(source.focusSeconds) || DEFAULT_STATE.pomodoro.focusSeconds),
          shortBreakSeconds: Math.max(1, Number(source.shortBreakSeconds) || DEFAULT_STATE.pomodoro.shortBreakSeconds),
          longBreakSeconds: Math.max(1, Number(source.longBreakSeconds) || DEFAULT_STATE.pomodoro.longBreakSeconds),
          cycles: Math.max(1, Number(source.cycles) || DEFAULT_STATE.pomodoro.cycles),
        };
      case "loop":
        return {
          workSeconds: Math.max(1, Number(source.workSeconds) || DEFAULT_STATE.loop.workSeconds),
          restSeconds: Math.max(1, Number(source.restSeconds) || DEFAULT_STATE.loop.restSeconds),
          repeats: Math.max(1, Number(source.repeats) || DEFAULT_STATE.loop.repeats),
        };
      case "interval":
        return {
          warmupSeconds: Math.max(1, Number(source.warmupSeconds) || DEFAULT_STATE.interval.warmupSeconds),
          workSeconds: Math.max(1, Number(source.workSeconds) || DEFAULT_STATE.interval.workSeconds),
          restSeconds: Math.max(1, Number(source.restSeconds) || DEFAULT_STATE.interval.restSeconds),
          rounds: Math.max(1, Number(source.rounds) || DEFAULT_STATE.interval.rounds),
        };
      case "tabata":
        return {
          workSeconds: Math.max(1, Number(source.workSeconds) || DEFAULT_STATE.tabata.workSeconds),
          restSeconds: Math.max(1, Number(source.restSeconds) || DEFAULT_STATE.tabata.restSeconds),
          rounds: Math.max(1, Number(source.rounds) || DEFAULT_STATE.tabata.rounds),
        };
      case "scenario":
        return {
          steps: cloneScenario(Array.isArray(source.steps) ? source.steps : source),
        };
      default:
        return { seconds: Math.max(1, Number(source.seconds) || DEFAULT_STATE.countdownSeconds) };
    }
  }

  function sanitizePreset(preset) {
    if (!preset || typeof preset !== "object") return null;
    const type = normalizeType(preset.type);
    const name = String(preset.name || "").trim();
    if (!name) return null;
    return {
      id: String(preset.id || createId("preset")),
      name,
      type,
      unit: normalizeUnit(preset.unit),
      fontId: normalizeFontId(preset.fontId ?? state.fontId),
      size: normalizeScaleValue(preset.size ?? state.size),
      createdAt: String(preset.createdAt || new Date().toISOString()),
      updatedAt: String(preset.updatedAt || preset.createdAt || new Date().toISOString()),
      config: normalizeTypeConfig(type, preset.config),
      sound: sanitizeSoundSettings(preset.sound),
    };
  }

  function sanitizeHistorySnapshot(snapshot, fallbackType = "countdown") {
    if (!snapshot || typeof snapshot !== "object") return null;
    const type = normalizeType(snapshot.type || fallbackType);
    const hasSound = Object.prototype.hasOwnProperty.call(snapshot, "sound");
    const hasFont = Object.prototype.hasOwnProperty.call(snapshot, "fontId");
    const hasSize = Object.prototype.hasOwnProperty.call(snapshot, "size");
    return {
      type,
      unit: normalizeUnit(snapshot.unit),
      config: normalizeTypeConfig(type, snapshot.config),
      sound: hasSound ? sanitizeSoundSettings(snapshot.sound) : null,
      fontId: hasFont ? normalizeFontId(snapshot.fontId) : null,
      size: hasSize ? normalizeScaleValue(snapshot.size) : null,
    };
  }

  function sanitizeHistoryEntry(entry) {
    if (!entry || typeof entry !== "object") return null;
    return {
      id: String(entry.id || createId("history")),
      event: String(entry.event || "updated"),
      type: normalizeType(entry.type),
      timestamp: String(entry.timestamp || new Date().toISOString()),
      summary: String(entry.summary || "").trim(),
      note: String(entry.note || "").trim(),
      snapshot: sanitizeHistorySnapshot(entry.snapshot, entry.type),
    };
  }

  function hydrateStore() {
    const stored = parseStoredJSON((() => {
      try {
        return localStorage.getItem(STORAGE_KEY);
      } catch {
        return null;
      }
    })());
    if (!stored || typeof stored !== "object") {
      return { loaded: false, hasSize: false };
    }
    const hasStoredSize = Object.prototype.hasOwnProperty.call(stored.state || {}, "size");
    const nextState = cloneState({
      ...DEFAULT_STATE,
      ...(stored.state && typeof stored.state === "object" ? stored.state : {}),
      alarmDisplayMode: normalizeAlarmDisplayMode(stored.state?.alarmDisplayMode),
      clock: {
        ...DEFAULT_STATE.clock,
        ...(stored.state?.clock || {}),
      },
      alarm: {
        ...DEFAULT_STATE.alarm,
        ...(stored.state?.alarm || {}),
      },
      alarms: Array.isArray(stored.state?.alarms) && stored.state.alarms.length
        ? stored.state.alarms
        : [{
            id: stored.state?.alarmSelectedId || "alarm_default",
            ...DEFAULT_STATE.alarm,
            ...(stored.state?.alarm || {}),
          }],
      alarmSelectedId: String(stored.state?.alarmSelectedId || "alarm_default"),
      pomodoro: {
        ...DEFAULT_STATE.pomodoro,
        ...(stored.state?.pomodoro || {}),
      },
      loop: {
        ...DEFAULT_STATE.loop,
        ...(stored.state?.loop || {}),
      },
      interval: {
        ...DEFAULT_STATE.interval,
        ...(stored.state?.interval || {}),
      },
      tabata: {
        ...DEFAULT_STATE.tabata,
        ...(stored.state?.tabata || {}),
      },
      scenario: cloneScenario(stored.state?.scenario || DEFAULT_SCENARIO),
    });
    Object.assign(state, nextState);
    appStore.history = Array.isArray(stored.history)
      ? stored.history.map(sanitizeHistoryEntry).filter(Boolean).slice(0, HISTORY_LIMIT)
      : [];
    appStore.presets = Array.isArray(stored.presets)
      ? stored.presets.map(sanitizePreset).filter(Boolean).slice(0, PRESET_LIMIT)
      : [];
    appStore.future = {
      sound: sanitizeSoundSettings(stored.future?.sound),
      theme: {
        id: String(stored.future?.theme?.id || appStore.future.theme.id),
      },
      liveClock: {
        enabled: Boolean(stored.future?.liveClock?.enabled),
      },
    };
    settingsUi.presetType = state.type;
    return { loaded: true, hasSize: hasStoredSize };
  }

  function persistStore() {
    const payload = {
      version: 1,
      state: cloneState(state),
      history: appStore.history.slice(0, HISTORY_LIMIT),
      presets: appStore.presets.slice(0, PRESET_LIMIT),
      future: appStore.future,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {}
  }

  function pad2(value) {
    return String(Math.max(0, Math.floor(value))).padStart(2, "0");
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function toSeconds(value) {
    if (typeof value === "number" && Number.isFinite(value)) return Math.max(0, Math.round(value));
    const raw = String(value || "").trim();
    if (!raw) return 0;
    if (/^(∞|inf|infinity)$/i.test(raw)) return 0;
    if (raw.includes(":")) {
      const parts = raw.split(":").map(part => Math.max(0, Number(part) || 0));
      if (parts.length === 2) return Math.round(parts[0] * 60 + parts[1]);
      if (parts.length === 3) return Math.round(parts[0] * 3600 + parts[1] * 60 + parts[2]);
    }
    return Math.max(0, Math.round(Number(raw) || 0));
  }

  function formatClock(seconds) {
    const total = Math.max(0, Math.floor(seconds));
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    return h > 0 ? `${pad2(h)}:${pad2(m)}:${pad2(s)}` : `${pad2(m)}:${pad2(s)}`;
  }

  function formatPreciseTime(milliseconds) {
    const total = Math.max(0, Math.floor(milliseconds / 10));
    const cs = total % 100;
    const seconds = Math.floor(total / 100);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return h > 0
      ? `${pad2(h)}:${pad2(m)}:${pad2(s)}.${pad2(cs)}`
      : `${pad2(m)}:${pad2(s)}.${pad2(cs)}`;
  }

  function formatUnitTime(seconds) {
    return `${Math.max(0, Math.floor(seconds))}s`;
  }

  function localTimeZone() {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    } catch {
      return "UTC";
    }
  }

  function clockFormatOptions(source = state.clock) {
    const safe = source && typeof source === "object" ? source : {};
    return {
      hourCycle: clockHourOptionById(safe.hourCycle).id,
      precision: clockPrecisionOptionById(safe.precision).id,
      showWorld: safe.showWorld !== false,
      zoneId: clockZoneOptionById(safe.zoneId).id,
      citySet: clockCitySetById(safe.citySet).id,
      ampmStyle: clockAmPmStyleOptionById(safe.ampmStyle).id,
    };
  }

  function clockBaseTimeZone(source = state.clock) {
    const option = clockZoneOptionById(source?.zoneId);
    return option.timeZone || localTimeZone();
  }

  function clockCorePartsInZone(date = new Date(), timeZone = localTimeZone()) {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).formatToParts(date);
    const valueOf = type => Number(parts.find(part => part.type === type)?.value || 0);
    return {
      hour24: valueOf("hour"),
      minute: valueOf("minute"),
      second: valueOf("second"),
      millisecond: date.getMilliseconds(),
    };
  }

  function clockDisplayPartsInZone(date = new Date(), timeZone = localTimeZone(), format = {}) {
    const options = clockFormatOptions(format);
    const parts = clockCorePartsInZone(date, timeZone);
    const hour24 = parts.hour24 % 24;
    const hour = options.hourCycle === 12 ? ((hour24 % 12) || 12) : hour24;
    const meridiem = options.hourCycle === 12 ? (hour24 >= 12 ? "PM" : "AM") : "";
    const base = `${pad2(hour)}:${pad2(parts.minute)}`;
    if (options.precision === "minute") {
      return { time: base, meridiem };
    }
    const withSeconds = `${base}:${pad2(parts.second)}`;
    if (options.precision === "milliseconds") {
      return {
        time: `${withSeconds}.${String(parts.millisecond).padStart(3, "0")}`,
        meridiem,
      };
    }
    return {
      time: withSeconds,
      meridiem,
    };
  }

  function formatTimeInZone(date = new Date(), timeZone = localTimeZone(), format = {}, { includeMeridiem = true } = {}) {
    const display = clockDisplayPartsInZone(date, timeZone, format);
    if (!includeMeridiem || !display.meridiem) return display.time;
    return `${display.time} ${display.meridiem}`;
  }

  function formatDateInZone(date = new Date(), timeZone = localTimeZone()) {
    return new Intl.DateTimeFormat(undefined, {
      timeZone,
      weekday: "short",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  }

  function formatZoneNameInZone(date = new Date(), timeZone = localTimeZone()) {
    try {
      const formatter = new Intl.DateTimeFormat(undefined, {
        timeZone,
        timeZoneName: "short",
      });
      const parts = formatter.formatToParts(date);
      return parts.find(part => part.type === "timeZoneName")?.value || timeZone;
    } catch {
      return timeZone;
    }
  }

  function clockDateTimeSortKey(date = new Date(), timeZone = localTimeZone()) {
    try {
      const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).formatToParts(date);
      const pick = type => parts.find(part => part.type === type)?.value || "00";
      return `${pick("year")}${pick("month")}${pick("day")}${pick("hour")}${pick("minute")}${pick("second")}`;
    } catch {
      return "";
    }
  }

  function formatCompact(seconds) {
    const total = Math.max(0, Math.floor(seconds));
    if (total === 0) return "0s";
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    const parts = [];
    if (h) parts.push(`${h}h`);
    if (m) parts.push(`${m}m`);
    if (!h && !m && s) parts.push(`${s}s`);
    if (!parts.length) parts.push(`${s}s`);
    return parts.join(" ");
  }

  function formatScaleLabel(size) {
    return `${size}%`;
  }

  function isSequenceDetailType(type = state.type) {
    return SEQUENCE_DETAIL_TYPES.has(type);
  }

  function isDetailPanelType(type = state.type) {
    return isSequenceDetailType(type);
  }

  function fontStack(fontId) {
    return FONT_OPTIONS.find(font => font.id === fontId)?.stack || FONT_OPTIONS[0].stack;
  }

  function typeLabel(type) {
    return TYPE_OPTIONS.find(option => option.value === type)?.label || String(type || "").toUpperCase();
  }

  function typeDesc(type) {
    return TYPE_OPTIONS.find(option => option.value === type)?.desc || "";
  }

  function typeGuide(type = state.type) {
    switch (type) {
      case "clock":
        return "Live local clock with major city times. Toggle seconds and world from the center controls.";
      case "alarm":
        return "Arm a local alarm with repeat rules, a custom message, and snooze. Repeat sets the cadence, while Time sets the ring moment and note.";
      case "pomodoro":
        return "Focus repeats in cycles. BREAK is the short reset between cycles, while LONG BREAK is the deeper reset after the final focus block.";
      case "loop":
        return "A simple work and rest repeater. Each round uses the same two phases with no warm up or special final break.";
      case "interval":
        return "Starts with one warm up, then alternates work and rest for the set number of rounds.";
      case "tabata":
        return "A faster interval style. Usually short work and short rest, repeated in punchy high-intensity rounds.";
      default:
        return null;
    }
  }

  function currentTypePhaseLabel() {
    if (runtime.phase !== "running" || !runtime.plan) return typeLabel(state.type);
    if (runtime.plan.kind === "countup" || runtime.plan.kind === "stopwatch" || runtime.plan.kind === "clock") {
      if (runtime.plan.kind === "clock") return "CLOCK";
      return runtime.plan.kind === "stopwatch" ? "STOPWATCH" : "COUNT UP";
    }
    const phase = runtime.plan.phases[runtime.phaseIndex];
    if (!phase) return typeLabel(state.type);
    return phase.cycle && phase.totalCycles ? `${phase.label} ${phase.cycle}/${phase.totalCycles}` : phase.label;
  }

  function formatPhaseSummary(phase) {
    if (!phase) return typeLabel(state.type);
    return phase.cycle && phase.totalCycles ? `${phase.label} ${phase.cycle}/${phase.totalCycles}` : phase.label;
  }

  function timePickerDescription(kind) {
    switch (kind) {
      case "clock":
        return "Set detail, format, world visibility, zone, city set, and AM/PM style. Enter confirms.";
      case "alarm":
        return alarmPickerDescription(state.alarm, { includeRepeat: false });
      case "countup":
        return "Swipe, drag, type, or use arrows. 0 means unlimited. Enter confirms.";
      case "pomodoro":
        return "Focus, short break, long break, and cycles. Swipe, drag, type, or use arrows. Enter confirms.";
      case "loop":
        return "Work, rest, and repeats. Swipe, drag, type, or use arrows. Enter confirms.";
      case "interval":
        return "Warm up, work, rest, and rounds. Swipe, drag, type, or use arrows. Enter confirms.";
      case "tabata":
        return "Work, rest, and rounds. Swipe, drag, type, or use arrows. Enter confirms.";
      case "stopwatch":
        return "Set the starting value. Swipe, drag, type, or use arrows. Enter confirms.";
      default:
        return "Swipe, drag, type, or use arrows. Enter confirms.";
    }
  }

  function totalSecondsForType(type = state.type) {
    switch (type) {
      case "clock":
        return Infinity;
      case "alarm":
        return Infinity;
      case "countdown":
        return Math.max(1, state.countdownSeconds);
      case "countup":
        return state.countupTargetSeconds > 0 ? state.countupTargetSeconds : Infinity;
      case "stopwatch":
        return Infinity;
      case "pomodoro": {
        const cycles = Math.max(1, state.pomodoro.cycles);
        return cycles * state.pomodoro.focusSeconds + Math.max(0, cycles - 1) * state.pomodoro.shortBreakSeconds + state.pomodoro.longBreakSeconds;
      }
      case "loop":
        return Math.max(1, state.loop.repeats) * (state.loop.workSeconds + state.loop.restSeconds);
      case "interval":
        return state.interval.warmupSeconds + Math.max(1, state.interval.rounds) * (state.interval.workSeconds + state.interval.restSeconds);
      case "tabata":
        return Math.max(1, state.tabata.rounds) * (state.tabata.workSeconds + state.tabata.restSeconds);
      case "scenario":
        return state.scenario.reduce((sum, step) => sum + Math.max(1, step.seconds), 0);
      default:
        return Math.max(1, state.countdownSeconds);
    }
  }

  function timeSummaryForType(type = state.type) {
    const formatTime = seconds => state.unit === "clock" ? formatClock(seconds) : formatUnitTime(seconds);
    switch (type) {
      case "clock":
        return `${clockZoneCompactLabel(state.clock?.zoneId)} ${formatTimeInZone(new Date(), clockBaseTimeZone(state.clock), clockFormatOptions(state.clock))}`;
      case "alarm":
        return `${formatAlarmPrimary(state.alarm)} · ${alarmRepeatLabel(state.alarm)}${alarmEntries(state).length > 1 ? ` · ${alarmEntries(state).length} alarms` : ""}`;
      case "countdown":
        return formatTime(state.countdownSeconds);
      case "countup":
        return state.countupTargetSeconds > 0 ? formatTime(state.countupTargetSeconds) : "INF";
      case "stopwatch":
        return `START ${formatTime(state.stopwatchStartSeconds)}`;
      case "pomodoro":
        return `${formatTime(state.pomodoro.focusSeconds)} / ${formatTime(state.pomodoro.shortBreakSeconds)} x${Math.max(1, state.pomodoro.cycles)}`;
      case "loop":
        return `${formatTime(state.loop.workSeconds)} / ${formatTime(state.loop.restSeconds)} x${Math.max(1, state.loop.repeats)}`;
      case "interval":
        return `${formatTime(state.interval.warmupSeconds)} + ${formatTime(state.interval.workSeconds)} / ${formatTime(state.interval.restSeconds)} x${Math.max(1, state.interval.rounds)}`;
      case "tabata":
        return `${formatTime(state.tabata.workSeconds)} / ${formatTime(state.tabata.restSeconds)} x${Math.max(1, state.tabata.rounds)}`;
      case "scenario":
        return `${state.scenario.length} steps`;
      default:
        return formatTime(state.countdownSeconds);
    }
  }

  function totalSummaryForType(type = state.type) {
    if (type === "clock") {
      const format = clockHourOptionById(state.clock?.hourCycle).label;
      const detail = clockPrecisionOptionById(state.clock?.precision).label;
      const zone = `ZONE ${clockZoneCompactLabel(state.clock?.zoneId)}`;
      const world = state.clock?.showWorld !== false ? "WORLD ON" : "WORLD OFF";
      return `LIVE · ${format} · ${detail} · ${zone} · ${world}`;
    }
    if (type === "alarm") {
      return alarmCollectionSummary();
    }
    const total = totalSecondsForType(type);
    if (!Number.isFinite(total)) return "INF";
    return state.unit === "clock" ? formatClock(total) : formatUnitTime(total);
  }

  function formatSettingsTimestamp(timestamp) {
    const date = new Date(timestamp);
    if (Number.isNaN(date.getTime())) return "--";
    return new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
  }

  function formatPresetSummary(type, config) {
    const time = seconds => formatClock(Math.max(0, Number(seconds) || 0));
    const safeType = normalizeType(type);
    const safe = normalizeTypeConfig(safeType, config);
    switch (safeType) {
      case "clock":
        return `${clockHourOptionById(safe.hourCycle).label} · ${clockPrecisionOptionById(safe.precision).label} · ${safe.showWorld ? "WORLD ON" : "WORLD OFF"} · ZONE ${clockZoneCompactLabel(safe.zoneId)} · ${clockCitySetById(safe.citySet).label} · ${clockAmPmStyleOptionById(safe.ampmStyle).label}`;
      case "alarm":
        return `${formatAlarmPrimary(safe)} · ${alarmRepeatLabel(safe)} · SNOOZE ${formatAlarmSnooze(safe.snoozeMinutes)} · ${alarmSoundSettingLabel(safe)} · ${formatAlarmMessageExcerpt(safe.message, 42)}`;
      case "countdown":
        return time(safe.seconds);
      case "countup":
        return safe.seconds > 0 ? time(safe.seconds) : "INF";
      case "stopwatch":
        return `START ${time(safe.seconds)}`;
      case "pomodoro":
        return `${time(safe.focusSeconds)} / ${time(safe.shortBreakSeconds)} / ${time(safe.longBreakSeconds)} x${safe.cycles}`;
      case "loop":
        return `${time(safe.workSeconds)} / ${time(safe.restSeconds)} x${safe.repeats}`;
      case "interval":
        return `${time(safe.warmupSeconds)} + ${time(safe.workSeconds)} / ${time(safe.restSeconds)} x${safe.rounds}`;
      case "tabata":
        return `${time(safe.workSeconds)} / ${time(safe.restSeconds)} x${safe.rounds}`;
      case "scenario":
        return `${safe.steps.length} steps · ${time(safe.steps.reduce((sum, step) => sum + Math.max(1, step.seconds), 0))}`;
      default:
        return time(DEFAULT_STATE.countdownSeconds);
    }
  }

  function formatPresetCompact(type, config) {
    const time = seconds => formatClock(Math.max(0, Number(seconds) || 0));
    const safeType = normalizeType(type);
    const safe = normalizeTypeConfig(safeType, config);
    switch (safeType) {
      case "clock":
        return `LIVE · ${clockHourOptionById(safe.hourCycle).label} · ${clockPrecisionOptionById(safe.precision).label} · ${safe.showWorld ? "WORLD ON" : "WORLD OFF"} · ZONE ${clockZoneCompactLabel(safe.zoneId)} · ${clockCitySetById(safe.citySet).label} · ${clockAmPmStyleOptionById(safe.ampmStyle).label}`;
      case "alarm":
        return `${formatAlarmPrimary(safe)} · ${alarmRepeatLabel(safe)} · ${alarmSoundSettingLabel(safe, { compact: true })} · ${formatAlarmMessageExcerpt(safe.message, 22)}`;
      case "countdown":
        return time(safe.seconds);
      case "countup":
        return safe.seconds > 0 ? `TARGET ${time(safe.seconds)}` : "TARGET INF";
      case "stopwatch":
        return `START ${time(safe.seconds)}`;
      case "pomodoro":
        return `F ${time(safe.focusSeconds)} · B ${time(safe.shortBreakSeconds)} · L ${time(safe.longBreakSeconds)} · x${safe.cycles}`;
      case "loop":
        return `W ${time(safe.workSeconds)} · R ${time(safe.restSeconds)} · x${safe.repeats}`;
      case "interval":
        return `U ${time(safe.warmupSeconds)} · W ${time(safe.workSeconds)} · R ${time(safe.restSeconds)} · x${safe.rounds}`;
      case "tabata":
        return `W ${time(safe.workSeconds)} · R ${time(safe.restSeconds)} · x${safe.rounds}`;
      case "scenario":
        return `${safe.steps.length} STEP · ${time(safe.steps.reduce((sum, step) => sum + Math.max(1, step.seconds), 0))}`;
      default:
        return time(DEFAULT_STATE.countdownSeconds);
    }
  }

  function formatPresetVisualSummary(presetLike) {
    const base = `${typeLabel(presetLike.type)} · ${formatPresetSummary(presetLike.type, presetLike.config)}`;
    const repeats = (() => {
      const safeType = normalizeType(presetLike.type);
      const safe = normalizeTypeConfig(safeType, presetLike.config);
      if (safeType === "loop") return `REPEATS x${safe.repeats}`;
      if (safeType === "interval" || safeType === "tabata") return `ROUNDS x${safe.rounds}`;
      if (safeType === "pomodoro") return `CYCLES x${safe.cycles}`;
      return "";
    })();
    const soundPart = normalizeType(presetLike.type) === "alarm" ? "" : soundBadgeLabel(presetLike.sound);
    const parts = [
      base,
      repeats,
      soundPart,
      `FONT ${normalizeFontId(presetLike.fontId ?? state.fontId)}`,
      `SCALE ${normalizeScaleValue(presetLike.size ?? state.size)}%`,
    ].filter(Boolean);
    return parts.join(" · ");
  }

  function findPresetByComposition({
    type = state.type,
    unit = state.unit,
    config = extractTypeConfig(type),
    sound = appStore.future.sound,
    fontId = state.fontId,
    size = state.size,
    excludeId = null,
  } = {}) {
    const signature = presetSignature(type, unit, config, sound, fontId, size);
    return appStore.presets.find(preset => {
      if (excludeId && preset.id === excludeId) return false;
      return presetSignature(preset.type, preset.unit, preset.config, preset.sound, preset.fontId, preset.size) === signature;
    }) || null;
  }

  function showPresetToast({ kind = "saved", title = "", detail = "" } = {}) {
    const host = document.body;
    if (!host) return;
    host.querySelectorAll(".preset-toast").forEach(node => node.remove());
    const toast = document.createElement("div");
    toast.className = `preset-toast ${kind === "error" ? "is-error" : "is-success"}`;
    const top = (() => {
      const topbar = document.querySelector(".topbar");
      const topbarBottom = topbar ? topbar.getBoundingClientRect().bottom : 88;
      const timerTop = els.timerText ? els.timerText.getBoundingClientRect().top : window.innerHeight * 0.44;
      const target = topbarBottom + Math.max(28, (timerTop - topbarBottom) * 0.48);
      return clamp(target, topbarBottom + 16, Math.max(topbarBottom + 16, timerTop - 18));
    })();
    toast.style.setProperty("--toast-top", `${Math.round(top)}px`);
    const strong = document.createElement("strong");
    strong.textContent = title || (kind === "error" ? "Preset not saved" : "Preset saved");
    const span = document.createElement("span");
    span.textContent = detail;
    toast.append(strong, span);
    host.appendChild(toast);
    emitPresetToastParticles(kind, toast);
    requestAnimationFrame(() => toast.classList.add("is-show"));
    window.setTimeout(() => {
      toast.classList.remove("is-show");
      window.setTimeout(() => toast.remove(), 460);
    }, 2500);
  }

  function emitPresetToastParticles(kind, toast) {
    if (!(toast instanceof HTMLElement)) return;
    const rect = toast.getBoundingClientRect();
    const anchor = document.createElement("div");
    anchor.style.cssText = [
      "position:fixed",
      `left:${rect.left + rect.width / 2}px`,
      `top:${rect.top + rect.height / 2}px`,
      "width:2px",
      "height:2px",
      "pointer-events:none",
      "z-index:99",
      "overflow:visible",
    ].join(";");
    document.body.appendChild(anchor);

    const successPalette = [
      [255, 255, 255],
      [255, 211, 106],
      [150, 255, 170],
      [106, 231, 255],
    ];
    const errorPalette = [
      [255, 126, 155],
      [255, 170, 188],
      [255, 255, 255],
      [255, 210, 118],
    ];
    const isError = kind === "error";
    if (isError) {
      emitPresetErrorDrizzle(rect, errorPalette, { count: 400 });
    } else {
      createParticleBurst(anchor, {
        count: 260,
        palette: successPalette,
        stage: "rush",
        xSpread: 162,
        ySpread: 62,
        sweep: 214,
        durationMin: 1.92,
        durationMax: 2.92,
        opacityBase: 0.9,
      });
      createParticleBurst(anchor, {
        count: 140,
        palette: successPalette,
        stage: "turn",
        xSpread: 126,
        ySpread: 50,
        sweep: 170,
        durationMin: 2.23,
        durationMax: 3.38,
        opacityBase: 0.72,
      });
      [0, 120].forEach(delay => {
        window.setTimeout(() => {
          const ring = document.createElement("div");
          ring.style.cssText = [
            "position:fixed",
            `left:${rect.left + rect.width / 2}px`,
            `top:${rect.top + rect.height / 2}px`,
            delay === 0 ? "width:74px" : "width:92px",
            delay === 0 ? "height:74px" : "height:92px",
            delay === 0 ? "margin-left:-37px" : "margin-left:-46px",
            delay === 0 ? "margin-top:-37px" : "margin-top:-46px",
            "border-radius:50%",
            "border:1px solid rgba(255,255,255,.78)",
            "box-shadow:0 0 18px rgba(255,255,255,.34)",
            "pointer-events:none",
            "z-index:99",
            "animation:ringExpand 1.04s ease-out forwards",
          ].join(";");
          document.body.appendChild(ring);
          window.setTimeout(() => ring.remove(), 1120);
        }, delay);
      });
    }

    window.setTimeout(() => anchor.remove(), isError ? 5600 : 4310);
  }

  function emitPresetErrorDrizzle(rect, palette, { count = 26 } = {}) {
    const fragment = document.createDocumentFragment();
    const innerWidth = Math.max(24, rect.width - 24);
    for (let index = 0; index < count; index++) {
      const color = palette[index % palette.length];
      const rgba = alpha => `rgba(${color[0]},${color[1]},${color[2]},${alpha})`;
      const particle = document.createElement("div");
      const size = 2.4 + Math.random() * 3.8;
      const startX = rect.left + 12 + Math.random() * innerWidth;
      const startY = rect.top + 2 + Math.random() * 8;
      const driftX = (Math.random() - 0.5) * 44;
      const dropY = 84 + Math.random() * 96;
      const duration = 2.9 + Math.random() * 2.3;
      particle.style.cssText = [
        "position:fixed",
        `left:${startX}px`,
        `top:${startY}px`,
        "pointer-events:none",
        "mix-blend-mode:screen",
        "transform:translate(-50%,-50%)",
        `width:${size}px`,
        `height:${size * 1.55}px`,
        "border-radius:46% 54% 58% 42% / 42% 46% 54% 58%",
        "filter:blur(.12px)",
        `animation:float ${duration}s cubic-bezier(.18,.74,.22,1) forwards`,
      ].join(";");
      particle.style.setProperty("--x", `${driftX}px`);
      particle.style.setProperty("--y", `${dropY}px`);
      particle.style.setProperty("--opacity", `${0.56 + Math.random() * 0.26}`);
      particle.style.setProperty("--duration", `${duration}s`);
      particle.style.background = `radial-gradient(circle at 50% 34%,${rgba(0.98)} 0%,${rgba(0.78)} 38%,${rgba(0.18)} 72%,transparent 100%)`;
      fragment.appendChild(particle);
      window.setTimeout(() => particle.remove(), Math.round((duration + 0.64) * 1000));
    }
    document.body.appendChild(fragment);
  }

  function extractTypeConfig(type, source = state) {
    switch (normalizeType(type)) {
      case "clock":
        return {
          hourCycle: clockHourOptionById(source.clock?.hourCycle).id,
          precision: clockPrecisionOptionById(source.clock?.precision).id,
          showWorld: source.clock?.showWorld !== false,
          zoneId: clockZoneOptionById(source.clock?.zoneId).id,
          citySet: clockCitySetById(source.clock?.citySet).id,
          ampmStyle: clockAmPmStyleOptionById(source.clock?.ampmStyle).id,
        };
      case "alarm":
        return normalizeTypeConfig("alarm", selectedAlarmEntry(source));
      case "countdown":
        return { seconds: Math.max(1, source.countdownSeconds) };
      case "countup":
        return { seconds: Math.max(0, source.countupTargetSeconds) };
      case "stopwatch":
        return { seconds: Math.max(0, source.stopwatchStartSeconds) };
      case "pomodoro":
        return {
          focusSeconds: Math.max(1, source.pomodoro.focusSeconds),
          shortBreakSeconds: Math.max(1, source.pomodoro.shortBreakSeconds),
          longBreakSeconds: Math.max(1, source.pomodoro.longBreakSeconds),
          cycles: Math.max(1, source.pomodoro.cycles),
        };
      case "loop":
        return {
          workSeconds: Math.max(1, source.loop.workSeconds),
          restSeconds: Math.max(1, source.loop.restSeconds),
          repeats: Math.max(1, source.loop.repeats),
        };
      case "interval":
        return {
          warmupSeconds: Math.max(1, source.interval.warmupSeconds),
          workSeconds: Math.max(1, source.interval.workSeconds),
          restSeconds: Math.max(1, source.interval.restSeconds),
          rounds: Math.max(1, source.interval.rounds),
        };
      case "tabata":
        return {
          workSeconds: Math.max(1, source.tabata.workSeconds),
          restSeconds: Math.max(1, source.tabata.restSeconds),
          rounds: Math.max(1, source.tabata.rounds),
        };
      case "scenario":
        return {
          steps: cloneScenario(source.scenario),
        };
      default:
        return { seconds: Math.max(1, source.countdownSeconds) };
    }
  }

  function applyTypeConfig(type, config) {
    const safeType = normalizeType(type);
    const safe = normalizeTypeConfig(safeType, config);
    state.type = safeType;
    if (safeType === "countdown") {
      state.countdownSeconds = safe.seconds;
      return;
    }
    if (safeType === "countup") {
      state.countupTargetSeconds = safe.seconds;
      return;
    }
    if (safeType === "clock") {
      state.clock = {
        hourCycle: clockHourOptionById(safe.hourCycle).id,
        precision: clockPrecisionOptionById(safe.precision).id,
        showWorld: safe.showWorld !== false,
        zoneId: clockZoneOptionById(safe.zoneId).id,
        citySet: clockCitySetById(safe.citySet).id,
        ampmStyle: clockAmPmStyleOptionById(safe.ampmStyle).id,
      };
      return;
    }
    if (safeType === "alarm") {
      updateSelectedAlarm(safe);
      return;
    }
    if (safeType === "stopwatch") {
      state.stopwatchStartSeconds = safe.seconds;
      return;
    }
    if (safeType === "pomodoro") {
      state.pomodoro = safe;
      return;
    }
    if (safeType === "loop") {
      state.loop = safe;
      return;
    }
    if (safeType === "interval") {
      state.interval = safe;
      return;
    }
    if (safeType === "tabata") {
      state.tabata = safe;
      return;
    }
    if (safeType === "scenario") {
      state.scenario = cloneScenario(safe.steps);
    }
  }

  function presetsForType(type = state.type) {
    const safeType = normalizeType(type);
    return appStore.presets.filter(preset => preset.type === safeType);
  }

  function presetSignature(type, unit, config, sound = appStore.future.sound, fontId = state.fontId, size = state.size) {
    const safeType = normalizeType(type);
    return JSON.stringify({
      type: safeType,
      unit: normalizeUnit(unit),
      config: normalizeTypeConfig(safeType, config),
      sound: sanitizeSoundSettings(sound),
      fontId: normalizeFontId(fontId),
      size: normalizeScaleValue(size),
    });
  }

  function matchingPresetForCurrentType(type = state.type) {
    const safeType = normalizeType(type);
    const target = presetSignature(safeType, state.unit, extractTypeConfig(safeType), appStore.future.sound, state.fontId, state.size);
    return presetsForType(safeType).find(
      preset => presetSignature(preset.type, preset.unit, preset.config, preset.sound, preset.fontId, preset.size) === target,
    ) || null;
  }

  function matchingPresetForCurrentSetup() {
    const safeType = normalizeType(state.type);
    const target = presetSignature(safeType, state.unit, extractTypeConfig(safeType), appStore.future.sound, state.fontId, state.size);
    return appStore.presets.find(
      preset => presetSignature(preset.type, preset.unit, preset.config, preset.sound, preset.fontId, preset.size) === target,
    ) || null;
  }

  function presetButtonLabel(type = state.type) {
    const presets = presetsForType(type);
    if (!presets.length) return "Save one";
    const match = matchingPresetForCurrentType(type);
    if (match) return match.name;
    return `${presets.length} saved`;
  }

  function nextPresetNameForType(type = state.type) {
    const safeType = normalizeType(type);
    const base = typeLabel(safeType);
    const existing = new Set(presetsForType(safeType).map(preset => preset.name.toLowerCase()));
    let index = presetsForType(safeType).length + 1;
    let candidate = `${base} ${String(index).padStart(2, "0")}`;
    while (existing.has(candidate.toLowerCase())) {
      index += 1;
      candidate = `${base} ${String(index).padStart(2, "0")}`;
    }
    return candidate;
  }

  function savePresetRecord({
    id = null,
    name = "",
    type = state.type,
    unit = state.unit,
    config = null,
    sound = null,
    fontId = state.fontId,
    size = state.size,
    createdAt = null,
  } = {}) {
    const safeType = normalizeType(type);
    const safeName = String(name || "").trim() || nextPresetNameForType(safeType);
    const safeUnit = normalizeUnit(unit);
    const safeConfig = normalizeTypeConfig(safeType, config || extractTypeConfig(safeType));
    const existingIndex = id
      ? appStore.presets.findIndex(preset => preset.id === id)
      : appStore.presets.findIndex(preset => preset.type === safeType && preset.name.toLowerCase() === safeName.toLowerCase());
    const existing = existingIndex >= 0 ? appStore.presets[existingIndex] : null;
    const safeSound = sanitizeSoundSettings(sound || existing?.sound || appStore.future.sound);
    const safeFontId = normalizeFontId(fontId || existing?.fontId || state.fontId);
    const safeSize = normalizeScaleValue(size ?? existing?.size ?? state.size);
    const nextPreset = {
      id: existing?.id || id || createId("preset"),
      name: safeName,
      type: safeType,
      unit: safeUnit,
      fontId: safeFontId,
      size: safeSize,
      createdAt: existing?.createdAt || createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      config: safeConfig,
      sound: safeSound,
    };
    if (existingIndex >= 0) appStore.presets.splice(existingIndex, 1);
    appStore.presets.unshift(nextPreset);
    appStore.presets = appStore.presets.slice(0, PRESET_LIMIT);
    persistStore();
    return nextPreset;
  }

  function quickSaveCurrentPreset() {
    const type = normalizeType(state.type);
    const config = extractTypeConfig(type);
    const duplicate = findPresetByComposition({
      type,
      unit: state.unit,
      config,
      sound: appStore.future.sound,
      fontId: state.fontId,
      size: state.size,
    });
    if (duplicate) {
      showPresetToast({
        kind: "error",
        title: "Already saved",
        detail: `${duplicate.name} · ${formatPresetVisualSummary(duplicate)}`,
      });
      return;
    }
    const nextPreset = savePresetRecord({
      name: nextPresetNameForType(type),
      type,
      unit: state.unit,
      config,
      sound: appStore.future.sound,
      fontId: state.fontId,
      size: state.size,
    });
    settingsUi.presetType = type;
    updateAllUI();
    renderSettingsUI();
    showPresetToast({
      kind: "saved",
      title: "Preset saved",
      detail: formatPresetVisualSummary(nextPreset),
    });
    logHistory("preset_saved", {
      type,
      summary: nextPreset.name,
      note: formatPresetSummary(nextPreset.type, nextPreset.config),
      snapshot: {
        type: nextPreset.type,
        unit: nextPreset.unit,
        config: nextPreset.config,
        sound: nextPreset.sound,
        fontId: nextPreset.fontId,
        size: nextPreset.size,
      },
    });
  }

  function buildHistorySnapshot(type = state.type) {
    const safeType = normalizeType(type);
    return {
      type: safeType,
      unit: normalizeUnit(state.unit),
      config: normalizeTypeConfig(safeType, extractTypeConfig(safeType)),
      sound: sanitizeSoundSettings(appStore.future.sound),
      fontId: normalizeFontId(state.fontId),
      size: normalizeScaleValue(state.size),
    };
  }

  function applyStoredSetup(snapshotLike) {
    const snapshot = sanitizeHistorySnapshot(snapshotLike, state.type);
    if (!snapshot) return;
    applyTypeConfig(snapshot.type, snapshot.config);
    setUnit(snapshot.unit);
    appStore.future.sound = sanitizeSoundSettings(snapshot.sound || appStore.future.sound);
    if (snapshot.fontId) setFont(snapshot.fontId);
    if (snapshot.size != null) setScale(snapshot.size);
    updateAllUI();
    resetToIdleState();
    persistStore();
  }

  function buildPresetColumns() {
    const presets = appStore.presets;
    return [{
      value: presets[0]?.id || "",
      items: presets.map(preset => ({
        value: preset.id,
        label: `${preset.name.slice(0, 22)}${preset.name.length > 22 ? "…" : ""} · ${formatPresetCompact(preset.type, preset.config)}${preset.type === "alarm" ? "" : ` · ${soundBadgeLabel(preset.sound)}`}`,
      })),
      render: item => item.label,
      parse: raw => String(raw),
    }];
  }

  function openPresetEditor(presetId) {
    const preset = appStore.presets.find(item => item.id === presetId);
    if (!preset) return;
    picker.returnToSettings = true;
    closeSettings();
    picker.presetId = preset.id;
    picker.presetType = preset.type;
    picker.presetUnit = preset.unit;
    picker.presetName = preset.name;
    picker.selectionFrame = 0;
    picker.activeColumn = 0;
    picker.manualInputs = [];
    picker.wheels = [];
    picker.alarmWeekdays = normalizeAlarmWeekdays(state.alarm?.weekdays);
    picker.alarmMessage = normalizeAlarmMessage(state.alarm?.message);
    picker.alarmIncludeRepeat = false;
    picker.alarmWeekdays = normalizeAlarmWeekdays(preset.config?.weekdays);
    picker.alarmMessage = normalizeAlarmMessage(preset.config?.message);
    picker.alarmIncludeRepeat = preset.type === "alarm";
    picker.alarmDraftConfig = preset.type === "alarm" ? normalizeTypeConfig("alarm", preset.config) : null;
    setPickerPreviewSnapshot("preset-config");
    els.pickerOverlay.hidden = false;
    els.pickerEditor.hidden = true;
    els.pickerColumns.hidden = false;
    els.pickerLabel.textContent = "Preset";
    els.pickerDesc.textContent = `${preset.name} · ${formatPresetSummary(preset.type, preset.config)}${preset.type === "alarm" ? "" : ` · ${soundBadgeLabel(preset.sound)}`}`;

    if (preset.type === "scenario") {
      picker.kind = "preset-scenario";
      picker.draftScenario = cloneScenario(preset.config.steps);
      renderScenarioEditor();
      return;
    }

    picker.kind = "preset-config";
    if (preset.type === "alarm") {
      picker.columns = [];
      picker.selection = [];
      els.pickerColumns.hidden = true;
      els.pickerColumns.innerHTML = "";
      renderAlarmTimeEditor(preset.config, { includeRepeat: true });
    } else {
      picker.columns = buildTimeColumns(preset.type, {
        unit: preset.unit,
        config: preset.config,
        includeRepeat: false,
      });
      picker.selection = picker.columns.map(column => column.value);
      renderPickerManualEditor(preset.type);
      if (isDesktopPickerMode()) {
        els.pickerColumns.hidden = true;
        els.pickerColumns.innerHTML = "";
      } else {
        renderPicker(picker.columns);
      }
    }
  }

  function duplicatePreset(presetId) {
    const preset = appStore.presets.find(item => item.id === presetId);
    if (!preset) return;
    const duplicate = findPresetByComposition({
      type: preset.type,
      unit: preset.unit,
      config: preset.config,
      sound: preset.sound,
      fontId: preset.fontId,
      size: preset.size,
    });
    if (duplicate) {
      showPresetToast({
        kind: "error",
        title: "Already saved",
        detail: `${duplicate.name} · ${formatPresetVisualSummary(duplicate)}`,
      });
      return;
    }
    const existing = new Set(appStore.presets.map(item => item.name.toLowerCase()));
    let candidate = `${preset.name} Copy`;
    let index = 2;
    while (existing.has(candidate.toLowerCase())) {
      candidate = `${preset.name} Copy ${index}`;
      index += 1;
    }
    const nextPreset = savePresetRecord({
      name: candidate,
      type: preset.type,
      unit: preset.unit,
      config: preset.config,
      sound: preset.sound,
      fontId: preset.fontId,
      size: preset.size,
    });
    settingsUi.presetType = preset.type;
    renderSettingsUI();
    updateAllUI();
    logHistory("preset_saved", {
      type: nextPreset.type,
      summary: nextPreset.name,
      note: formatPresetSummary(nextPreset.type, nextPreset.config),
      snapshot: {
        type: nextPreset.type,
        unit: nextPreset.unit,
        config: nextPreset.config,
        sound: nextPreset.sound,
        fontId: nextPreset.fontId,
        size: nextPreset.size,
      },
    });
  }

  function appendSettingsEmptyState(container, message) {
    const empty = document.createElement("div");
    empty.className = "settings-empty";
    empty.textContent = message;
    container.replaceChildren(empty);
  }

  function logHistory(event, { type = state.type, summary = "", note = "", snapshot = null } = {}) {
    appStore.history.unshift({
      id: createId("history"),
      event,
      type: normalizeType(type),
      timestamp: new Date().toISOString(),
      summary: String(summary || "").trim(),
      note: String(note || "").trim(),
      snapshot: sanitizeHistorySnapshot(snapshot || buildHistorySnapshot(type), type),
    });
    appStore.history = appStore.history.slice(0, HISTORY_LIMIT);
    persistStore();
    renderSettingsUI();
  }

  function shortTypeLabel(type) {
    switch (normalizeType(type)) {
      case "countdown":
        return "CD";
      case "countup":
        return "UP";
      case "clock":
        return "CLK";
      case "stopwatch":
        return "SW";
      case "pomodoro":
        return "POMO";
      case "loop":
        return "LOOP";
      case "interval":
        return "INT";
      case "tabata":
        return "TB";
      case "scenario":
        return "SCN";
      default:
        return "TYPE";
    }
  }

  function formatPresetCardDetail(preset) {
    const safe = sanitizePreset(preset);
    if (!safe) return "";
    return [
      formatPresetCompact(safe.type, safe.config),
      soundModeLabel(safe.sound),
    ].filter(Boolean).join(" · ");
  }

  function createSettingsListCard({ index = 1, badges = [], kicker = "", title = "", note = "" } = {}) {
    const card = document.createElement("article");
    card.className = "settings-item";
    card.dataset.mark = String(Math.max(1, Number(index) || 1));

    const main = document.createElement("div");
    main.className = "settings-item-main";

    const left = document.createElement("div");
    left.className = "settings-item-left";
    const kickerNode = document.createElement("span");
    kickerNode.className = "settings-kicker";
    kickerNode.textContent = kicker;
    const titleNode = document.createElement("strong");
    titleNode.textContent = title;
    left.append(kickerNode, titleNode);

    const right = document.createElement("div");
    right.className = "settings-item-right";
    const meta = document.createElement("div");
    meta.className = "settings-item-meta";
    badges.filter(Boolean).forEach(text => {
      const badge = document.createElement("span");
      badge.className = "settings-badge";
      badge.textContent = String(text);
      meta.appendChild(badge);
    });
    const noteNode = document.createElement("p");
    noteNode.className = "settings-item-note";
    noteNode.textContent = note;
    if (meta.childElementCount) right.append(meta);
    right.append(noteNode);

    main.append(left, right);

    const actions = document.createElement("div");
    actions.className = "settings-item-actions";

    card.append(main);
    return { card, actions };
  }

  function renderPresetList() {
    if (!els.settingsPresetList) return;
    const type = normalizeType(settingsUi.presetType || state.type);
    const presets = appStore.presets.filter(preset => preset.type === type);
    if (!presets.length) {
      appendSettingsEmptyState(els.settingsPresetList, "No presets yet. Save the current setup to build a quick library for this type.");
      return;
    }
    const fragment = document.createDocumentFragment();
    presets.forEach((preset, index) => {
      const { card, actions } = createSettingsListCard({
        index: index + 1,
        badges: [preset.unit === "clock" ? "H:M:S" : "SEC", sanitizeSoundSettings(preset.sound).enabled ? "♪" : "MUTE"],
        kicker: formatSettingsTimestamp(preset.updatedAt),
        title: preset.name,
        note: formatPresetCardDetail(preset),
      });
      const load = document.createElement("button");
      load.type = "button";
      load.className = "settings-mini";
      load.textContent = "Load";
      load.addEventListener("click", () => {
        applyStoredSetup({
          type: preset.type,
          unit: preset.unit,
          config: preset.config,
          sound: preset.sound,
          fontId: preset.fontId,
          size: preset.size,
        });
        settingsUi.presetType = preset.type;
        logHistory("preset_loaded", {
          type: preset.type,
          summary: preset.name,
          note: formatPresetSummary(preset.type, preset.config),
          snapshot: {
            type: preset.type,
            unit: preset.unit,
            config: preset.config,
            sound: preset.sound,
            fontId: preset.fontId,
            size: preset.size,
          },
        });
        closeSettings();
      });
      const rename = document.createElement("button");
      rename.type = "button";
      rename.className = "settings-mini is-primary";
      rename.textContent = "Rename";
      rename.addEventListener("click", () => {
        const nextName = window.prompt("Preset name", preset.name);
        if (nextName == null) return;
        const safeName = String(nextName).trim();
        if (!safeName) return;
        const conflict = appStore.presets.find(item =>
          item.id !== preset.id
          && item.type === preset.type
          && item.name.trim().toLowerCase() === safeName.toLowerCase(),
        );
        if (conflict) {
          showPresetToast({
            kind: "error",
            title: "Name in use",
            detail: `${conflict.name} already exists`,
          });
          return;
        }
        const nextPreset = savePresetRecord({
          id: preset.id,
          name: safeName,
          type: preset.type,
          unit: preset.unit,
          config: preset.config,
          sound: preset.sound,
          fontId: preset.fontId,
          size: preset.size,
          createdAt: preset.createdAt,
        });
        renderSettingsUI();
        logHistory("preset_saved", {
          type: nextPreset.type,
          summary: nextPreset.name,
          note: formatPresetSummary(nextPreset.type, nextPreset.config),
          snapshot: {
            type: nextPreset.type,
            unit: nextPreset.unit,
            config: nextPreset.config,
            sound: nextPreset.sound,
            fontId: nextPreset.fontId,
            size: nextPreset.size,
          },
        });
      });
      const edit = document.createElement("button");
      edit.type = "button";
      edit.className = "settings-mini";
      edit.textContent = "Edit";
      edit.addEventListener("click", () => openPresetEditor(preset.id));
      const copyButton = document.createElement("button");
      copyButton.type = "button";
      copyButton.className = "settings-mini";
      copyButton.textContent = "Copy";
      copyButton.addEventListener("click", () => duplicatePreset(preset.id));
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "settings-mini is-danger";
      remove.textContent = "Delete";
      remove.addEventListener("click", () => {
        const deletedSnapshot = {
          type: preset.type,
          unit: preset.unit,
          config: preset.config,
          sound: preset.sound,
          fontId: preset.fontId,
          size: preset.size,
        };
        appStore.presets = appStore.presets.filter(item => item.id !== preset.id);
        persistStore();
        renderSettingsUI();
        logHistory("preset_deleted", {
          type: preset.type,
          summary: preset.name,
          note: formatPresetSummary(preset.type, preset.config),
          snapshot: deletedSnapshot,
        });
      });
      actions.append(load, rename, edit, copyButton, remove);
      card.append(actions);
      fragment.appendChild(card);
    });
    els.settingsPresetList.replaceChildren(fragment);
  }

  function renderHistoryList() {
    if (!els.settingsHistoryList) return;
    if (!appStore.history.length) {
      appendSettingsEmptyState(els.settingsHistoryList, "Session history appears here with timestamps once you start using the timer.");
      return;
    }
    const labels = {
      started: "Start",
      paused: "Pause",
      resumed: "Resume",
      reset: "Reset",
      skipped: "Next",
      finished: "Done",
      preset_saved: "Saved",
      preset_loaded: "Loaded",
      preset_deleted: "Removed",
      history_loaded: "Restored",
      stopwatch_reset: "Reset",
    };
    const fragment = document.createDocumentFragment();
    appStore.history.forEach((entry, index) => {
      const { card, actions } = createSettingsListCard({
        index: index + 1,
        badges: [
          labels[entry.event] || entry.event.replace(/_/g, " "),
          shortTypeLabel(entry.type),
        ],
        kicker: formatSettingsTimestamp(entry.timestamp),
        title: entry.summary || labels[entry.event] || "Activity",
        note: entry.note || typeDesc(entry.type) || "Timer activity",
      });
      if (entry.snapshot) {
        const use = document.createElement("button");
        use.type = "button";
        use.className = "settings-mini";
        use.textContent = "Use";
        use.addEventListener("click", () => {
          applyStoredSetup(entry.snapshot);
          settingsUi.presetType = normalizeType(entry.snapshot?.type || entry.type);
          logHistory("history_loaded", {
            type: entry.snapshot?.type || entry.type,
            summary: entry.summary || `${typeLabel(entry.type)} restored`,
            note: entry.note || formatPresetSummary(entry.snapshot?.type || entry.type, entry.snapshot?.config),
            snapshot: entry.snapshot,
          });
          closeSettings();
        });
        actions.append(use);
        card.append(actions);
      }
      fragment.appendChild(card);
    });
    els.settingsHistoryList.replaceChildren(fragment);
  }

  function renderSettingsSoundControls() {
    const safe = sanitizeSoundSettings(appStore.future.sound);
    if (els.settingsSoundPreset) {
      if (els.settingsSoundPreset.options.length !== SOUND_OPTIONS.length) {
        els.settingsSoundPreset.innerHTML = SOUND_OPTIONS.map(option => `<option value="${option.id}">${option.label}</option>`).join("");
      }
      els.settingsSoundPreset.value = safe.preset;
    }
    if (els.settingsSoundVolume) {
      els.settingsSoundVolume.value = String(safe.volume);
      els.settingsSoundVolume.setAttribute("aria-valuenow", String(safe.volume));
    }
    if (els.settingsSoundVolumeValue) {
      els.settingsSoundVolumeValue.textContent = String(safe.volume);
    }
    if (els.settingsSoundToggleBtn) {
      els.settingsSoundToggleBtn.textContent = safe.enabled ? "Sound" : "Mute";
      els.settingsSoundToggleBtn.classList.toggle("is-primary", safe.enabled);
      els.settingsSoundToggleBtn.title = safe.enabled ? "Completion sound is enabled" : "Completion sound is muted";
    }
    if (els.settingsSoundPreviewBtn) {
      els.settingsSoundPreviewBtn.title = `Preview ${safe.preset} at volume ${safe.volume}`;
    }
    renderSettingsSoundTonePicker();
  }

  function renderSettingsClockControls() {
    const style = clockAmPmStyleOptionById(state.clock?.ampmStyle);
    if (els.settingsClockAmPmStyle) {
      if (els.settingsClockAmPmStyle.options.length !== CLOCK_AMPM_STYLE_OPTIONS.length) {
        els.settingsClockAmPmStyle.innerHTML = CLOCK_AMPM_STYLE_OPTIONS
          .map(option => `<option value="${option.id}">${option.label}</option>`)
          .join("");
      }
      els.settingsClockAmPmStyle.value = style.id;
    }
    renderSettingsClockAmPmPicker();
  }

  function closeSettingsSoundToneMenu() {
    if (!els.settingsSoundToneMenu || els.settingsSoundToneMenu.hidden) return;
    els.settingsSoundToneMenu.hidden = true;
    if (els.settingsSoundToneButton) {
      els.settingsSoundToneButton.setAttribute("aria-expanded", "false");
    }
  }

  function closeSettingsClockAmPmMenu() {
    if (!els.settingsClockAmPmMenu || els.settingsClockAmPmMenu.hidden) return;
    els.settingsClockAmPmMenu.hidden = true;
    if (els.settingsClockAmPmButton) {
      els.settingsClockAmPmButton.setAttribute("aria-expanded", "false");
    }
  }

  function renderSettingsSoundTonePicker() {
    if (!els.settingsSoundToneButton || !els.settingsSoundToneValue || !els.settingsSoundToneMenu) return;
    const safe = sanitizeSoundSettings(appStore.future.sound);
    els.settingsSoundToneValue.textContent = safe.preset;
    const fragment = document.createDocumentFragment();
    SOUND_OPTIONS.forEach(option => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "settings-type-option";
      button.dataset.value = option.id;
      button.setAttribute("role", "option");
      button.setAttribute("aria-selected", option.id === safe.preset ? "true" : "false");
      button.textContent = option.label;
      if (option.id === safe.preset) button.classList.add("is-active");
      button.addEventListener("click", () => {
        closeSettingsSoundToneMenu();
        if (els.settingsSoundPreset) {
          els.settingsSoundPreset.value = option.id;
          els.settingsSoundPreset.dispatchEvent(new Event("change", { bubbles: true }));
        }
      });
      fragment.appendChild(button);
    });
    els.settingsSoundToneMenu.replaceChildren(fragment);
  }

  function renderSettingsClockAmPmPicker() {
    if (!els.settingsClockAmPmButton || !els.settingsClockAmPmValue || !els.settingsClockAmPmMenu) return;
    const style = clockAmPmStyleOptionById(state.clock?.ampmStyle);
    els.settingsClockAmPmValue.textContent = style.label;
    const fragment = document.createDocumentFragment();
    CLOCK_AMPM_STYLE_OPTIONS.forEach(option => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "settings-type-option";
      button.dataset.value = option.id;
      button.setAttribute("role", "option");
      button.setAttribute("aria-selected", option.id === style.id ? "true" : "false");
      button.textContent = option.label;
      if (option.id === style.id) button.classList.add("is-active");
      button.addEventListener("click", () => {
        closeSettingsClockAmPmMenu();
        if (els.settingsClockAmPmStyle) {
          els.settingsClockAmPmStyle.value = option.id;
          els.settingsClockAmPmStyle.dispatchEvent(new Event("change", { bubbles: true }));
        }
      });
      fragment.appendChild(button);
    });
    els.settingsClockAmPmMenu.replaceChildren(fragment);
  }

  function closeSettingsPresetTypeMenu() {
    if (!els.settingsPresetTypeMenu || els.settingsPresetTypeMenu.hidden) return;
    els.settingsPresetTypeMenu.hidden = true;
    if (els.settingsPresetTypeButton) {
      els.settingsPresetTypeButton.setAttribute("aria-expanded", "false");
    }
  }

  function renderSettingsPresetTypePicker() {
    if (!els.settingsPresetTypeButton || !els.settingsPresetTypeValue || !els.settingsPresetTypeMenu) return;
    const active = normalizeType(settingsUi.presetType || state.type);
    els.settingsPresetTypeValue.textContent = typeLabel(active);
    const fragment = document.createDocumentFragment();
    TYPE_OPTIONS.forEach(option => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "settings-type-option";
      button.dataset.value = option.value;
      button.setAttribute("role", "option");
      button.setAttribute("aria-selected", option.value === active ? "true" : "false");
      button.textContent = option.label;
      if (option.value === active) button.classList.add("is-active");
      button.addEventListener("click", () => {
        closeSettingsPresetTypeMenu();
        if (els.settingsPresetType) {
          els.settingsPresetType.value = option.value;
          els.settingsPresetType.dispatchEvent(new Event("change", { bubbles: true }));
        } else {
          settingsUi.presetType = normalizeType(option.value);
          renderSettingsUI();
        }
      });
      fragment.appendChild(button);
    });
    els.settingsPresetTypeMenu.replaceChildren(fragment);
  }

  function toggleSettingsPresetTypeMenu(forceOpen = null) {
    if (!els.settingsPresetTypeMenu || !els.settingsPresetTypeButton) return;
    const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : els.settingsPresetTypeMenu.hidden;
    if (!shouldOpen) {
      closeSettingsPresetTypeMenu();
      return;
    }
    closeSettingsSoundToneMenu();
    closeSettingsClockAmPmMenu();
    renderSettingsPresetTypePicker();
    els.settingsPresetTypeMenu.hidden = false;
    els.settingsPresetTypeButton.setAttribute("aria-expanded", "true");
  }

  function toggleSettingsSoundToneMenu(forceOpen = null) {
    if (!els.settingsSoundToneMenu || !els.settingsSoundToneButton) return;
    const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : els.settingsSoundToneMenu.hidden;
    if (!shouldOpen) {
      closeSettingsSoundToneMenu();
      return;
    }
    closeSettingsPresetTypeMenu();
    closeSettingsClockAmPmMenu();
    renderSettingsSoundTonePicker();
    els.settingsSoundToneMenu.hidden = false;
    els.settingsSoundToneButton.setAttribute("aria-expanded", "true");
  }

  function toggleSettingsClockAmPmMenu(forceOpen = null) {
    if (!els.settingsClockAmPmMenu || !els.settingsClockAmPmButton) return;
    const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : els.settingsClockAmPmMenu.hidden;
    if (!shouldOpen) {
      closeSettingsClockAmPmMenu();
      return;
    }
    closeSettingsPresetTypeMenu();
    closeSettingsSoundToneMenu();
    renderSettingsClockAmPmPicker();
    els.settingsClockAmPmMenu.hidden = false;
    els.settingsClockAmPmButton.setAttribute("aria-expanded", "true");
  }

  function renderSettingsUI() {
    if (!els.settingsOverlay) return;
    if (els.settingsPresetType && els.settingsPresetType.options.length !== TYPE_OPTIONS.length) {
      els.settingsPresetType.innerHTML = TYPE_OPTIONS.map(option => `<option value="${option.value}">${option.label}</option>`).join("");
    }
    if (els.settingsPresetType) {
      els.settingsPresetType.value = normalizeType(settingsUi.presetType || state.type);
    }
    renderSettingsPresetTypePicker();
    if (els.settingsMeta) {
      els.settingsMeta.textContent = `${appStore.presets.length} presets · ${appStore.history.length} log entries · sound controls are live.`;
    }
    if (els.settingsPresetMeta) {
      const count = appStore.presets.filter(preset => preset.type === normalizeType(settingsUi.presetType || state.type)).length;
      els.settingsPresetMeta.textContent = count
        ? `${count} presets for ${typeLabel(settingsUi.presetType || state.type)}`
        : `No presets for ${typeLabel(settingsUi.presetType || state.type)}`;
    }
    renderPresetList();
    renderHistoryList();
    renderSettingsSoundControls();
    renderSettingsClockControls();
  }

  function openSettings({ preserveType = false } = {}) {
    if (!els.settingsOverlay) return;
    closeSettingsPresetTypeMenu();
    closeSettingsSoundToneMenu();
    closeSettingsClockAmPmMenu();
    if (!preserveType) settingsUi.presetType = state.type;
    const activePresetType = normalizeType(settingsUi.presetType || state.type);
    if (els.settingsPresetName) {
      els.settingsPresetName.value = "";
      els.settingsPresetName.placeholder = `${typeLabel(activePresetType)} preset`;
    }
    renderSettingsUI();
    document.body.classList.add("has-settings-dialog");
    els.settingsOverlay.hidden = false;
  }

  function closeSettings() {
    if (!els.settingsOverlay) return;
    closeSettingsPresetTypeMenu();
    closeSettingsSoundToneMenu();
    closeSettingsClockAmPmMenu();
    els.settingsOverlay.hidden = true;
    document.body.classList.remove("has-settings-dialog");
  }

  function saveCurrentPreset() {
    const type = normalizeType(els.settingsPresetType?.value || settingsUi.presetType || state.type);
    const name = String(els.settingsPresetName?.value || "").trim() || `${typeLabel(type)} ${formatSettingsTimestamp(new Date().toISOString())}`;
    const config = extractTypeConfig(type);
    const duplicate = findPresetByComposition({
      type,
      unit: state.unit,
      config,
      sound: appStore.future.sound,
      fontId: state.fontId,
      size: state.size,
    });
    if (duplicate) {
      showPresetToast({
        kind: "error",
        title: "Already saved",
        detail: `${duplicate.name} · ${formatPresetVisualSummary(duplicate)}`,
      });
      return;
    }
    const nextPreset = savePresetRecord({
      name,
      type,
      unit: state.unit,
      config,
      sound: appStore.future.sound,
      fontId: state.fontId,
      size: state.size,
    });
    if (els.settingsPresetName) els.settingsPresetName.value = "";
    updateAllUI();
    renderSettingsUI();
    showPresetToast({
      kind: "saved",
      title: "Preset saved",
      detail: formatPresetVisualSummary(nextPreset),
    });
    logHistory("preset_saved", {
      type,
      summary: nextPreset.name,
      note: formatPresetSummary(nextPreset.type, nextPreset.config),
      snapshot: {
        type: nextPreset.type,
        unit: nextPreset.unit,
        config: nextPreset.config,
        sound: nextPreset.sound,
        fontId: nextPreset.fontId,
        size: nextPreset.size,
      },
    });
  }

  function updateSoundSetting(patch = {}, { preview = false, previewWhileMuted = false, rerenderSettings = false, forcePreview = false } = {}) {
    appStore.future.sound = sanitizeSoundSettings({
      ...appStore.future.sound,
      ...patch,
    });
    setSoundText();
    setPresetText();
    persistStore();
    if (rerenderSettings) {
      renderSettingsUI();
    } else {
      renderSettingsSoundControls();
    }
    if (preview) {
      const source = previewWhileMuted ? { ...appStore.future.sound, enabled: true } : appStore.future.sound;
      queueSoundPreview(source, { force: forcePreview });
    }
  }

  function phasePalette(role = "") {
    if (role === "break" || role === "rest" || role === "cooldown" || role === "longBreak") {
      return [
        [106, 231, 255],
        [150, 255, 170],
        [255, 255, 255],
        [255, 211, 106],
      ];
    }
    if (role === "warmup") {
      return [
        [255, 211, 106],
        [255, 124, 194],
        [255, 255, 255],
        [255, 236, 170],
      ];
    }
    return [
      [255, 124, 194],
      [106, 231, 255],
      [255, 211, 106],
      [150, 255, 170],
      [255, 255, 255],
    ];
  }

  function setStatus(label) {
    els.statusPill.textContent = label;
  }

  function setPreview(label) {
    els.previewPill.textContent = label;
  }

  function setDurationPill(label, detail = "") {
    els.durationPill.textContent = label;
    els.durationPill.title = detail ? `${label} · ${detail}` : label;
  }

  function setSoundText() {
    const safe = sanitizeSoundSettings(appStore.future.sound);
    if (els.soundPill) {
      els.soundPill.textContent = soundModeLabel(safe);
      els.soundPill.title = safe.enabled
        ? `Completion sound on · ${safe.preset} · volume ${safe.volume}`
        : `Completion sound muted · ${safe.preset} · volume ${safe.volume}`;
      els.soundPill.setAttribute("aria-label", safe.enabled ? `Sound on ${safe.preset} volume ${safe.volume}` : `Sound muted ${safe.preset} volume ${safe.volume}`);
    }
    if (els.railSoundBtn) {
      els.railSoundBtn.title = safe.enabled ? `Sound on · ${safe.preset} · ${safe.volume}` : `Sound muted · ${safe.preset} · ${safe.volume}`;
    }
  }

  function setModeGuide() {
    const guide = typeGuide();
    if (!els.sequenceGuide) return;
    els.sequenceGuide.hidden = !guide;
    if (!guide) return;
    els.sequenceGuide.textContent = guide;
  }

  function setTypeText() {
    const label = typeLabel(state.type);
    els.typeValue.textContent = label;
    els.dockTypeValue.textContent = label;
    els.typeButton.title = `${label} · ${typeDesc(state.type)}`.trim();
    els.dockTypeBtn.title = `${label} · ${typeDesc(state.type)}`.trim();
  }

  function setTimeText() {
    const summary = timeSummaryForType();
    const total = totalSummaryForType();
    const isClock = state.type === "clock";
    const isAlarm = state.type === "alarm";
    if (isClock) {
      const citySet = clockCitySetById(state.clock?.citySet);
      if (els.timeLabel) els.timeLabel.textContent = "Cities";
      els.timeValue.textContent = citySet.label;
      els.dockTimeValue.textContent = citySet.label;
      els.timeButton.title = `World city set · ${citySet.label}`;
      els.dockTimeBtn.title = `World city set · ${citySet.label}`;
      els.timeButton.disabled = false;
      els.dockTimeBtn.disabled = false;
      return;
    }
    if (isAlarm) {
      if (els.timeLabel) els.timeLabel.textContent = "Alarm";
      const time = formatAlarmPrimary(state.alarm);
      els.timeValue.textContent = time;
      els.dockTimeValue.textContent = time;
      const count = alarmEntries(state).length;
      els.timeButton.title = `${time} · ${alarmDurationSummary(state.alarm)}${count > 1 ? ` · ${count} alarms` : ""}`;
      els.dockTimeBtn.title = `${time} · ${alarmDurationSummary(state.alarm)}${count > 1 ? ` · ${count} alarms` : ""}`;
      els.timeButton.disabled = false;
      els.dockTimeBtn.disabled = false;
      return;
    }
    if (els.timeLabel) els.timeLabel.textContent = "Time";
    els.timeValue.textContent = summary;
    els.dockTimeValue.textContent = summary;
    els.timeButton.title = `${summary} · ${total}`;
    els.dockTimeBtn.title = `${summary} · ${total}`;
    els.timeButton.disabled = false;
    els.dockTimeBtn.disabled = false;
  }

  function setPresetText() {
    const label = presetButtonLabel();
    const count = presetsForType(state.type).length;
    const detail = count ? `${count} saved for ${typeLabel(state.type)}` : `No saved presets for ${typeLabel(state.type)}`;
    if (els.presetValue) els.presetValue.textContent = label;
    if (els.dockPresetValue) els.dockPresetValue.textContent = label;
    if (els.presetButton) els.presetButton.title = detail;
    if (els.dockPresetBtn) els.dockPresetBtn.title = detail;
  }

  function setFontText() {
    if (els.fontValue) els.fontValue.textContent = state.fontId;
    if (els.fontButton) els.fontButton.title = state.fontId;
    els.dockFontValue.textContent = state.fontId;
    els.dockFontBtn.title = state.fontId;
    document.documentElement.style.setProperty("--timer-font-family", fontStack(state.fontId));
  }

  function setPanelText() {
    const label = state.detailPanelVisible ? "HIDE" : "SHOW";
    const panelName = state.type === "alarm" ? "alarm board" : "progress panel";
    if (els.panelValue) els.panelValue.textContent = label;
    if (els.dockPanelValue) els.dockPanelValue.textContent = label;
    if (els.panelButton) els.panelButton.title = `${panelName} ${label.toLowerCase()}`;
    if (els.dockPanelBtn) els.dockPanelBtn.title = `${panelName} ${label.toLowerCase()}`;
    if (els.sequenceVisibilityLabel) els.sequenceVisibilityLabel.textContent = label;
    if (els.sequenceVisibilityBtn) els.sequenceVisibilityBtn.setAttribute("aria-label", `${label.toLowerCase()} progress panel`);
    if (els.sequenceCollapsedBtn) els.sequenceCollapsedBtn.setAttribute("aria-label", "Show progress panel");
    syncMinimalUI();
  }

  function setClockControlsState() {
    const isClock = state.type === "clock";
    if (els.clockControls) {
      els.clockControls.hidden = !isClock;
    }
    if (els.clockHourSegment) {
      const hourCycle = clockHourOptionById(state.clock?.hourCycle).id;
      [...els.clockHourSegment.querySelectorAll("button[data-clock-hour]")].forEach(button => {
        button.classList.toggle("is-active", Number(button.dataset.clockHour || 24) === hourCycle);
      });
    }
    if (els.clockPrecisionSegment) {
      const precision = clockPrecisionOptionById(state.clock?.precision).id;
      [...els.clockPrecisionSegment.querySelectorAll("button[data-clock-precision]")].forEach(button => {
        button.classList.toggle("is-active", (button.dataset.clockPrecision || "seconds") === precision);
      });
    }
    if (els.clockWorldSegment) {
      const showWorld = state.clock?.showWorld !== false;
      [...els.clockWorldSegment.querySelectorAll("button[data-clock-world]")].forEach(button => {
        button.classList.toggle("is-active", (button.dataset.clockWorld || "show") === (showWorld ? "show" : "hide"));
      });
    }
  }

  function applyScale() {
    const scale = clamp(state.size, 10, 200) / 100;
    const size = clamp(state.size, 10, 200);
    const splashScale = clamp(0.5 + scale * 0.5, 0.55, 1.5);
    if (els.sizeValue) els.sizeValue.textContent = formatScaleLabel(size);
    if (els.sizeButton) els.sizeButton.title = `Scale ${formatScaleLabel(size)}`;
    els.dockSizeValue.textContent = formatScaleLabel(size);
    els.dockSizeBtn.title = `Scale ${formatScaleLabel(size)}`;
    els.timerText.style.transform = `scale(${scale})`;
    document.documentElement.style.setProperty("--phase-splash-scale", String(splashScale));
    scheduleClockMeridiemPosition();
    scheduleAlarmDisplayTogglePosition();
  }

  function setUnitText() {
    const isClock = state.type === "clock";
    const isAlarm = state.type === "alarm";
    const dockLabel = els.dockUnitBtn?.querySelector("strong");
    if (dockLabel) dockLabel.textContent = isClock ? "ZONE" : isAlarm ? "REPEAT" : "UNIT";
    if (els.unitLabel) els.unitLabel.textContent = isClock ? "Zone" : isAlarm ? "Repeat" : "Unit";
    if (els.clockAnimButton) els.clockAnimButton.hidden = !(isClock || isAlarm);
    if (els.unitSegment) els.unitSegment.hidden = isClock || isAlarm;
    if (isClock) {
      const zone = clockZoneOptionById(state.clock?.zoneId);
      const compact = clockZoneCompactLabel(zone);
      const verbose = clockZoneVerboseLabel(zone);
      if (els.clockAnimValue) els.clockAnimValue.textContent = compact;
      if (els.clockAnimButton) els.clockAnimButton.title = `Base timezone · ${verbose}`;
      els.dockUnitValue.textContent = compact;
      els.dockUnitBtn.title = `Base timezone · ${verbose}`;
      return;
    }
    if (isAlarm) {
      const repeat = alarmRepeatLabel(state.alarm);
      if (els.clockAnimValue) els.clockAnimValue.textContent = repeat;
      if (els.clockAnimButton) els.clockAnimButton.title = `Repeat cadence · ${repeat}`;
      els.dockUnitValue.textContent = repeat;
      els.dockUnitBtn.title = `Repeat cadence · ${repeat}`;
      return;
    }
    [...els.unitSegment.querySelectorAll("button[data-unit]")].forEach(button => {
      button.classList.toggle("is-active", button.dataset.unit === state.unit);
    });
    els.dockUnitValue.textContent = state.unit === "seconds" ? "SECONDS" : "H:M:S";
    els.dockUnitBtn.title = state.unit === "seconds" ? "SECONDS" : "H:M:S";
  }

  function setClockMeridiem(meridiem = "") {
    if (!els.clockMeridiem) return;
    const supportsMeridiem = state.type === "clock" || alarmUsesClockDisplay();
    const is12h = clockHourOptionById(state.clock?.hourCycle).id === 12;
    const text = String(meridiem || "").trim().toUpperCase();
    if (!supportsMeridiem || !is12h || !text) {
      els.clockMeridiem.hidden = true;
      els.clockMeridiem.textContent = "";
      els.clockMeridiem.replaceChildren();
      els.clockMeridiem.className = "clock-meridiem";
      els.clockMeridiem.style.left = "";
      els.clockMeridiem.style.top = "";
      els.clockMeridiem.style.fontSize = "";
      els.clockMeridiem.style.removeProperty("--meridiem-badge-size");
      return;
    }
    const styleId = clockAmPmStyleOptionById(state.clock?.ampmStyle).id;
    const isVerticalBadge = styleId === "before-badge" || styleId === "after-badge";
    els.clockMeridiem.hidden = false;
    els.clockMeridiem.className = `clock-meridiem is-${styleId}`;
    els.clockMeridiem.replaceChildren();
    if (isVerticalBadge) {
      [...text].forEach(letter => {
        const glyph = document.createElement("span");
        glyph.className = "clock-meridiem-glyph";
        glyph.textContent = letter;
        els.clockMeridiem.appendChild(glyph);
      });
    } else {
      els.clockMeridiem.textContent = text;
    }
    scheduleClockMeridiemPosition();
  }

  function scheduleClockMeridiemPosition() {
    if (!els.clockMeridiem || els.clockMeridiem.hidden) return;
    if (clockMeridiemFrame) cancelAnimationFrame(clockMeridiemFrame);
    clockMeridiemFrame = requestAnimationFrame(() => {
      clockMeridiemFrame = 0;
      positionClockMeridiem();
    });
  }

  function scheduleTimerOverlayLayoutSync() {
    scheduleClockMeridiemPosition();
    scheduleAlarmDisplayTogglePosition();
    requestAnimationFrame(() => {
      scheduleClockMeridiemPosition();
      scheduleAlarmDisplayTogglePosition();
      requestAnimationFrame(() => {
        scheduleClockMeridiemPosition();
        scheduleAlarmDisplayTogglePosition();
      });
    });
  }

  function scheduleClockMeridiemLayoutSync() {
    if (!els.clockMeridiem || els.clockMeridiem.hidden) return;
    scheduleTimerOverlayLayoutSync();
    if (clockMeridiemSyncTimer) window.clearTimeout(clockMeridiemSyncTimer);
    clockMeridiemSyncTimer = window.setTimeout(() => {
      clockMeridiemSyncTimer = 0;
      scheduleTimerOverlayLayoutSync();
    }, 300);
  }

  function initClockMeridiemObservers() {
    if (clockMeridiemObserversReady) return;
    clockMeridiemObserversReady = true;
    if (typeof ResizeObserver === "function") {
      clockMeridiemResizeObserver = new ResizeObserver(() => {
        scheduleClockMeridiemLayoutSync();
      });
      if (els.timerText) clockMeridiemResizeObserver.observe(els.timerText);
      if (timerFrame) clockMeridiemResizeObserver.observe(timerFrame);
      if (els.clockMeridiem) clockMeridiemResizeObserver.observe(els.clockMeridiem);
      if (els.alarmDisplayToggle) clockMeridiemResizeObserver.observe(els.alarmDisplayToggle);
    }
    if (document.fonts) {
      document.fonts.ready.then(() => {
        scheduleClockMeridiemLayoutSync();
      }).catch(() => {});
      if (typeof document.fonts.addEventListener === "function") {
        document.fonts.addEventListener("loadingdone", () => {
          scheduleClockMeridiemLayoutSync();
        });
      }
    }
  }

  function clockMeridiemAnchorRect() {
    if (!els.timerText) return null;
    const chars = [...els.timerText.querySelectorAll(".timer-char")];
    if (!chars.length) return null;
    const dotIndex = chars.findIndex(node => String(node.textContent || "").includes("."));
    const anchorNodes = dotIndex > 0 ? chars.slice(0, dotIndex) : chars;
    if (!anchorNodes.length) return null;
    let left = Infinity;
    let top = Infinity;
    let right = -Infinity;
    let bottom = -Infinity;
    anchorNodes.forEach(node => {
      const rect = node.getBoundingClientRect();
      left = Math.min(left, rect.left);
      top = Math.min(top, rect.top);
      right = Math.max(right, rect.right);
      bottom = Math.max(bottom, rect.bottom);
    });
    if (!Number.isFinite(left) || !Number.isFinite(right) || right <= left || bottom <= top) return null;
    return {
      left,
      top,
      right,
      bottom,
      width: right - left,
      height: bottom - top,
    };
  }

  function clockMeridiemLeadingCharRect() {
    if (!els.timerText) return null;
    const chars = [...els.timerText.querySelectorAll(".timer-char")];
    if (!chars.length) return null;
    const leading = chars.find(node => {
      if (!(node instanceof HTMLElement)) return false;
      if (node.classList.contains("sep") || node.classList.contains("dot")) return false;
      const value = String(node.textContent || "").trim();
      return value !== ":" && value !== "." && value.length > 0;
    }) || chars[0];
    const rect = leading.getBoundingClientRect();
    if (!rect || rect.width < 1 || rect.height < 1) return null;
    return {
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      width: rect.width,
      height: rect.height,
    };
  }

  function positionClockMeridiem() {
    if (!els.clockMeridiem || els.clockMeridiem.hidden || !timerFrame || !els.timerText) return;
    const frameRect = timerFrame.getBoundingClientRect();
    const textRect = clockMeridiemAnchorRect() || els.timerText.getBoundingClientRect();
    const leadingRect = clockMeridiemLeadingCharRect() || textRect;
    if (frameRect.width < 2 || textRect.width < 2 || textRect.height < 2) return;
    const styleId = clockAmPmStyleOptionById(state.clock?.ampmStyle).id;
    const isMobile = isMobileUiMode();
    const gap = Math.max(12, textRect.height * 0.14);
    const badgeGap = Math.max(18, textRect.height * 0.2);
    const inlineSize = Math.max(12, textRect.height * 0.16);
    const badgeSize = Math.max(11, textRect.height * 0.12);
    const slantedSize = Math.max(28, textRect.height * 0.34);
    const isBefore = styleId.startsWith("before");
    const isBadge = styleId.includes("badge");
    let fontSize = styleId === "slanted" ? slantedSize : (isBadge ? badgeSize : inlineSize);

    els.clockMeridiem.style.fontSize = `${fontSize}px`;
    els.clockMeridiem.style.setProperty("--meridiem-badge-size", `${Math.round(fontSize * 1.54)}px`);
    const framePadding = isMobile ? 4 : 8;
    const maxWidth = Math.max(24, frameRect.width - framePadding * 2);
    const maxHeight = Math.max(16, frameRect.height - framePadding * 2);
    let width = Math.max(24, els.clockMeridiem.offsetWidth || 32);
    let height = Math.max(16, els.clockMeridiem.offsetHeight || 20);
    if (width > maxWidth || height > maxHeight) {
      const fitScale = Math.min(maxWidth / width, maxHeight / height, 1);
      if (fitScale < 1) {
        fontSize = Math.max(9, fontSize * fitScale);
        els.clockMeridiem.style.fontSize = `${fontSize}px`;
        els.clockMeridiem.style.setProperty("--meridiem-badge-size", `${Math.round(fontSize * 1.54)}px`);
        width = Math.max(24, els.clockMeridiem.offsetWidth || 32);
        height = Math.max(16, els.clockMeridiem.offsetHeight || 20);
      }
    }
    let left = textRect.right - frameRect.left + gap + width * 0.5;
    let top = textRect.top - frameRect.top + textRect.height * 0.5;

    if (styleId === "slanted") {
      left = textRect.left - frameRect.left + width * 0.32;
      top = textRect.top - frameRect.top + Math.min(textRect.height * 0.2, 24);
    } else if (isBadge) {
      left = isBefore
        ? textRect.left - frameRect.left - badgeGap - width * 0.5
        : textRect.right - frameRect.left + badgeGap + width * 0.5;
    } else if (isBefore) {
      left = textRect.left - frameRect.left - gap - width * 0.5;
    }

    if (isMobile) {
      const mobileTopLift = Math.max(4, leadingRect.height * 0.09);
      const mobileShift = Math.max(4, leadingRect.width * 0.18);
      left = leadingRect.left - frameRect.left + width * 0.5;
      top = leadingRect.top - frameRect.top - mobileTopLift;
      if (styleId.startsWith("after")) {
        left += mobileShift + leadingRect.width * 0.42;
      } else if (styleId.startsWith("before")) {
        left -= leadingRect.width * 0.12;
      }
      if (styleId === "slanted") {
        left = leadingRect.left - frameRect.left + width * 0.58;
        top = leadingRect.top - frameRect.top + Math.min(leadingRect.height * 0.08, 8);
      }
    }

    left = clamp(left, width * 0.5 + framePadding, frameRect.width - width * 0.5 - framePadding);
    top = clamp(top, height * 0.5 + framePadding, frameRect.height - height * 0.5 - framePadding);

    els.clockMeridiem.style.left = `${left}px`;
    els.clockMeridiem.style.top = `${top}px`;
  }

  function positionAlarmDisplayToggle() {
    if (!els.alarmDisplayToggle || els.alarmDisplayToggle.hidden || !timerFrame || !els.timerText) return;
    const frameRect = timerFrame.getBoundingClientRect();
    const textRect = els.timerText.getBoundingClientRect();
    const leadingRect = clockMeridiemLeadingCharRect() || textRect;
    if (frameRect.width < 2 || textRect.width < 2 || textRect.height < 2) return;
    const isMobile = isMobileUiMode();
    const framePadding = isMobile ? 4 : 8;
    const width = Math.max(44, els.alarmDisplayToggle.offsetWidth || 60);
    const height = Math.max(42, els.alarmDisplayToggle.offsetHeight || 50);
    const gapX = Math.max(10, textRect.height * 0.1);
    const gapY = Math.max(8, textRect.height * 0.12);
    let left = textRect.right - frameRect.left + gapX + width * 0.5;
    let top = textRect.top - frameRect.top - gapY - height * 0.5;

    if (isMobile) {
      const mobileGapX = Math.max(10, textRect.height * 0.11);
      const mobileTopLift = Math.max(10, leadingRect.height * 0.14);
      left = textRect.right - frameRect.left + mobileGapX + width * 0.5;
      top = leadingRect.top - frameRect.top - mobileTopLift - height * 0.5;
    }

    const minLeft = width * 0.5 + framePadding;
    const maxLeft = frameRect.width - width * 0.5 - framePadding;
    const minTop = height * 0.5 + framePadding;
    const maxTop = frameRect.height - height * 0.5 - framePadding;
    left = minLeft > maxLeft ? frameRect.width * 0.5 : clamp(left, minLeft, maxLeft);
    top = minTop > maxTop ? frameRect.height * 0.5 : clamp(top, minTop, maxTop);

    const localTextRect = {
      left: textRect.left - frameRect.left,
      top: textRect.top - frameRect.top,
      right: textRect.right - frameRect.left,
      bottom: textRect.bottom - frameRect.top,
      width: textRect.width,
      height: textRect.height,
    };
    const localToggleRect = () => ({
      left: left - width * 0.5,
      top: top - height * 0.5,
      right: left + width * 0.5,
      bottom: top + height * 0.5,
      width,
      height,
    });

    const overlapPadding = isMobile ? 5 : 4;
    if (rectsIntersect(localToggleRect(), localTextRect, overlapPadding)) {
      const aboveGap = Math.max(gapY, localTextRect.height * (isMobile ? 0.28 : 0.22));
      const preferredTop = localTextRect.top - aboveGap - height * 0.5;
      const relaxedMinTop = Math.min(minTop, -height * 0.45);
      top = minTop > maxTop ? frameRect.height * 0.5 : clamp(preferredTop, relaxedMinTop, maxTop);
    }

    if (rectsIntersect(localToggleRect(), localTextRect, overlapPadding)) {
      const emergencyTop = localTextRect.top - height * (isMobile ? 1.14 : 1.04);
      const relaxedMinTop = -height * 0.58;
      top = clamp(emergencyTop, relaxedMinTop, maxTop);
    }

    els.alarmDisplayToggle.style.left = `${left}px`;
    els.alarmDisplayToggle.style.top = `${top}px`;
  }

  function scheduleAlarmDisplayTogglePosition() {
    if (!els.alarmDisplayToggle || els.alarmDisplayToggle.hidden) return;
    if (alarmDisplayToggleFrame) cancelAnimationFrame(alarmDisplayToggleFrame);
    alarmDisplayToggleFrame = requestAnimationFrame(() => {
      alarmDisplayToggleFrame = 0;
      positionAlarmDisplayToggle();
    });
  }

  function renderAlarmDisplayToggle() {
    if (!els.alarmDisplayToggle || !els.alarmDisplayToggleBtn || !els.alarmDisplayToggleLabel) return;
    const visible = state.type === "alarm";
    els.alarmDisplayToggle.hidden = !visible;
    if (!visible) return;
    const clockMode = alarmUsesClockDisplay();
    els.alarmDisplayToggleLabel.textContent = clockMode ? "COUNT" : "CLOCK";
    els.alarmDisplayToggleBtn.title = clockMode ? "Switch to countdown" : "Switch to current time";
    els.alarmDisplayToggleBtn.setAttribute("aria-label", clockMode ? "Switch to countdown" : "Switch to current time");
    scheduleAlarmDisplayTogglePosition();
  }

  function renderAlarmClockFace(now = new Date()) {
    const precision = clockPrecisionOptionById(state.clock?.precision).id;
    const display = clockDisplayPartsInZone(now, localTimeZone(), {
      hourCycle: clockHourOptionById(state.clock?.hourCycle).id,
      precision: precision === "ms" ? "seconds" : precision,
    });
    renderDigits(display.time);
    setClockMeridiem(display.meridiem);
  }

  function stopAlarmDisplayTicker() {
    if (alarmDisplayTicker) clearTimeout(alarmDisplayTicker);
    alarmDisplayTicker = 0;
  }

  function ensureAlarmDisplayTicker() {
    if (state.type !== "alarm" || !alarmUsesClockDisplay() || runtime.phase === "running" || runtime.phase === "ended") {
      stopAlarmDisplayTicker();
      return;
    }
    stopAlarmDisplayTicker();
    alarmDisplayTicker = window.setTimeout(() => {
      if (state.type !== "alarm" || !alarmUsesClockDisplay() || runtime.phase === "running" || runtime.phase === "ended") {
        stopAlarmDisplayTicker();
        return;
      }
      renderAlarmClockFace(new Date());
      ensureAlarmDisplayTicker();
    }, nextClockDelay("minute"));
  }

  function isTimerSeparator(ch) {
    return ch === ":" || ch === ".";
  }

  function createTimerChar(ch) {
    const span = document.createElement("span");
    const isSep = isTimerSeparator(ch);
    span.className = isSep
      ? `timer-char sep${ch === "." ? " dot" : ""}`
      : "timer-char";
    return span;
  }

  function resetClockRenderState() {
    clockRenderedText = "";
    clockRenderedFormatKey = "";
    clockAnimationAt = 0;
    if (clockMeridiemFrame) {
      cancelAnimationFrame(clockMeridiemFrame);
      clockMeridiemFrame = 0;
    }
  }

  function prefersReducedMotion() {
    return typeof window.matchMedia === "function"
      && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function clockMotionDuration(animationId) {
    switch (animationId) {
      case "pulse":
      case "snap":
        return 420;
      case "bloom":
        return 500;
      default:
        return 520;
    }
  }

  function clockMotionKeyframes(animationId, role) {
    const oldRole = role === "old";
    switch (animationId) {
      case "fade":
        return oldRole
          ? [
              { opacity: 1, transform: "translate3d(0,0,0) scale(1)", filter: "blur(0px)" },
              { opacity: 0, transform: "translate3d(0,-10%,0) scale(.986)", filter: "blur(5px)" },
            ]
          : [
              { opacity: 0, transform: "translate3d(0,10%,0) scale(1.014)", filter: "blur(5px)" },
              { opacity: 1, transform: "translate3d(0,0,0) scale(1)", filter: "blur(0px)" },
            ];
      case "pulse":
        return oldRole
          ? [
              { opacity: 1, transform: "translate3d(0,0,0) scale(1)" },
              { opacity: 0, transform: "translate3d(0,-24%,0) scale(.978)" },
            ]
          : [
              { opacity: 0, transform: "translate3d(0,24%,0) scale(1.024)" },
              { opacity: 1, transform: "translate3d(0,-4%,0) scale(1.004)", offset: 0.72 },
              { opacity: 1, transform: "translate3d(0,0,0) scale(1)" },
            ];
      case "rise":
        return oldRole
          ? [
              { opacity: 1, transform: "translate3d(0,0,0)", filter: "blur(0px)" },
              { opacity: 0, transform: "translate3d(0,18%,0)", filter: "blur(4px)" },
            ]
          : [
              { opacity: 0, transform: "translate3d(0,-26%,0)", filter: "blur(5px)" },
              { opacity: 1, transform: "translate3d(0,3%,0)", offset: 0.68 },
              { opacity: 1, transform: "translate3d(0,0,0)", filter: "blur(0px)" },
            ];
      case "slide":
        return oldRole
          ? [
              { opacity: 1, transform: "translate3d(0,0,0)" },
              { opacity: 0, transform: "translate3d(-26%,0,0)" },
            ]
          : [
              { opacity: 0, transform: "translate3d(26%,0,0)" },
              { opacity: 1, transform: "translate3d(0,0,0)" },
            ];
      case "glow":
        return oldRole
          ? [
              { opacity: 1, transform: "translate3d(0,0,0) scale(1)", filter: "blur(0px)" },
              { opacity: 0, transform: "translate3d(-12%,0,0) scale(.968)", filter: "blur(6px)" },
            ]
          : [
              { opacity: 0, transform: "translate3d(12%,0,0) scale(1.032)", filter: "blur(7px)" },
              { opacity: 1, transform: "translate3d(0,0,0) scale(1)", filter: "blur(0px)" },
            ];
      case "bloom":
        return oldRole
          ? [
              { opacity: 1, transform: "perspective(420px) rotateX(0deg) scaleY(1)", transformOrigin: "50% 0%" },
              { opacity: 0, transform: "perspective(420px) rotateX(82deg) scaleY(.28)", transformOrigin: "50% 0%" },
            ]
          : [
              { opacity: 0, transform: "perspective(420px) rotateX(-82deg) scaleY(.28)", transformOrigin: "50% 100%" },
              { opacity: 1, transform: "perspective(420px) rotateX(0deg) scaleY(1)", transformOrigin: "50% 100%" },
            ];
      case "wave":
        return oldRole
          ? [
              { opacity: 1, transform: "translate3d(0,0,0) rotate(0deg) scale(1)" },
              { opacity: 0, transform: "translate3d(0,-14%,0) rotate(-5deg) scale(.99)" },
            ]
          : [
              { opacity: 0, transform: "translate3d(0,16%,0) rotate(5deg) scale(1.016)" },
              { opacity: 1, transform: "translate3d(0,-3%,0) rotate(-1deg) scale(1.004)", offset: 0.64 },
              { opacity: 1, transform: "translate3d(0,0,0) rotate(0deg) scale(1)" },
            ];
      case "snap":
        return oldRole
          ? [
              { opacity: 1, clipPath: "inset(0 0 0 0 round .12em)" },
              { opacity: 0, clipPath: "inset(0 0 100% 0 round .12em)" },
            ]
          : [
              { opacity: 0, clipPath: "inset(100% 0 0 0 round .12em)" },
              { opacity: 1, clipPath: "inset(0 0 0 0 round .12em)" },
            ];
      case "prism":
        return oldRole
          ? [
              { opacity: 1, transform: "translate3d(0,0,0) skewX(0deg)", filter: "blur(0px)" },
              { opacity: 0, transform: "translate3d(-16%,0,0) skewX(-12deg)", filter: "blur(4px)" },
            ]
          : [
              { opacity: 0, transform: "translate3d(16%,0,0) skewX(12deg)", filter: "blur(5px)" },
              { opacity: 1, transform: "translate3d(0,0,0) skewX(0deg)", filter: "blur(0px)" },
            ];
      default:
        return oldRole
          ? [
              { opacity: 1, transform: "translate3d(0,0,0)" },
              { opacity: 0, transform: "translate3d(0,-10%,0)" },
            ]
          : [
              { opacity: 0, transform: "translate3d(0,10%,0)" },
              { opacity: 1, transform: "translate3d(0,0,0)" },
            ];
    }
  }

  function animateClockDigitTransition(span, oldFace, newFace, animationId, delay = 0) {
    if (prefersReducedMotion()) return;
    if (!oldFace?.animate || !newFace?.animate) return;
    const duration = clockMotionDuration(animationId);
    const easing = "cubic-bezier(.22,.78,.14,1)";
    oldFace.animate(clockMotionKeyframes(animationId, "old"), {
      duration,
      delay,
      easing,
      fill: "both",
    });
    newFace.animate(clockMotionKeyframes(animationId, "new"), {
      duration,
      delay,
      easing,
      fill: "both",
    });
    span.animate([
      { filter: "brightness(1)", offset: 0 },
      { filter: "brightness(1.08)", offset: 0.38 },
      { filter: "brightness(1)", offset: 1 },
    ], {
      duration: Math.max(280, Math.round(duration * 0.86)),
      delay,
      easing: "ease-out",
      fill: "both",
    });
  }

  function renderDigits(text) {
    resetClockRenderState();
    const value = String(text);
    els.timerText.replaceChildren();
    for (const ch of value) {
      const span = createTimerChar(ch);
      const face = document.createElement("span");
      face.className = "timer-char-face timer-char-static";
      face.textContent = ch;
      span.appendChild(face);
      els.timerText.appendChild(span);
    }
    els.timerButton.setAttribute("aria-label", `Timer ${value}`);
    if (state.type !== "clock") {
      setClockMeridiem("");
    }
    scheduleTimerOverlayLayoutSync();
  }

  function renderClockDigits(text, { animationId = "none", animate = false, formatKey = "" } = {}) {
    const value = String(text);
    const previous = animate && clockRenderedFormatKey === formatKey ? clockRenderedText : "";
    const canAnimate = Boolean(
      animate
      && animationId !== "none"
      && previous
      && previous.length === value.length
    );
    const changedIndexes = [];
    if (canAnimate) {
      for (let index = 0; index < value.length; index += 1) {
        if (isTimerSeparator(value[index])) continue;
        if (previous[index] !== value[index]) changedIndexes.push(index);
      }
    }
    const delayByIndex = new Map();
    changedIndexes
      .slice()
      .sort((left, right) => right - left)
      .forEach((index, order) => {
        delayByIndex.set(index, Math.min(order, 4) * 24);
      });

    els.timerText.replaceChildren();
    const pendingAnimations = [];
    for (let index = 0; index < value.length; index += 1) {
      const ch = value[index];
      const span = createTimerChar(ch);
      const previousChar = previous[index] || "";
      const shouldAnimate = Boolean(
        changedIndexes.length
        && delayByIndex.has(index)
        && !isTimerSeparator(ch)
        && !isTimerSeparator(previousChar)
        && previousChar !== ch
      );
      if (shouldAnimate) {
        span.classList.add("is-changing", `motion-${animationId}`);
        span.style.setProperty("--motion-delay", `${delayByIndex.get(index) || 0}ms`);

        const oldFace = document.createElement("span");
        oldFace.className = "timer-char-face timer-char-old";
        oldFace.textContent = previousChar;

        const newFace = document.createElement("span");
        newFace.className = "timer-char-face timer-char-new";
        newFace.textContent = ch;

        span.append(oldFace, newFace);
        pendingAnimations.push({
          span,
          oldFace,
          newFace,
          delay: delayByIndex.get(index) || 0,
        });
      } else {
        const face = document.createElement("span");
        face.className = "timer-char-face timer-char-static";
        face.textContent = ch;
        span.appendChild(face);
      }
      els.timerText.appendChild(span);
    }

    if (pendingAnimations.length) {
      requestAnimationFrame(() => {
        pendingAnimations.forEach(item => {
          if (!item.span.isConnected) return;
          animateClockDigitTransition(item.span, item.oldFace, item.newFace, animationId, item.delay);
        });
      });
    }

    els.timerButton.setAttribute("aria-label", `Timer ${value}`);
    clockRenderedText = value;
    clockRenderedFormatKey = formatKey;
    scheduleTimerOverlayLayoutSync();
  }

  function renderIdleTimer() {
    if (state.type === "clock") {
      renderClockSnapshot(new Date());
      return;
    }
    if (state.type === "alarm") {
      if (alarmUsesClockDisplay()) {
        renderAlarmClockFace(new Date());
      } else {
        setClockMeridiem("");
        renderDigits(formatAlarmPrimary(state.alarm));
      }
      return;
    }
    if (state.type === "countup") {
      renderDigits(formatClock(Math.max(0, state.countupTargetSeconds || 0)));
      return;
    }
    if (state.type === "stopwatch") {
      renderDigits(formatClock(Math.max(0, state.stopwatchStartSeconds || 0)));
      return;
    }
    if (state.type === "scenario" && state.scenario.length > 0) {
      renderDigits(formatClock(Math.max(1, state.scenario[0].seconds)));
      return;
    }
    if (state.type === "pomodoro") {
      renderDigits(formatClock(Math.max(1, state.pomodoro.focusSeconds)));
      return;
    }
    if (state.type === "loop") {
      renderDigits(formatClock(Math.max(1, state.loop.workSeconds)));
      return;
    }
    if (state.type === "interval") {
      renderDigits(state.interval.warmupSeconds > 0 ? formatClock(state.interval.warmupSeconds) : formatClock(state.interval.workSeconds));
      return;
    }
    if (state.type === "tabata") {
      renderDigits(formatClock(state.tabata.workSeconds));
      return;
    }
    renderDigits(formatClock(Math.max(1, state.countdownSeconds)));
  }

  function setButtonLabel(button, label) {
    const target = button?.querySelector(".button-label");
    if (target) target.textContent = label;
  }

  function setButtonShortcut(button, shortcut) {
    const target = button?.querySelector(".button-shortcut");
    if (target) target.textContent = shortcut;
  }

  function renderStageControls() {
    if (!els.applyBtn || !els.stagePauseBtn || !els.stageResetBtn) return;
    const isStopwatch = state.type === "stopwatch";
    const isClock = state.type === "clock";
    const isAlarm = state.type === "alarm";
    if (els.stageStart) els.stageStart.hidden = isClock;
    const hasSequenceSkip = isSequenceDetailType() && !isStopwatch;
    const pauseDisabled = isAlarm
      ? (runtime.phase !== "running" && runtime.phase !== "paused")
      : isStopwatch || isClock || (runtime.phase !== "running" && runtime.phase !== "paused");
    els.stagePauseBtn.disabled = pauseDisabled;
    setButtonLabel(
      els.stagePauseBtn,
      isAlarm
        ? (runtime.phase === "paused" ? "ARM" : "OFF")
        : runtime.phase === "paused" && !isStopwatch ? "RESUME" : "PAUSE",
    );
    els.stageResetBtn.disabled = isStopwatch || isClock || (isAlarm && runtime.phase === "idle");
    setButtonLabel(els.stageResetBtn, "RESET");
    setButtonShortcut(els.stageResetBtn, hasSequenceSkip ? "4" : "3");
    setButtonLabel(els.applyBtn, isAlarm ? (runtime.phase === "running" ? "RE-ALARM" : "ALARM") : "START");
    els.stage?.classList.toggle("has-clock", isClock);
    els.stage?.classList.toggle("has-alarm", state.type === "alarm" && state.detailPanelVisible && !document.body.classList.contains("is-minimal"));
    if (els.stageSkipBtn) {
      els.stageSkipBtn.disabled = !hasSequenceSkip || (runtime.phase !== "running" && runtime.phase !== "paused");
      setButtonShortcut(els.stageSkipBtn, "3");
    }
    if (els.stopwatchStartBtn) {
      const stopwatchRunning = isStopwatch && runtime.phase === "running";
      els.stopwatchStartBtn.disabled = !isStopwatch;
      setButtonLabel(els.stopwatchStartBtn, stopwatchRunning ? "STOP" : "START");
      setButtonShortcut(els.stopwatchStartBtn, "1");
      els.stopwatchStartBtn.classList.toggle("is-stop", stopwatchRunning);
    }
  }

  function updateAllUI() {
    syncSideRailPlacement();
    setTypeText();
    setTimeText();
    setPresetText();
    setSoundText();
    setFontText();
    applyScale();
    setUnitText();
    setPanelText();
    setClockControlsState();
    setModeGuide();
    setPreview(typeLabel(state.type));
    setDurationPill(totalSummaryForType());
    renderStageControls();
    renderAlarmDisplayToggle();
    renderSequencePanel();
    renderClockWorld();
    renderAlarmBoard();
    renderStopwatchPanel();
    let handledAlarmRuntime = false;
    if (runtime.plan?.kind === "alarm" && runtime.phase === "running") {
      renderAlarmRuntime(Date.now());
      handledAlarmRuntime = true;
    } else if (runtime.plan?.kind === "alarm" && runtime.phase === "ended") {
      setClockMeridiem("");
      renderDigits(formatAlarmPrimary(runtime.plan.config || state.alarm));
      setStatus("RINGING");
      setDurationPill(alarmRuntimeSummary(runtime.plan.config || state.alarm, runtime.plan.targetAt), "WAKE NOTE");
      showAlarmOverlay(runtime.plan.config || state.alarm, new Date(runtime.plan.targetAt));
      handledAlarmRuntime = true;
    }
    if (!handledAlarmRuntime && runtime.phase === "paused") {
      renderPausedRuntime();
    } else if (!handledAlarmRuntime && runtime.phase !== "running") {
      renderIdleTimer();
    }
    if (state.type === "clock") {
      ensureClockTicker();
      if (runtime.phase !== "running" && runtime.phase !== "paused") {
        setStatus("LIVE");
      }
    } else {
      stopClockTicker();
    }
    ensureAlarmDisplayTicker();
    if (!els.pickerOverlay.hidden) {
      requestAnimationFrame(updatePickerLegibility);
    }
  }

  function renderPausedRuntime() {
    if (!runtime.plan) {
      renderIdleTimer();
      return;
    }
    if (runtime.plan.kind === "alarm") {
      if (alarmUsesClockDisplay()) {
        renderAlarmClockFace(new Date());
      } else {
        setClockMeridiem("");
        renderDigits(formatAlarmPrimary(runtime.plan.config || state.alarm));
      }
      setStatus("OFF");
      setPreview(typeLabel(state.type));
      setDurationPill(alarmDurationSummary(runtime.plan.config || state.alarm), "OFF");
      renderAlarmBoard();
      return;
    }
    if (runtime.plan.kind === "countup" || runtime.plan.kind === "stopwatch") {
      renderDigits(formatClock(Math.max(0, Math.floor(runtime.pausedElapsedMs / 1000))));
      setPreview(typeLabel(state.type));
      setDurationPill(totalSummaryForType(), runtime.plan.kind === "stopwatch" ? "STOPWATCH" : "COUNT UP");
      renderSequencePanel();
      renderStopwatchPanel();
      return;
    }
    const phase = runtime.plan.phases[runtime.phaseIndex] || runtime.plan.phases[0];
    renderDigits(formatClock(Math.max(0, Math.ceil(runtime.phaseRemainingMs / 1000))));
    setPreview(typeLabel(state.type));
    setDurationPill(totalSummaryForType(), formatPhaseSummary(phase));
    renderSequencePanel();
  }

  function commitTimeValues(kind, selection) {
    if (kind === "clock") {
      state.clock = {
        ...state.clock,
        precision: clockPrecisionOptionById(selection[0]).id,
        showWorld: String(selection[1] || "show") !== "hide",
      };
      return;
    }
    if (kind === "countdown") {
      if (state.unit === "clock") {
        state.countdownSeconds = Math.max(1, Number(selection[0]) * 3600 + Number(selection[1]) * 60 + Number(selection[2]));
      } else {
        state.countdownSeconds = Math.max(1, Number(selection[0]) || 0);
      }
      return;
    }

    if (kind === "countup") {
      if (state.unit === "clock") {
        state.countupTargetSeconds = Math.max(0, Number(selection[0]) * 3600 + Number(selection[1]) * 60 + Number(selection[2]));
      } else {
        state.countupTargetSeconds = Math.max(0, Number(selection[0]) || 0);
      }
      return;
    }

    if (kind === "stopwatch") {
      if (state.unit === "clock") {
        state.stopwatchStartSeconds = Math.max(0, Number(selection[0]) * 3600 + Number(selection[1]) * 60 + Number(selection[2]));
      } else {
        state.stopwatchStartSeconds = Math.max(0, Number(selection[0]) || 0);
      }
      return;
    }

    if (kind === "pomodoro") {
      state.pomodoro = {
        focusSeconds: Math.max(1, Number(selection[0]) || 1),
        shortBreakSeconds: Math.max(1, Number(selection[1]) || 1),
        longBreakSeconds: Math.max(1, Number(selection[2]) || 1),
        cycles: Math.max(1, Number(selection[3]) || 1),
      };
      return;
    }

    if (kind === "loop") {
      state.loop = {
        workSeconds: Math.max(1, Number(selection[0]) || 1),
        restSeconds: Math.max(1, Number(selection[1]) || 1),
        repeats: Math.max(1, Number(selection[2]) || 1),
      };
      return;
    }

    if (kind === "interval") {
      state.interval = {
        warmupSeconds: Math.max(0, Number(selection[0]) || 0),
        workSeconds: Math.max(1, Number(selection[1]) || 1),
        restSeconds: Math.max(1, Number(selection[2]) || 1),
        rounds: Math.max(1, Number(selection[3]) || 1),
      };
      return;
    }

    if (kind === "tabata") {
      state.tabata = {
        workSeconds: Math.max(1, Number(selection[0]) || 1),
        restSeconds: Math.max(1, Number(selection[1]) || 1),
        rounds: Math.max(1, Number(selection[2]) || 1),
      };
    }
  }

  function renderPicker(columns) {
    if (isDesktopPickerMode()) {
      renderPickerDesktop(columns);
      return;
    }
    els.pickerColumns.innerHTML = "";
    picker.wheels = [];
    const count = columns.length;
    picker.activeColumn = clamp(picker.activeColumn, 0, Math.max(0, count - 1));
    els.pickerColumns.hidden = false;
    els.pickerColumns.className = `picker-columns ${count === 1 ? "is-single" : count === 2 ? "is-double" : count === 3 ? "is-triple" : "is-four"}`;
    columns.forEach((column, index) => {
      const wrap = document.createElement("div");
      wrap.className = "picker-column";
      wrap.innerHTML = '<div class="picker-selected-line"></div>';
      const wheel = document.createElement("div");
      wheel.className = "picker-wheel";
      wheel.tabIndex = 0;
      wheel.dataset.dragBlockUntil = "0";
      let dragState = null;

      wheel.addEventListener("pointerdown", event => {
        if (event.button !== 0) return;
        picker.activeColumn = index;
        syncPickerActiveColumn();
        dragState = {
          pointerId: event.pointerId,
          startY: event.clientY,
          startScrollTop: wheel.scrollTop,
          moved: false,
        };
        wheel.classList.add("is-dragging");
        wheel.dataset.dragBlockUntil = "0";
        try {
          wheel.setPointerCapture(event.pointerId);
        } catch {}
      });

      const endDrag = () => {
        if (!dragState) return;
        if (dragState.moved) {
          wheel.dataset.dragBlockUntil = String(performance.now() + 160);
        }
        dragState = null;
        wheel.classList.remove("is-dragging");
      };

      wheel.addEventListener("pointermove", event => {
        if (!dragState || event.pointerId !== dragState.pointerId) return;
        const delta = event.clientY - dragState.startY;
        if (Math.abs(delta) > 4) dragState.moved = true;
        if (dragState.moved) {
          wheel.scrollTop = dragState.startScrollTop - delta;
          event.preventDefault();
        }
      });
      wheel.addEventListener("pointerup", endDrag);
      wheel.addEventListener("pointercancel", endDrag);
      wheel.addEventListener("lostpointercapture", endDrag);
      wheel.addEventListener("focus", () => {
        picker.activeColumn = index;
        syncPickerActiveColumn();
      });

      column.items.forEach(item => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "picker-item";
        button.dataset.value = String(item.value);
        applyPickerItemContent(button, column, item);
        button.addEventListener("click", () => {
          if (Number(wheel.dataset.dragBlockUntil || 0) > performance.now()) return;
          picker.activeColumn = index;
          syncPickerActiveColumn();
          picker.selection[index] = column.parse ? column.parse(item.value) : item.value;
          updatePickerSelection();
          button.scrollIntoView({ block: "center", behavior: "smooth" });
        });
        wheel.appendChild(button);
      });
      let wheelFrame = 0;
      wheel.addEventListener("scroll", () => {
        if (wheelFrame) return;
        wheelFrame = requestAnimationFrame(() => {
          wheelFrame = 0;
          updatePickerSelection();
        });
      });
      wrap.appendChild(wheel);
      els.pickerColumns.appendChild(wrap);
      picker.wheels[index] = wheel;
    });

    requestAnimationFrame(() => {
      picker.wheels.forEach((wheel, index) => {
        const value = picker.selection[index];
        const match = [...wheel.querySelectorAll(".picker-item")].find(item => item.dataset.value === String(value));
        if (match) match.scrollIntoView({ block: "center" });
      });
      syncPickerActiveColumn();
      picker.wheels[picker.activeColumn]?.focus({ preventScroll: true });
      updatePickerSelection();
      updatePickerLegibility();
    });
  }

  function applyPickerItemContent(button, column, item) {
    if (!button) return;
    button.textContent = "";
    if (column?.itemClass) button.classList.add(column.itemClass);
    if (item?.hasBreak) button.classList.add("has-zone-break");
    if (item?.isLocal) button.classList.add("is-local-zone");
    if (typeof column?.renderNode === "function") {
      const node = column.renderNode(item);
      if (node instanceof Node) {
        button.appendChild(node);
        return;
      }
    }
    button.textContent = column?.render ? column.render(item) : String(item.label ?? item.value);
  }

  function renderPickerDesktop(columns) {
    els.pickerColumns.innerHTML = "";
    picker.wheels = [];
    const count = columns.length;
    els.pickerColumns.hidden = false;
    els.pickerColumns.className = `picker-columns is-desktop ${count === 1 ? "is-single" : count === 2 ? "is-double" : count === 3 ? "is-triple" : "is-four"}`;
    columns.forEach((column, index) => {
      const wrap = document.createElement("div");
      wrap.className = "picker-column picker-column-list";
      const list = document.createElement("div");
      list.className = "picker-list";
      column.items.forEach(item => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "picker-list-item";
        button.dataset.value = String(item.value);
        applyPickerItemContent(button, column, item);
        const parsedValue = column.parse ? column.parse(item.value) : item.value;
        if (String(parsedValue) === String(picker.selection[index])) {
          button.classList.add("is-active");
        }
        button.addEventListener("click", () => {
          picker.selection[index] = parsedValue;
          [...list.querySelectorAll(".picker-list-item")].forEach(node => node.classList.remove("is-active"));
          button.classList.add("is-active");
          applyPickerLivePreview();
        });
        list.appendChild(button);
      });
      wrap.appendChild(list);
      els.pickerColumns.appendChild(wrap);
    });
    requestAnimationFrame(updatePickerLegibility);
  }

  function updatePickerSelection() {
    [...els.pickerColumns.querySelectorAll(".picker-column")].forEach((wrap, index) => {
      const wheel = wrap.querySelector(".picker-wheel");
      const items = [...wheel.querySelectorAll(".picker-item")];
      if (!items.length) return;
      const center = wheel.getBoundingClientRect().top + wheel.getBoundingClientRect().height / 2;
      let nearest = items[0];
      let best = Number.POSITIVE_INFINITY;
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const distance = Math.abs((rect.top + rect.height / 2) - center);
        item.classList.remove("is-active");
        if (distance < best) {
          best = distance;
          nearest = item;
        }
      });
      nearest.classList.add("is-active");
      const column = picker.columns[index];
      picker.selection[index] = column.parse ? column.parse(nearest.dataset.value) : nearest.dataset.value;
    });
    syncPickerManualInputs();
    applyPickerLivePreview();
  }

  function collectScenarioStepsFromEditor() {
    const fallback = picker.draftScenario && picker.draftScenario.length ? picker.draftScenario : DEFAULT_SCENARIO;
    const rows = [...els.pickerEditor.querySelectorAll(".scenario-step")];
    if (!rows.length) return cloneScenario(fallback);
    return rows.map((row, index) => {
      const label = row.querySelector('[data-role="label"]')?.value?.trim() || `Step ${index + 1}`;
      const seconds = Math.max(1, toSeconds(row.querySelector('[data-role="seconds"]')?.value));
      return { label, seconds };
    });
  }

  function applySoundSelection(modeValue, presetValue = null, volumeValue = null, options = {}) {
    const rawMode = String(modeValue || "");
    const current = sanitizeSoundSettings(appStore.future.sound);
    const isMute = rawMode === "mute";
    const modeEnabled = !isMute;
    const presetFromMode = rawMode.startsWith("sound:") ? rawMode.slice(6) : null;
    const option = soundOptionById(presetFromMode || presetValue || current.preset);
    const next = sanitizeSoundSettings({
      enabled: modeEnabled,
      preset: option.id,
      volume: volumeValue ?? current.volume,
    });
    appStore.future.sound = next;
    updateAllUI();
    if (options.preview === true) {
      const previewSound = options.previewWhileMuted
        ? { ...next, enabled: true }
        : next;
      queueSoundPreview(previewSound, { force: options.force === true });
    }
  }

  function applyPickerLivePreview() {
    if (!pickerSupportsLivePreview()) return;

    if (picker.kind === "type") {
      state.type = String(picker.selection[0] || "countdown");
      updateAllUI();
      return;
    }

    if (picker.kind === "font") {
      setFont(String(picker.selection[0] || state.fontId));
      updateAllUI();
      return;
    }

    if (picker.kind === "size") {
      setScale(Number(picker.selection[0] || state.size));
      updateAllUI();
      return;
    }

    if (picker.kind === "unit") {
      setUnit(String(picker.selection[0] || "seconds"));
      updateAllUI();
      return;
    }

    if (picker.kind === "panel") {
      state.detailPanelVisible = String(picker.selection[0] || "hide") === "show";
      updateAllUI();
      return;
    }

    if (picker.kind === "alarm-repeat") {
      updateSelectedAlarm({
        ...state.alarm,
        repeat: picker.selection[0],
        weekdays: picker.alarmWeekdays,
      });
      renderAlarmRepeatEditor(state.alarm);
      updateAllUI();
      return;
    }

    if (picker.kind === "clock-zone") {
      state.clock = {
        ...state.clock,
        zoneId: clockZoneOptionById(picker.selection[0]).id,
      };
      updateAllUI();
      return;
    }

    if (picker.kind === "clock-cityset") {
      state.clock = {
        ...state.clock,
        citySet: clockCitySetById(picker.selection[0]).id,
      };
      renderClockWorld(new Date());
      updateAllUI();
      return;
    }

    if (picker.kind === "preset") {
      const preset = appStore.presets.find(item => item.id === String(picker.selection[0] || ""));
      if (!preset) return;
      applyTypeConfig(preset.type, preset.config);
      setUnit(preset.unit);
      appStore.future.sound = sanitizeSoundSettings(preset.sound || appStore.future.sound);
      if (preset.fontId) setFont(preset.fontId);
      if (preset.size != null) setScale(preset.size);
      updateAllUI();
      return;
    }

    if (picker.kind === "sound") {
      applySoundSelection(picker.selection[0], picker.selection[1], picker.soundVolume, {
        preview: true,
        previewWhileMuted: true,
        force: true,
      });
      return;
    }

    if (picker.kind === "preset-config" && picker.presetType === "alarm") {
      if (picker.alarmDraftConfig) {
        updateSelectedAlarm(picker.alarmDraftConfig);
        updateAllUI();
      }
      return;
    }

    if (picker.kind === "alarm-time") {
      if (picker.alarmDraftConfig) {
        updateSelectedAlarm(picker.alarmDraftConfig);
      }
      updateAllUI();
      return;
    }

    if (picker.kind === "time") {
      commitTimeValues(state.type, picker.selection);
      updateAllUI();
      return;
    }

    if (picker.kind === "scenario") {
      state.scenario = collectScenarioStepsFromEditor();
      updateAllUI();
    }
  }

  function renderScenarioEditor() {
    els.pickerEditor.hidden = false;
    els.pickerColumns.hidden = true;
    els.pickerEditor.innerHTML = "";

    const draft = cloneScenario(picker.draftScenario && picker.draftScenario.length ? picker.draftScenario : state.scenario.length ? state.scenario : DEFAULT_SCENARIO);
    picker.draftScenario = draft;

    const list = document.createElement("div");
    list.className = "scenario-list";
    let hint = null;

    function updateHint() {
      const total = draft.reduce((sum, step) => sum + Math.max(1, step.seconds), 0);
      if (hint) hint.textContent = `${draft.length} steps · ${formatClock(total)} · use 90 or 1:30`;
    }

    const renderRows = () => {
      list.innerHTML = "";
      draft.forEach((step, index) => {
        const row = document.createElement("div");
        row.className = "scenario-step";

        const labelWrap = document.createElement("div");
        labelWrap.style.display = "grid";
        labelWrap.style.gap = "6px";
        labelWrap.style.minWidth = "0";

        const labelMeta = document.createElement("div");
        labelMeta.className = "scenario-label";
        labelMeta.textContent = `STEP ${index + 1}`;
        const labelInput = document.createElement("input");
        labelInput.type = "text";
        labelInput.value = step.label;
        labelInput.placeholder = `Step ${index + 1}`;
        labelInput.spellcheck = false;
        labelInput.dataset.role = "label";
        labelInput.addEventListener("input", () => {
          draft[index].label = labelInput.value;
          updateHint();
        });
        labelWrap.append(labelMeta, labelInput);

        const timeWrap = document.createElement("div");
        timeWrap.style.display = "grid";
        timeWrap.style.gap = "6px";
        timeWrap.style.minWidth = "0";

        const timeMeta = document.createElement("div");
        timeMeta.className = "scenario-label";
        timeMeta.textContent = "TIME";
        const timeInput = document.createElement("input");
        timeInput.type = "text";
        timeInput.inputMode = "numeric";
        timeInput.value = formatClock(step.seconds);
        timeInput.placeholder = "mm:ss";
        timeInput.dataset.role = "seconds";
        timeInput.classList.add("scenario-seconds");
        timeInput.addEventListener("input", () => {
          draft[index].seconds = Math.max(1, toSeconds(timeInput.value));
          updateHint();
        });
        timeWrap.append(timeMeta, timeInput);

        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "scenario-remove";
        remove.textContent = "×";
        remove.title = "Remove step";
        remove.disabled = draft.length <= 1;
        remove.addEventListener("click", () => {
          if (draft.length <= 1) return;
          draft.splice(index, 1);
          renderRows();
        });

        row.append(labelWrap, timeWrap, remove);
        list.appendChild(row);
      });

      updateHint();
    };

    renderRows();

    const add = document.createElement("button");
    add.type = "button";
    add.className = "scenario-add";
    add.textContent = "+ Add Step";
    add.addEventListener("click", () => {
      draft.push({
        label: `Step ${draft.length + 1}`,
        seconds: 60,
      });
      renderRows();
    });

    hint = document.createElement("div");
    hint.className = "scenario-hint";
    updateHint();

    els.pickerEditor.append(list, add, hint);
    requestAnimationFrame(updatePickerLegibility);
  }

  function renderSoundPickerVolumeEditor(volume = sanitizeSoundSettings(appStore.future.sound).volume) {
    picker.soundVolume = clampSoundVolume(volume);
    els.pickerEditor.hidden = false;
    els.pickerEditor.innerHTML = "";

    const wrap = document.createElement("div");
    wrap.className = "picker-sound-volume";

    const head = document.createElement("div");
    head.className = "picker-sound-volume-head";
    const label = document.createElement("span");
    label.textContent = "Volume";
    const value = document.createElement("strong");
    value.className = "picker-sound-volume-value";
    value.textContent = String(picker.soundVolume);
    head.append(label, value);

    const range = document.createElement("input");
    range.className = "picker-sound-range";
    range.type = "range";
    range.min = "0";
    range.max = "100";
    range.step = "1";
    range.value = String(picker.soundVolume);
    range.setAttribute("aria-label", "Sound volume");

    const applyRange = () => {
      picker.soundVolume = clampSoundVolume(range.value);
      value.textContent = String(picker.soundVolume);
      if (pickerSupportsLivePreview("sound")) {
        applySoundSelection(
          picker.selection[0],
          picker.selection[1],
          picker.soundVolume,
          {
            preview: true,
            previewWhileMuted: true,
          },
        );
      }
    };

    range.addEventListener("input", applyRange);
    range.addEventListener("change", applyRange);

    wrap.append(head, range);
    els.pickerEditor.append(wrap);
    requestAnimationFrame(updatePickerLegibility);
  }

  function openPicker(kind) {
    picker.kind = kind;
    picker.selectionFrame = 0;
    picker.activeColumn = 0;
    picker.presetId = null;
    picker.presetType = null;
    picker.presetUnit = "seconds";
    picker.presetName = "";
    els.pickerOverlay.hidden = false;
    els.pickerEditor.hidden = true;
    els.pickerColumns.hidden = false;
    picker.manualInputs = [];
    picker.wheels = [];
    picker.alarmWeekdays = normalizeAlarmWeekdays(state.alarm?.weekdays);
    picker.alarmMessage = normalizeAlarmMessage(state.alarm?.message);
    picker.alarmIncludeRepeat = false;

    if (kind === "type") {
      els.pickerLabel.textContent = "Type";
      els.pickerDesc.textContent = "Choose the pulse";
      picker.columns = buildTypeColumns();
      picker.selection = [state.type];
      renderPicker(picker.columns);
      return;
    }

    if (kind === "font") {
      els.pickerLabel.textContent = "Font";
      els.pickerDesc.textContent = "Set the voice";
      picker.columns = buildFontColumns();
      picker.selection = [state.fontId];
      renderPicker(picker.columns);
      return;
    }

    if (kind === "size") {
      els.pickerLabel.textContent = "Scale";
      els.pickerDesc.textContent = "10% to 200%";
      picker.columns = buildScaleColumns();
      picker.selection = [state.size];
      renderPicker(picker.columns);
      return;
    }

    if (kind === "unit") {
      if (state.type === "clock") {
        els.pickerLabel.textContent = "Zone";
        els.pickerDesc.textContent = "Change the base timezone for the main clock";
        picker.kind = "clock-zone";
        const zoneItems = buildClockZoneItems();
        picker.columns = [{
          value: clockZonePickerValue(state.clock?.zoneId),
          items: zoneItems,
          itemClass: "is-zone-item",
          render: item => item.label,
          renderNode: item => renderClockZonePickerNode(item),
          parse: raw => String(raw),
        }];
        picker.selection = [picker.columns[0].value];
        renderPicker(picker.columns);
        return;
      }
      if (state.type === "alarm") {
        els.pickerLabel.textContent = "Repeat";
        els.pickerDesc.textContent = "Choose once, daily, weekdays, weekends, or a custom day set.";
        picker.kind = "alarm-repeat";
        picker.columns = [{
          value: alarmRepeatOptionById(state.alarm?.repeat).id,
          items: ALARM_REPEAT_OPTIONS.map(option => ({ value: option.id, label: option.label })),
          render: item => item.label,
          parse: raw => String(raw),
        }];
        picker.selection = [picker.columns[0].value];
        renderPicker(picker.columns);
        renderAlarmRepeatEditor(state.alarm);
        return;
      }
      els.pickerLabel.textContent = "Unit";
      els.pickerDesc.textContent = "Seconds or clock";
      picker.columns = buildUnitColumns();
      picker.selection = [state.unit];
      renderPicker(picker.columns);
      return;
    }

    if (kind === "panel") {
      els.pickerLabel.textContent = "Panel";
      els.pickerDesc.textContent = "Keep detail visible in minimal mode";
      picker.columns = buildPanelColumns();
      picker.selection = [state.detailPanelVisible ? "show" : "hide"];
      renderPicker(picker.columns);
      return;
    }

    if (kind === "sound") {
      const safe = sanitizeSoundSettings(appStore.future.sound);
      els.pickerLabel.textContent = "Sound";
      els.pickerDesc.textContent = "Mode and tone with live preview. Volume uses the slider.";
      picker.columns = buildSoundColumns();
      picker.selection = picker.columns.map(column => column.value);
      picker.soundVolume = safe.volume;
      soundPreviewSignature = `${safe.preset}|${safe.volume}|1`;
      renderPicker(picker.columns);
      renderSoundPickerVolumeEditor(safe.volume);
      return;
    }

    if (kind === "preset") {
      const presets = presetsForType(state.type);
      if (!presets.length) {
        closePicker();
        openSettings();
        return;
      }
      const match = matchingPresetForCurrentType(state.type);
      els.pickerLabel.textContent = "Preset";
      els.pickerDesc.textContent = `${presets.length} saved for ${typeLabel(state.type)}. Swipe, drag, or use arrows. Enter confirms.`;
      picker.columns = buildPresetColumns(state.type);
      picker.selection = [match?.id || presets[0].id];
      renderPicker(picker.columns);
      return;
    }

    if (kind === "time") {
      const activeKind = state.type;
      if (activeKind === "clock") {
        els.pickerLabel.textContent = "Cities";
        els.pickerDesc.textContent = "Choose the world city set";
        picker.kind = "clock-cityset";
        picker.columns = [{
          value: clockCitySetById(state.clock?.citySet).id,
          items: CLOCK_CITY_SET_OPTIONS.map(option => ({ value: option.id, label: option.label })),
          render: item => item.label,
          parse: raw => String(raw),
        }];
        picker.selection = [picker.columns[0].value];
        renderPicker(picker.columns);
        return;
      }
      if (activeKind === "alarm") {
        picker.kind = "alarm-time";
        picker.alarmIncludeRepeat = false;
        picker.alarmDraftConfig = normalizeTypeConfig("alarm", state.alarm);
        els.pickerLabel.textContent = "Alarm";
        els.pickerDesc.textContent = timePickerDescription("alarm");
        picker.columns = [];
        picker.selection = [];
        els.pickerColumns.hidden = true;
        els.pickerColumns.innerHTML = "";
        renderAlarmTimeEditor(state.alarm, { includeRepeat: false });
        return;
      }
      if (activeKind === "scenario") {
        picker.kind = "scenario";
        els.pickerLabel.textContent = "Scenario";
        els.pickerDesc.textContent = `${state.scenario.length} steps · ${formatClock(totalSecondsForType("scenario"))}`;
        renderScenarioEditor();
        return;
      }
      els.pickerLabel.textContent = "Time";
      picker.columns = buildTimeColumns(activeKind);
      picker.selection = picker.columns.map(column => column.value);
      els.pickerDesc.textContent = activeKind === "countup"
        ? "Swipe, drag, type, or use arrows. Enter confirms. 0 means unlimited."
        : "Swipe, drag, type, or use arrows. Enter confirms.";
      renderPickerManualEditor(activeKind);
      renderPicker(picker.columns);
      return;
    }

    if (kind === "scenario") {
      els.pickerLabel.textContent = "Scenario";
      els.pickerDesc.textContent = `${state.scenario.length} steps · ${formatClock(totalSecondsForType("scenario"))}`;
      renderScenarioEditor();
    }
  }

  function closePicker() {
    const shouldReturnToSettings = picker.returnToSettings;
    const returnPresetType = picker.presetType;
    els.pickerOverlay.hidden = true;
    els.pickerEditor.hidden = true;
    els.pickerColumns.hidden = false;
    els.pickerColumns.innerHTML = "";
    els.pickerEditor.innerHTML = "";
    picker.kind = null;
    picker.columns = [];
    picker.selection = [];
    picker.draftScenario = null;
    picker.returnToSettings = false;
    picker.presetId = null;
    picker.presetType = null;
    picker.presetUnit = "seconds";
    picker.presetName = "";
    picker.wheels = [];
    picker.manualInputs = [];
    picker.activeColumn = 0;
    picker.soundVolume = sanitizeSoundSettings(appStore.future.sound).volume;
    els.pickerOverlay.classList.remove("is-legible");
    if (shouldReturnToSettings) {
      if (returnPresetType) settingsUi.presetType = returnPresetType;
      openSettings({ preserveType: true });
    }
  }

  function confirmPicker() {
    if (!picker.kind) {
      closePicker();
      return;
    }

    if (picker.kind === "type") {
      state.type = String(picker.selection[0] || "countdown");
      updateAllUI();
      persistStore();
      closePicker();
      resetToIdleState();
      return;
    }

    if (picker.kind === "font") {
      setFont(String(picker.selection[0] || state.fontId));
      updateAllUI();
      persistStore();
      closePicker();
      return;
    }

    if (picker.kind === "size") {
      setScale(Number(picker.selection[0] || state.size));
      updateAllUI();
      persistStore();
      closePicker();
      return;
    }

    if (picker.kind === "unit") {
      setUnit(String(picker.selection[0] || "seconds"));
      updateAllUI();
      persistStore();
      closePicker();
      return;
    }

    if (picker.kind === "panel") {
      state.detailPanelVisible = String(picker.selection[0] || "hide") === "show";
      updateAllUI();
      persistStore();
      closePicker();
      return;
    }

    if (picker.kind === "clock-zone") {
      state.clock = {
        ...state.clock,
        zoneId: clockZoneOptionById(picker.selection[0]).id,
      };
      updateAllUI();
      persistStore();
      closePicker();
      return;
    }

    if (picker.kind === "clock-cityset") {
      state.clock = {
        ...state.clock,
        citySet: clockCitySetById(picker.selection[0]).id,
      };
      updateAllUI();
      persistStore();
      closePicker();
      return;
    }

    if (picker.kind === "time") {
      commitTimeValues(state.type, picker.selection);
      updateAllUI();
      persistStore();
      closePicker();
      resetToIdleState();
      return;
    }

    if (picker.kind === "scenario") {
      const rows = [...els.pickerEditor.querySelectorAll(".scenario-step")];
      const steps = rows.map((row, index) => {
        const label = row.querySelector('[data-role="label"]')?.value?.trim() || `Step ${index + 1}`;
        const seconds = Math.max(1, toSeconds(row.querySelector('[data-role="seconds"]')?.value));
        return { label, seconds };
      });
      state.scenario = steps.length ? steps : cloneScenario(DEFAULT_SCENARIO);
      updateAllUI();
      closePicker();
      resetToIdleState();
    }
  }

  function initControls() {
    const hydration = hydrateStore();
    if (!hydration.loaded || !hydration.hasSize) {
      state.size = DEFAULT_STATE.size;
    }
    initClockMeridiemObservers();
    appStore.future.sound = sanitizeSoundSettings({
      ...appStore.future.sound,
      enabled: false,
    });

    document.body.classList.remove("mobile-controls-open");
    document.body.classList.toggle("is-minimal", !state.uiVisible);
    syncSideRailPlacement();
    setFont(state.fontId);
    setScale(state.size);
    setUnit(state.unit);
    updateAllUI();
    resetToIdleState();
    renderSettingsUI();

    updateUnitSegmentFromClicks();
    els.clockAnimButton?.addEventListener("click", () => openPicker("unit"));
    els.clockHourSegment?.addEventListener("click", event => {
      const button = event.target.closest("button[data-clock-hour]");
      if (!button) return;
      state.clock = {
        ...state.clock,
        hourCycle: clockHourOptionById(button.dataset.clockHour).id,
      };
      ensureClockTicker({ force: true });
      updateAllUI();
      persistStore();
    });
    els.clockPrecisionSegment?.addEventListener("click", event => {
      const button = event.target.closest("button[data-clock-precision]");
      if (!button) return;
      state.clock = {
        ...state.clock,
        precision: clockPrecisionOptionById(button.dataset.clockPrecision).id,
      };
      ensureClockTicker({ force: true });
      updateAllUI();
      persistStore();
    });
    els.clockWorldSegment?.addEventListener("click", event => {
      const button = event.target.closest("button[data-clock-world]");
      if (!button) return;
      state.clock = {
        ...state.clock,
        showWorld: (button.dataset.clockWorld || "show") !== "hide",
      };
      renderClockWorld(new Date());
      updateAllUI();
      persistStore();
    });

    els.typeButton.addEventListener("click", () => openPicker("type"));
    els.fontButton?.addEventListener("click", () => openPicker("font"));
    els.sizeButton?.addEventListener("click", () => openPicker("size"));
    els.timeButton.addEventListener("click", () => openPicker("time"));
    els.panelButton?.addEventListener("click", () => openPicker("panel"));
    els.dockTypeBtn.addEventListener("click", () => openPicker("type"));
    els.dockFontBtn.addEventListener("click", () => openPicker("font"));
    els.dockSizeBtn.addEventListener("click", () => openPicker("size"));
    els.dockUnitBtn.addEventListener("click", () => openPicker("unit"));
    els.dockPanelBtn?.addEventListener("click", () => openPicker("panel"));
    els.dockTimeBtn.addEventListener("click", () => openPicker("time"));
    els.settingsOpenBtn?.addEventListener("click", () => openSettings());

    els.applyBtn.addEventListener("click", () => applyAndStart());
    els.stopwatchStartBtn?.addEventListener("click", () => {
      if (state.type === "stopwatch" && runtime.phase === "running") {
        stopStopwatch();
        return;
      }
      applyAndStart();
    });
    els.stagePauseBtn?.addEventListener("click", () => {
      if (runtime.phase === "running") {
        pauseTimer();
        return;
      }
      if (runtime.phase === "paused") {
        resumeTimer();
      }
    });
    els.uiToggle.addEventListener("click", () => toggleMinimal());
    els.stopwatchResetBtn?.addEventListener("click", () => resetStopwatch());
    els.stopwatchLapBtn?.addEventListener("click", () => captureStopwatchLap());
    els.stopwatchBestChip?.addEventListener("click", () => toggleStopwatchSort("best"));
    els.stopwatchWorstChip?.addEventListener("click", () => toggleStopwatchSort("worst"));
    els.alarmDisplayToggleBtn?.addEventListener("click", () => {
      state.alarmDisplayMode = alarmUsesClockDisplay() ? "countdown" : "clock";
      updateAllUI();
      persistStore();
    });
    els.alarmCards?.addEventListener("click", event => {
      const target = event.target.closest("[data-alarm-action]");
      if (!target) return;
      const action = target.dataset.alarmAction;
      const alarmId = target.dataset.alarmId;
      if (action === "select" && alarmId) {
        setSelectedAlarmEntry(alarmId);
        updateAllUI();
        persistStore();
        return;
      }
      if (action === "add") {
        addAlarmEntry(state.alarm);
        updateAllUI();
        persistStore();
        if (runtime.plan?.kind === "alarm" && runtime.phase !== "idle") {
          resetToIdleState();
        }
        return;
      }
      if (action === "delete" && alarmId) {
        const removed = removeAlarmEntry(alarmId);
        if (!removed) return;
        updateAllUI();
        persistStore();
        if (runtime.plan?.kind === "alarm" && runtime.phase !== "idle") {
          resetToIdleState();
        }
      }
    });
    els.alarmSnoozeBtn?.addEventListener("click", () => snoozeAlarm());
    els.alarmDismissBtn?.addEventListener("click", () => dismissAlarm());
    els.timerButton.addEventListener("click", () => {
      if (state.type === "clock") {
        ensureClockTicker({ force: true });
        return;
      }
      if (runtime.phase === "running") {
        pauseTimer();
        return;
      }
      if (runtime.phase === "paused") {
        resumeTimer();
        return;
      }
      applyAndStart();
    });

    els.pickerClose.addEventListener("click", closePicker);
    els.pickerCancel.addEventListener("click", closePicker);
    els.pickerConfirm.addEventListener("click", confirmPicker);
    els.pickerOverlay.addEventListener("click", event => {
      if (event.target === els.pickerOverlay) closePicker();
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !els.pickerOverlay.hidden) {
        closePicker();
        return;
      }
      if (!els.pickerOverlay.hidden && picker.columns.length) {
        if (event.key === "ArrowUp") {
          event.preventDefault();
          movePickerSelection(-1);
          return;
        }
        if (event.key === "ArrowDown") {
          event.preventDefault();
          movePickerSelection(1);
          return;
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          movePickerColumn(-1);
          return;
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          movePickerColumn(1);
          return;
        }
      }
      if (event.key === "Enter") {
        event.preventDefault();
        if (!els.pickerOverlay.hidden) {
          confirmPicker();
        } else {
          els.applyBtn.click();
        }
        return;
      }
      if (event.key === " " || event.key === "Spacebar") {
        event.preventDefault();
        els.timerButton.click();
        return;
      }
      if (event.key.toLowerCase() === "u") {
        toggleMinimal();
        return;
      }

      const target = event.target;
      const isTypingTarget = target instanceof HTMLElement && (
        target.isContentEditable ||
        Boolean(target.closest("input,textarea,select,[contenteditable='true']"))
      );
      if (isTypingTarget || !els.pickerOverlay.hidden || state.type !== "stopwatch") return;

      if (event.key.toLowerCase() === "r") {
        event.preventDefault();
        resetStopwatch();
        return;
      }
      if (event.key.toLowerCase() === "l") {
        event.preventDefault();
        captureStopwatchLap();
        return;
      }
      if (event.key.toLowerCase() === "s") {
        event.preventDefault();
        stopStopwatch();
      }
    });

    syncMinimalUI();
    restartTimer();
  }

  function commitTimeValues(kind, selection) {
    if (kind === "clock") {
      state.clock = {
        ...state.clock,
        precision: clockPrecisionOptionById(selection[0]).id,
        showWorld: String(selection[1] || "show") !== "hide",
      };
      return;
    }

    if (kind === "countdown") {
      if (state.unit === "clock") {
        const value = Math.max(1, Number(selection[0]) * 3600 + Number(selection[1]) * 60 + Number(selection[2]));
        state.countdownSeconds = value;
      } else {
        state.countdownSeconds = Math.max(1, Number(selection[0]) || 0);
      }
      return;
    }

    if (kind === "countup") {
      if (state.unit === "clock") {
        state.countupTargetSeconds = Math.max(0, Number(selection[0]) * 3600 + Number(selection[1]) * 60 + Number(selection[2]));
      } else {
        state.countupTargetSeconds = Math.max(0, Number(selection[0]) || 0);
      }
      return;
    }

    if (kind === "stopwatch") {
      if (state.unit === "clock") {
        state.stopwatchStartSeconds = Math.max(0, Number(selection[0]) * 3600 + Number(selection[1]) * 60 + Number(selection[2]));
      } else {
        state.stopwatchStartSeconds = Math.max(0, Number(selection[0]) || 0);
      }
      return;
    }

    if (kind === "pomodoro") {
      state.pomodoro = {
        focusSeconds: Math.max(1, Number(selection[0]) || 1),
        shortBreakSeconds: Math.max(1, Number(selection[1]) || 1),
        longBreakSeconds: Math.max(1, Number(selection[2]) || 1),
        cycles: Math.max(1, Number(selection[3]) || 1),
      };
      return;
    }

    if (kind === "loop") {
      state.loop = {
        workSeconds: Math.max(1, Number(selection[0]) || 1),
        restSeconds: Math.max(1, Number(selection[1]) || 1),
        repeats: Math.max(1, Number(selection[2]) || 1),
      };
      return;
    }

    if (kind === "interval") {
      state.interval = {
        warmupSeconds: Math.max(0, Number(selection[0]) || 0),
        workSeconds: Math.max(1, Number(selection[1]) || 1),
        restSeconds: Math.max(1, Number(selection[2]) || 1),
        rounds: Math.max(1, Number(selection[3]) || 1),
      };
      return;
    }

    if (kind === "tabata") {
      state.tabata = {
        workSeconds: Math.max(1, Number(selection[0]) || 1),
        restSeconds: Math.max(1, Number(selection[1]) || 1),
        rounds: Math.max(1, Number(selection[2]) || 1),
      };
    }
  }

  function renderPicker(columns) {
    if (isDesktopPickerMode()) {
      renderPickerDesktop(columns);
      return;
    }
    els.pickerColumns.innerHTML = "";
    picker.wheels = [];
    const count = columns.length;
    els.pickerColumns.hidden = false;
    els.pickerColumns.className = `picker-columns ${count === 1 ? "is-single" : count === 2 ? "is-double" : count === 3 ? "is-triple" : "is-four"}`;
    columns.forEach((column, index) => {
      const wrap = document.createElement("div");
      wrap.className = "picker-column";
      wrap.innerHTML = '<div class="picker-selected-line"></div>';
      const wheel = document.createElement("div");
      wheel.className = "picker-wheel";
      wheel.dataset.dragBlockUntil = "0";
      let dragState = null;

      wheel.addEventListener("pointerdown", event => {
        if (event.button !== 0) return;
        dragState = {
          pointerId: event.pointerId,
          startY: event.clientY,
          startScrollTop: wheel.scrollTop,
          moved: false,
        };
        wheel.classList.add("is-dragging");
        wheel.dataset.dragBlockUntil = "0";
        try {
          wheel.setPointerCapture(event.pointerId);
        } catch {}
      });

      const endDrag = () => {
        if (!dragState) return;
        if (dragState.moved) {
          wheel.dataset.dragBlockUntil = String(performance.now() + 160);
        }
        dragState = null;
        wheel.classList.remove("is-dragging");
      };

      wheel.addEventListener("pointermove", event => {
        if (!dragState || event.pointerId !== dragState.pointerId) return;
        const delta = event.clientY - dragState.startY;
        if (Math.abs(delta) > 4) dragState.moved = true;
        if (dragState.moved) {
          wheel.scrollTop = dragState.startScrollTop - delta;
          event.preventDefault();
        }
      });
      wheel.addEventListener("pointerup", endDrag);
      wheel.addEventListener("pointercancel", endDrag);
      wheel.addEventListener("lostpointercapture", endDrag);

      column.items.forEach(item => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "picker-item";
        button.dataset.value = String(item.value);
        button.textContent = column.render ? column.render(item) : String(item.label ?? item.value);
        button.addEventListener("click", () => {
          if (Number(wheel.dataset.dragBlockUntil || 0) > performance.now()) return;
          picker.selection[index] = column.parse ? column.parse(item.value) : item.value;
          updatePickerSelection();
          button.scrollIntoView({ block: "center", behavior: "smooth" });
        });
        wheel.appendChild(button);
      });
      let wheelFrame = 0;
      wheel.addEventListener("scroll", () => {
        if (wheelFrame) return;
        wheelFrame = requestAnimationFrame(() => {
          wheelFrame = 0;
          updatePickerSelection();
        });
      });
      wrap.appendChild(wheel);
      els.pickerColumns.appendChild(wrap);
      picker.wheels[index] = wheel;
    });

    requestAnimationFrame(() => {
      picker.wheels.forEach((wheel, index) => {
        const value = picker.selection[index];
        const match = [...wheel.querySelectorAll(".picker-item")].find(item => item.dataset.value === String(value));
        if (match) match.scrollIntoView({ block: "center" });
      });
      updatePickerSelection();
    });
  }

  function updatePickerSelection() {
    [...els.pickerColumns.querySelectorAll(".picker-column")].forEach((wrap, index) => {
      const wheel = wrap.querySelector(".picker-wheel");
      const items = [...wheel.querySelectorAll(".picker-item")];
      if (!items.length) return;
      const center = wheel.getBoundingClientRect().top + wheel.getBoundingClientRect().height / 2;
      let nearest = items[0];
      let best = Number.POSITIVE_INFINITY;
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const distance = Math.abs((rect.top + rect.height / 2) - center);
        item.classList.remove("is-active");
        if (distance < best) {
          best = distance;
          nearest = item;
        }
      });
      nearest.classList.add("is-active");
      const column = picker.columns[index];
      picker.selection[index] = column.parse ? column.parse(nearest.dataset.value) : nearest.dataset.value;
    });
    syncPickerManualInputs();
    applyPickerLivePreview();
  }

  function renderScenarioEditor() {
    els.pickerEditor.hidden = false;
    els.pickerColumns.hidden = true;
    els.pickerEditor.innerHTML = "";

    const draft = cloneScenario(picker.draftScenario && picker.draftScenario.length ? picker.draftScenario : state.scenario.length ? state.scenario : DEFAULT_SCENARIO);
    picker.draftScenario = draft;

    const list = document.createElement("div");
    list.className = "scenario-list";

    let hint = null;

    function syncScenarioDescription() {
      const total = draft.reduce((sum, step) => sum + Math.max(1, step.seconds), 0);
      els.pickerDesc.textContent = `${draft.length} steps · ${formatClock(total)} total. Choose a preset with the top selector or type any step name freely, then enter time as 90 or 1:30 and the steps will run from top to bottom in order.`;
    }

    function updateHint() {
      if (!hint) return;
      const total = draft.reduce((sum, step) => sum + Math.max(1, step.seconds), 0);
      hint.textContent = `${draft.length} steps · ${formatClock(total)}`;
      syncScenarioDescription();
    }

    const renderRows = () => {
      list.innerHTML = "";
      draft.forEach((step, index) => {
        const matchedPreset = SCENARIO_LABEL_PRESETS.find(option => option.toLowerCase() === String(step.label || "").trim().toLowerCase());
        if (!draft[index]._labelMode) {
          draft[index]._labelMode = matchedPreset ? "preset" : "custom";
        }
        const row = document.createElement("div");
        row.className = "scenario-step";

        const labelWrap = document.createElement("div");
        labelWrap.style.display = "grid";
        labelWrap.style.gap = "6px";
        labelWrap.style.minWidth = "0";

        const labelMetaRow = document.createElement("div");
        labelMetaRow.className = "scenario-meta-row";
        const labelMeta = document.createElement("div");
        labelMeta.className = "scenario-label";
        labelMeta.textContent = `STEP ${index + 1}`;
        const labelToggle = document.createElement("button");
        labelToggle.type = "button";
        labelToggle.className = "scenario-mode-toggle";
        labelToggle.textContent = "⇄";
        const labelModeText = document.createElement("span");
        labelModeText.className = "scenario-mode-text";
        labelMetaRow.append(labelMeta, labelModeText, labelToggle);

        const labelField = document.createElement("div");
        labelField.className = "scenario-label-field";
        const labelSelect = document.createElement("select");
        labelSelect.className = "scenario-preset";
        labelSelect.dataset.role = "preset";
        labelSelect.innerHTML = SCENARIO_LABEL_PRESETS.map(option => `<option value="${option}">${option}</option>`).join("");
        labelSelect.value = matchedPreset || SCENARIO_DEFAULT_PRESET;
        labelSelect.addEventListener("change", () => {
          draft[index].label = labelSelect.value;
          labelInput.value = labelSelect.value;
          draft[index]._labelMode = "preset";
          updateHint();
          applyPickerLivePreview();
        });
        const labelInput = document.createElement("input");
        labelInput.type = "text";
        labelInput.value = step.label;
        labelInput.placeholder = `Step ${index + 1}`;
        labelInput.spellcheck = false;
        labelInput.dataset.role = "label";
        labelInput.addEventListener("input", () => {
          draft[index].label = labelInput.value;
          const nextPreset = SCENARIO_LABEL_PRESETS.find(option => option.toLowerCase() === labelInput.value.trim().toLowerCase());
          labelSelect.value = nextPreset || SCENARIO_DEFAULT_PRESET;
          draft[index]._labelMode = nextPreset && draft[index]._labelMode !== "custom" ? "preset" : "custom";
          updateHint();
          applyPickerLivePreview();
        });
        const syncLabelMode = () => {
          const presetMode = draft[index]._labelMode === "preset";
          labelField.dataset.mode = presetMode ? "preset" : "custom";
          labelSelect.hidden = !presetMode;
          labelInput.hidden = presetMode;
          labelModeText.textContent = presetMode ? "FREE" : "PRESET";
          labelToggle.title = presetMode ? "Switch to free text" : "Switch to preset";
        };
        labelToggle.addEventListener("click", () => {
          draft[index]._labelMode = draft[index]._labelMode === "preset" ? "custom" : "preset";
          if (draft[index]._labelMode === "preset") {
            const livePreset = SCENARIO_LABEL_PRESETS.find(option => option.toLowerCase() === labelInput.value.trim().toLowerCase());
            labelSelect.value = livePreset || matchedPreset || SCENARIO_DEFAULT_PRESET;
            draft[index].label = labelSelect.value;
            labelInput.value = labelSelect.value;
          }
          syncLabelMode();
          if (draft[index]._labelMode === "custom") {
            labelInput.focus({ preventScroll: true });
          }
          updateHint();
          applyPickerLivePreview();
        });
        labelField.append(labelSelect, labelInput);
        syncLabelMode();
        labelWrap.append(labelMetaRow, labelField);

        const timeWrap = document.createElement("div");
        timeWrap.style.display = "grid";
        timeWrap.style.gap = "6px";
        timeWrap.style.minWidth = "0";

        const timeMeta = document.createElement("div");
        timeMeta.className = "scenario-label";
        timeMeta.textContent = "TIME";
        const timeInput = document.createElement("input");
        timeInput.type = "text";
        timeInput.inputMode = "text";
        timeInput.value = formatClock(step.seconds);
        timeInput.placeholder = "mm:ss";
        timeInput.dataset.role = "seconds";
        timeInput.classList.add("scenario-seconds");
        timeInput.addEventListener("input", () => {
          draft[index].seconds = Math.max(1, toSeconds(timeInput.value));
          updateHint();
          applyPickerLivePreview();
        });
        timeWrap.append(timeMeta, timeInput);

        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "scenario-remove";
        remove.textContent = "×";
        remove.title = "Remove step";
        remove.disabled = draft.length <= 1;
        remove.addEventListener("click", () => {
          if (draft.length <= 1) return;
          draft.splice(index, 1);
          renderRows();
          applyPickerLivePreview();
        });

        row.append(labelWrap, timeWrap, remove);
        list.appendChild(row);
      });

      updateHint();
    };

    renderRows();

    const add = document.createElement("button");
    add.type = "button";
    add.className = "scenario-add";
    add.textContent = "+ Add Step";
    add.addEventListener("click", () => {
      draft.push({
        label: SCENARIO_DEFAULT_PRESET,
        seconds: 60,
        _labelMode: "preset",
      });
      renderRows();
      applyPickerLivePreview();
    });

    hint = document.createElement("div");
    hint.className = "scenario-hint";
    updateHint();

    els.pickerEditor.append(list, add);
  }

  function openPicker(kind) {
    picker.kind = kind;
    picker.selectionFrame = 0;
    picker.activeColumn = 0;
    picker.returnToSettings = false;
    picker.presetId = null;
    picker.presetType = null;
    picker.presetUnit = "seconds";
    picker.presetName = "";
    picker.columns = [];
    picker.selection = [];
    picker.draftScenario = null;
    picker.alarmDraftConfig = null;
    setPickerPreviewSnapshot(kind);
    els.pickerOverlay.hidden = false;
    els.pickerEditor.hidden = true;
    els.pickerColumns.hidden = false;
    picker.manualInputs = [];
    picker.wheels = [];

    if (kind === "type") {
      els.pickerLabel.textContent = "Type";
      els.pickerDesc.textContent = "Choose the pulse";
      picker.columns = buildTypeColumns();
      picker.selection = [state.type];
      renderPicker(picker.columns);
      return;
    }

    if (kind === "font") {
      els.pickerLabel.textContent = "Font";
      els.pickerDesc.textContent = "Set the voice";
      picker.columns = buildFontColumns();
      picker.selection = [state.fontId];
      renderPicker(picker.columns);
      return;
    }

    if (kind === "size") {
      els.pickerLabel.textContent = "Scale";
      els.pickerDesc.textContent = "10% to 200%";
      picker.columns = buildScaleColumns();
      picker.selection = [state.size];
      renderPicker(picker.columns);
      return;
    }

    if (kind === "unit") {
      if (state.type === "clock") {
        els.pickerLabel.textContent = "Zone";
        els.pickerDesc.textContent = "Change the base timezone for the main clock";
        picker.kind = "clock-zone";
        const zoneItems = buildClockZoneItems();
        picker.columns = [{
          value: clockZonePickerValue(state.clock?.zoneId),
          items: zoneItems,
          itemClass: "is-zone-item",
          render: item => item.label,
          renderNode: item => renderClockZonePickerNode(item),
          parse: raw => String(raw),
        }];
        picker.selection = [picker.columns[0].value];
        renderPicker(picker.columns);
        return;
      }
      if (state.type === "alarm") {
        els.pickerLabel.textContent = "Repeat";
        els.pickerDesc.textContent = "Choose once, daily, weekdays, weekends, or a custom day set.";
        picker.kind = "alarm-repeat";
        picker.columns = [{
          value: alarmRepeatOptionById(state.alarm?.repeat).id,
          items: ALARM_REPEAT_OPTIONS.map(option => ({ value: option.id, label: option.label })),
          render: item => item.label,
          parse: raw => String(raw),
        }];
        picker.selection = [picker.columns[0].value];
        renderPicker(picker.columns);
        renderAlarmRepeatEditor(state.alarm);
        return;
      }
      els.pickerLabel.textContent = "Unit";
      els.pickerDesc.textContent = "Seconds or clock";
      picker.columns = buildUnitColumns();
      picker.selection = [state.unit];
      renderPicker(picker.columns);
      return;
    }

    if (kind === "panel") {
      els.pickerLabel.textContent = "Panel";
      els.pickerDesc.textContent = "Keep detail visible in minimal mode";
      picker.columns = buildPanelColumns();
      picker.selection = [state.detailPanelVisible ? "show" : "hide"];
      renderPicker(picker.columns);
      return;
    }

    if (kind === "sound") {
      const safe = sanitizeSoundSettings(appStore.future.sound);
      els.pickerLabel.textContent = "Sound";
      els.pickerDesc.textContent = "Mode and tone with live preview. Volume uses the slider.";
      picker.columns = buildSoundColumns();
      picker.selection = picker.columns.map(column => column.value);
      picker.soundVolume = safe.volume;
      soundPreviewSignature = `${safe.preset}|${safe.volume}|1`;
      renderPicker(picker.columns);
      renderSoundPickerVolumeEditor(safe.volume);
      return;
    }

    if (kind === "preset") {
      const presets = appStore.presets;
      if (!presets.length) {
        closePicker();
        openSettings();
        return;
      }
      const match = matchingPresetForCurrentSetup();
      els.pickerLabel.textContent = "Preset";
      els.pickerDesc.textContent = `${presets.length} presets · type, time, rounds, sound`;
      picker.columns = buildPresetColumns();
      picker.selection = [match?.id || presets[0].id];
      renderPicker(picker.columns);
      return;
    }

    if (kind === "time") {
      const activeKind = state.type;
      if (activeKind === "clock") {
        els.pickerLabel.textContent = "Cities";
        els.pickerDesc.textContent = "Choose the world city set";
        picker.kind = "clock-cityset";
        picker.columns = [{
          value: clockCitySetById(state.clock?.citySet).id,
          items: CLOCK_CITY_SET_OPTIONS.map(option => ({ value: option.id, label: option.label })),
          render: item => item.label,
          parse: raw => String(raw),
        }];
        picker.selection = [picker.columns[0].value];
        renderPicker(picker.columns);
        return;
      }
      if (activeKind === "alarm") {
        picker.kind = "alarm-time";
        picker.alarmIncludeRepeat = false;
        picker.alarmDraftConfig = normalizeTypeConfig("alarm", state.alarm);
        picker.alarmWeekdays = normalizeAlarmWeekdays(state.alarm?.weekdays);
        picker.alarmMessage = normalizeAlarmMessage(state.alarm?.message);
        els.pickerLabel.textContent = "Alarm";
        els.pickerDesc.textContent = alarmPickerDescription(picker.alarmDraftConfig, { includeRepeat: false });
        picker.columns = [];
        picker.selection = [];
        els.pickerColumns.hidden = true;
        els.pickerColumns.innerHTML = "";
        renderAlarmTimeEditor(state.alarm, { includeRepeat: false });
        return;
      }
      if (activeKind === "scenario") {
        picker.kind = "scenario";
        els.pickerLabel.textContent = "Scenario";
        els.pickerDesc.textContent = `${state.scenario.length} steps · ${formatClock(totalSecondsForType("scenario"))}`;
        renderScenarioEditor();
        return;
      }
      els.pickerLabel.textContent = "Time";
      picker.columns = buildTimeColumns(activeKind);
      picker.selection = picker.columns.map(column => column.value);
      els.pickerDesc.textContent = timePickerDescription(activeKind);
      renderPickerManualEditor(activeKind);
      if (isDesktopPickerMode()) {
        els.pickerColumns.hidden = true;
        els.pickerColumns.innerHTML = "";
      } else {
        renderPicker(picker.columns);
      }
      return;
    }

    if (kind === "scenario") {
      els.pickerLabel.textContent = "Scenario";
      els.pickerDesc.textContent = `${state.scenario.length} steps · ${formatClock(totalSecondsForType("scenario"))}`;
      renderScenarioEditor();
      return;
    }
  }

  function closePicker({ restorePreview = true } = {}) {
    const shouldReturnToSettings = picker.returnToSettings;
    const returnPresetType = picker.presetType;
    if (restorePreview) {
      restorePickerPreviewSnapshot();
    } else {
      clearPickerPreviewSnapshot();
    }
    els.pickerOverlay.hidden = true;
    els.pickerEditor.hidden = true;
    els.pickerColumns.hidden = false;
    els.pickerColumns.innerHTML = "";
    els.pickerEditor.innerHTML = "";
    picker.kind = null;
    picker.columns = [];
    picker.selection = [];
    picker.draftScenario = null;
    picker.returnToSettings = false;
    picker.presetId = null;
    picker.presetType = null;
    picker.presetUnit = "seconds";
    picker.presetName = "";
    picker.wheels = [];
    picker.manualInputs = [];
    picker.activeColumn = 0;
    picker.soundVolume = sanitizeSoundSettings(appStore.future.sound).volume;
    picker.alarmWeekdays = normalizeAlarmWeekdays(state.alarm?.weekdays);
    picker.alarmMessage = normalizeAlarmMessage(state.alarm?.message);
    picker.alarmIncludeRepeat = false;
    picker.alarmDraftConfig = null;
    els.pickerOverlay.classList.remove("is-legible");
    if (shouldReturnToSettings) {
      if (returnPresetType) settingsUi.presetType = returnPresetType;
      openSettings({ preserveType: true });
    }
  }

  function confirmPicker() {
    if (!picker.kind) {
      closePicker();
      return;
    }

    if (picker.kind === "type") {
      state.type = String(picker.selection[0] || "countdown");
      updateAllUI();
      persistStore();
      closePicker({ restorePreview: false });
      resetToIdleState();
      return;
    }

    if (picker.kind === "font") {
      setFont(String(picker.selection[0] || state.fontId));
      updateAllUI();
      persistStore();
      closePicker({ restorePreview: false });
      return;
    }

    if (picker.kind === "size") {
      setScale(Number(picker.selection[0] || state.size));
      updateAllUI();
      persistStore();
      closePicker({ restorePreview: false });
      return;
    }

    if (picker.kind === "unit") {
      setUnit(String(picker.selection[0] || "seconds"));
      updateAllUI();
      persistStore();
      closePicker({ restorePreview: false });
      return;
    }

    if (picker.kind === "panel") {
      state.detailPanelVisible = String(picker.selection[0] || "hide") === "show";
      updateAllUI();
      persistStore();
      closePicker({ restorePreview: false });
      return;
    }

    if (picker.kind === "alarm-repeat") {
      updateSelectedAlarm({
        ...state.alarm,
        repeat: picker.selection[0],
        weekdays: picker.alarmWeekdays,
      });
      updateAllUI();
      persistStore();
      closePicker({ restorePreview: false });
      resetToIdleState();
      return;
    }

    if (picker.kind === "clock-zone") {
      state.clock = {
        ...state.clock,
        zoneId: clockZoneOptionById(picker.selection[0]).id,
      };
      updateAllUI();
      persistStore();
      closePicker({ restorePreview: false });
      return;
    }

    if (picker.kind === "clock-cityset") {
      state.clock = {
        ...state.clock,
        citySet: clockCitySetById(picker.selection[0]).id,
      };
      updateAllUI();
      persistStore();
      closePicker({ restorePreview: false });
      return;
    }

    if (picker.kind === "preset") {
      const preset = appStore.presets.find(item => item.id === String(picker.selection[0] || ""));
      if (preset) {
        applyStoredSetup({
          type: preset.type,
          unit: preset.unit,
          config: preset.config,
          sound: preset.sound,
          fontId: preset.fontId,
          size: preset.size,
        });
        logHistory("preset_loaded", {
          type: preset.type,
          summary: preset.name,
          note: formatPresetSummary(preset.type, preset.config),
          snapshot: {
            type: preset.type,
            unit: preset.unit,
            config: preset.config,
            sound: preset.sound,
            fontId: preset.fontId,
            size: preset.size,
          },
        });
      }
      closePicker({ restorePreview: false });
      return;
    }

    if (picker.kind === "sound") {
      const openedSound = sanitizeSoundSettings(
        picker.previewSnapshot?.sound || appStore.future.sound,
      );
      const openedMode = soundModeLabel(openedSound);
      applySoundSelection(picker.selection[0], picker.selection[1], picker.soundVolume);
      const afterMode = soundModeLabel(appStore.future.sound);
      persistStore();
      closePicker({ restorePreview: false });
      if (afterMode !== openedMode) {
        showPresetToast({
          kind: "saved",
          title: "Sound updated",
          detail: afterMode,
        });
      }
      return;
    }

    if (picker.kind === "preset-config") {
      const preset = appStore.presets.find(item => item.id === picker.presetId);
      if (!preset) {
        closePicker();
        return;
      }
      const nextConfig = picker.presetType === "alarm"
        ? normalizeTypeConfig("alarm", picker.alarmDraftConfig || preset.config)
        : commitTimeValuesToConfig(picker.presetType, picker.selection, picker.presetUnit);
      const duplicate = findPresetByComposition({
        type: preset.type,
        unit: picker.presetUnit,
        config: nextConfig,
        sound: preset.sound,
        fontId: preset.fontId,
        size: preset.size,
        excludeId: preset.id,
      });
      if (duplicate) {
        showPresetToast({
          kind: "error",
          title: "Already saved",
          detail: `${duplicate.name} · ${formatPresetVisualSummary(duplicate)}`,
        });
        return;
      }
      const nextPreset = savePresetRecord({
        id: preset.id,
        name: preset.name,
        type: preset.type,
        unit: picker.presetUnit,
        config: nextConfig,
        sound: preset.sound,
        fontId: preset.fontId,
        size: preset.size,
        createdAt: preset.createdAt,
      });
      renderSettingsUI();
      updateAllUI();
      logHistory("preset_saved", {
        type: nextPreset.type,
        summary: nextPreset.name,
        note: formatPresetSummary(nextPreset.type, nextPreset.config),
        snapshot: {
          type: nextPreset.type,
          unit: nextPreset.unit,
          config: nextPreset.config,
          sound: nextPreset.sound,
          fontId: nextPreset.fontId,
          size: nextPreset.size,
        },
      });
      closePicker({ restorePreview: false });
      return;
    }

    if (picker.kind === "time") {
      commitTimeValues(state.type, picker.selection);
      updateAllUI();
      persistStore();
      closePicker({ restorePreview: false });
      resetToIdleState();
      return;
    }

    if (picker.kind === "alarm-time") {
      updateSelectedAlarm(normalizeTypeConfig("alarm", picker.alarmDraftConfig || state.alarm));
      updateAllUI();
      persistStore();
      closePicker({ restorePreview: false });
      resetToIdleState();
      return;
    }

    if (picker.kind === "scenario") {
      const steps = collectScenarioStepsFromEditor();
      state.scenario = steps.length ? steps : cloneScenario(DEFAULT_SCENARIO);
      updateAllUI();
      persistStore();
      closePicker({ restorePreview: false });
      resetToIdleState();
      return;
    }

    if (picker.kind === "preset-scenario") {
      const preset = appStore.presets.find(item => item.id === picker.presetId);
      if (!preset) {
        closePicker();
        return;
      }
      const steps = collectScenarioStepsFromEditor();
      const nextConfig = { steps: steps.length ? steps : cloneScenario(DEFAULT_SCENARIO) };
      const duplicate = findPresetByComposition({
        type: "scenario",
        unit: preset.unit,
        config: nextConfig,
        sound: preset.sound,
        fontId: preset.fontId,
        size: preset.size,
        excludeId: preset.id,
      });
      if (duplicate) {
        showPresetToast({
          kind: "error",
          title: "Already saved",
          detail: `${duplicate.name} · ${formatPresetVisualSummary(duplicate)}`,
        });
        return;
      }
      const nextPreset = savePresetRecord({
        id: preset.id,
        name: preset.name,
        type: "scenario",
        unit: preset.unit,
        config: nextConfig,
        sound: preset.sound,
        fontId: preset.fontId,
        size: preset.size,
        createdAt: preset.createdAt,
      });
      renderSettingsUI();
      updateAllUI();
      logHistory("preset_saved", {
        type: nextPreset.type,
        summary: nextPreset.name,
        note: formatPresetSummary(nextPreset.type, nextPreset.config),
        snapshot: {
          type: nextPreset.type,
          unit: nextPreset.unit,
          config: nextPreset.config,
          sound: nextPreset.sound,
          fontId: nextPreset.fontId,
          size: nextPreset.size,
        },
      });
      closePicker({ restorePreview: false });
      return;
    }
  }

  function initControls() {
    const hydration = hydrateStore();
    if (!hydration.loaded || !hydration.hasSize) {
      state.size = DEFAULT_STATE.size;
    }
    initClockMeridiemObservers();
    appStore.future.sound = sanitizeSoundSettings({
      ...appStore.future.sound,
      enabled: false,
    });

    document.body.classList.remove("mobile-controls-open");
    document.body.classList.toggle("is-minimal", !state.uiVisible);
    syncSideRailPlacement();
    setFont(state.fontId);
    setScale(state.size);
    setUnit(state.unit);
    updateAllUI();
    resetToIdleState();
    renderSettingsUI();

    updateUnitSegmentFromClicks();
    els.clockAnimButton?.addEventListener("click", () => openPicker("unit"));
    els.clockHourSegment?.addEventListener("click", event => {
      const button = event.target.closest("button[data-clock-hour]");
      if (!button) return;
      state.clock = {
        ...state.clock,
        hourCycle: clockHourOptionById(button.dataset.clockHour).id,
      };
      ensureClockTicker({ force: true });
      updateAllUI();
      persistStore();
    });
    els.clockPrecisionSegment?.addEventListener("click", event => {
      const button = event.target.closest("button[data-clock-precision]");
      if (!button) return;
      state.clock = {
        ...state.clock,
        precision: clockPrecisionOptionById(button.dataset.clockPrecision).id,
      };
      ensureClockTicker({ force: true });
      updateAllUI();
      persistStore();
    });
    els.clockWorldSegment?.addEventListener("click", event => {
      const button = event.target.closest("button[data-clock-world]");
      if (!button) return;
      state.clock = {
        ...state.clock,
        showWorld: (button.dataset.clockWorld || "show") !== "hide",
      };
      renderClockWorld(new Date());
      updateAllUI();
      persistStore();
    });

    els.typeButton.addEventListener("click", () => openPicker("type"));
    els.fontButton?.addEventListener("click", () => openPicker("font"));
    els.sizeButton?.addEventListener("click", () => openPicker("size"));
    els.timeButton.addEventListener("click", () => openPicker("time"));
    els.presetButton?.addEventListener("click", () => openPicker("preset"));
    els.presetSaveBtn?.addEventListener("click", () => quickSaveCurrentPreset());
    els.panelButton?.addEventListener("click", () => openPicker("panel"));
    els.dockTypeBtn.addEventListener("click", () => openPicker("type"));
    els.dockFontBtn.addEventListener("click", () => openPicker("font"));
    els.dockSizeBtn.addEventListener("click", () => openPicker("size"));
    els.dockUnitBtn.addEventListener("click", () => openPicker("unit"));
    els.dockPresetBtn?.addEventListener("click", () => openPicker("preset"));
    els.dockPresetSaveBtn?.addEventListener("click", () => quickSaveCurrentPreset());
    els.dockPanelBtn?.addEventListener("click", () => openPicker("panel"));
    els.dockTimeBtn.addEventListener("click", () => openPicker("time"));
    els.settingsOpenBtn?.addEventListener("click", () => openSettings());
    els.railPresetBtn?.addEventListener("click", () => openPicker("preset"));
    els.railSoundBtn?.addEventListener("click", () => openPicker("sound"));
    els.railPresetSaveBtn?.addEventListener("click", () => quickSaveCurrentPreset());
    els.soundPill?.addEventListener("click", () => openPicker("sound"));

    els.applyBtn.addEventListener("click", () => applyAndStart());
    els.stopwatchStartBtn?.addEventListener("click", () => {
      if (state.type === "stopwatch" && runtime.phase === "running") {
        stopStopwatch();
        return;
      }
      applyAndStart();
    });
    els.stagePauseBtn?.addEventListener("click", () => {
      if (runtime.phase === "running") {
        pauseTimer();
        return;
      }
      if (runtime.phase === "paused") {
        resumeTimer();
      }
    });
    els.stageResetBtn?.addEventListener("click", () => resetToIdleState({ log: true }));
    els.stageSkipBtn?.addEventListener("click", () => skipCurrentPhase());
    els.sequenceVisibilityBtn?.addEventListener("click", () => toggleDetailPanel(false));
    els.sequenceCollapsedBtn?.addEventListener("click", () => toggleDetailPanel(true));
    els.uiToggle.addEventListener("click", () => toggleMinimal());
    els.stopwatchResetBtn?.addEventListener("click", () => resetStopwatch());
    els.stopwatchLapBtn?.addEventListener("click", () => captureStopwatchLap());
    els.stopwatchBestChip?.addEventListener("click", () => toggleStopwatchSort("best"));
    els.stopwatchWorstChip?.addEventListener("click", () => toggleStopwatchSort("worst"));
    els.alarmDisplayToggleBtn?.addEventListener("click", () => {
      state.alarmDisplayMode = alarmUsesClockDisplay() ? "countdown" : "clock";
      updateAllUI();
      persistStore();
    });
    els.alarmCards?.addEventListener("click", event => {
      const target = event.target.closest("[data-alarm-action]");
      if (!target) return;
      const action = target.dataset.alarmAction;
      const alarmId = target.dataset.alarmId;
      if (action === "select" && alarmId) {
        setSelectedAlarmEntry(alarmId);
        updateAllUI();
        persistStore();
        return;
      }
      if (action === "add") {
        addAlarmEntry(state.alarm);
        updateAllUI();
        persistStore();
        if (runtime.plan?.kind === "alarm" && runtime.phase !== "idle") {
          resetToIdleState();
        }
        return;
      }
      if (action === "delete" && alarmId) {
        const removed = removeAlarmEntry(alarmId);
        if (!removed) return;
        updateAllUI();
        persistStore();
        if (runtime.plan?.kind === "alarm" && runtime.phase !== "idle") {
          resetToIdleState();
        }
      }
    });
    els.alarmSnoozeBtn?.addEventListener("click", () => snoozeAlarm());
    els.alarmDismissBtn?.addEventListener("click", () => dismissAlarm());
    els.timerButton.addEventListener("click", () => {
      if (state.type === "clock") {
        ensureClockTicker({ force: true });
        return;
      }
      if (runtime.phase === "running") {
        pauseTimer();
        return;
      }
      if (runtime.phase === "paused") {
        resumeTimer();
        return;
      }
      applyAndStart();
    });

    els.pickerClose.addEventListener("click", closePicker);
    els.pickerCancel.addEventListener("click", closePicker);
    els.pickerConfirm.addEventListener("click", confirmPicker);
    els.pickerOverlay.addEventListener("click", event => {
      if (event.target === els.pickerOverlay) closePicker();
    });
    els.settingsCloseBtn?.addEventListener("click", () => closeSettings());
    els.settingsOverlay?.addEventListener("click", event => {
      if (event.target === els.settingsOverlay) closeSettings();
    });
    els.settingsPresetTypeButton?.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      toggleSettingsPresetTypeMenu();
    });
    els.settingsSoundToneButton?.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      toggleSettingsSoundToneMenu();
    });
    els.settingsClockAmPmButton?.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      toggleSettingsClockAmPmMenu();
    });
    els.settingsPresetType?.addEventListener("change", () => {
      settingsUi.presetType = normalizeType(els.settingsPresetType.value);
      renderSettingsUI();
    });
    els.settingsClockAmPmStyle?.addEventListener("change", () => {
      state.clock = {
        ...state.clock,
        ampmStyle: clockAmPmStyleOptionById(els.settingsClockAmPmStyle.value).id,
      };
      ensureClockTicker({ force: true });
      updateAllUI();
      persistStore();
      renderSettingsClockControls();
    });
    els.settingsSavePresetBtn?.addEventListener("click", () => saveCurrentPreset());
    els.settingsPresetName?.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        event.preventDefault();
        saveCurrentPreset();
      }
    });
    els.settingsClearHistoryBtn?.addEventListener("click", () => {
      if (!appStore.history.length) return;
      if (window.confirm("Clear saved history?")) {
        appStore.history = [];
        persistStore();
        renderSettingsUI();
      }
    });
    els.settingsSoundToggleBtn?.addEventListener("click", () => {
      const safe = sanitizeSoundSettings(appStore.future.sound);
      updateSoundSetting(
        { enabled: !safe.enabled },
        {
          preview: true,
          forcePreview: true,
          rerenderSettings: true,
        },
      );
    });
    els.settingsSoundPreset?.addEventListener("change", () => {
      const option = soundOptionById(els.settingsSoundPreset.value);
      updateSoundSetting(
        { preset: option.id },
        {
          preview: true,
          previewWhileMuted: true,
          forcePreview: true,
          rerenderSettings: true,
        },
      );
    });
    const onSoundVolumeInput = () => {
      const volume = clampSoundVolume(els.settingsSoundVolume?.value);
      updateSoundSetting(
        { volume },
        {
          preview: true,
          previewWhileMuted: true,
          forcePreview: true,
        },
      );
    };
    els.settingsSoundVolume?.addEventListener("input", onSoundVolumeInput);
    els.settingsSoundVolume?.addEventListener("change", onSoundVolumeInput);
    els.settingsSoundPreviewBtn?.addEventListener("click", () => {
      queueSoundPreview({ ...appStore.future.sound, enabled: true }, { force: true });
    });

    const restoreUiFromMinimalTap = event => {
      if (!document.body.classList.contains("is-minimal")) return;
      if (!els.pickerOverlay.hidden || !els.settingsOverlay.hidden) return;
      if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent && event.button !== 0) return;
      event.preventDefault();
      event.stopPropagation();
      toggleMinimal(false);
    };

    document.addEventListener("pointerdown", restoreUiFromMinimalTap, { capture: true });
    document.addEventListener("touchstart", restoreUiFromMinimalTap, { capture: true, passive: false });

    document.addEventListener("click", event => {
      if (els.settingsOverlay && !els.settingsOverlay.hidden && els.settingsPresetTypeMenu && !els.settingsPresetTypeMenu.hidden) {
        const target = event.target;
        if (target instanceof Element && !target.closest("#settingsPresetTypePicker")) {
          closeSettingsPresetTypeMenu();
        }
      }
      if (els.settingsOverlay && !els.settingsOverlay.hidden && els.settingsSoundToneMenu && !els.settingsSoundToneMenu.hidden) {
        const target = event.target;
        if (target instanceof Element && !target.closest("#settingsSoundTonePicker")) {
          closeSettingsSoundToneMenu();
        }
      }
      if (els.settingsOverlay && !els.settingsOverlay.hidden && els.settingsClockAmPmMenu && !els.settingsClockAmPmMenu.hidden) {
        const target = event.target;
        if (target instanceof Element && !target.closest("#settingsClockAmPmPicker")) {
          closeSettingsClockAmPmMenu();
        }
      }
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !els.settingsOverlay.hidden) {
        if (els.settingsPresetTypeMenu && !els.settingsPresetTypeMenu.hidden) {
          closeSettingsPresetTypeMenu();
          return;
        }
        if (els.settingsSoundToneMenu && !els.settingsSoundToneMenu.hidden) {
          closeSettingsSoundToneMenu();
          return;
        }
        if (els.settingsClockAmPmMenu && !els.settingsClockAmPmMenu.hidden) {
          closeSettingsClockAmPmMenu();
          return;
        }
        closeSettings();
        return;
      }
      if (event.key === "Escape" && !els.pickerOverlay.hidden) {
        closePicker();
        return;
      }
      if (!els.settingsOverlay.hidden) return;
      if (els.alarmOverlay && !els.alarmOverlay.hidden) {
        if (event.key === "2") {
          event.preventDefault();
          snoozeAlarm();
          return;
        }
        if (event.key === "3" || event.key === "Escape") {
          event.preventDefault();
          dismissAlarm();
          return;
        }
        if (event.key === "1" || event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
          event.preventDefault();
          return;
        }
      }
      if (!els.pickerOverlay.hidden && picker.columns.length) {
        if (event.key === "ArrowUp") {
          event.preventDefault();
          movePickerSelection(-1);
          return;
        }
        if (event.key === "ArrowDown") {
          event.preventDefault();
          movePickerSelection(1);
          return;
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          movePickerColumn(-1);
          return;
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          movePickerColumn(1);
          return;
        }
      }
      if (!els.pickerOverlay.hidden && event.key === "Enter") {
        event.preventDefault();
        confirmPicker();
        return;
      }
      const target = event.target;
      const isTypingTarget = target instanceof HTMLElement && (
        target.isContentEditable ||
        Boolean(target.closest("input,textarea,select,[contenteditable='true']"))
      );
      if (isTypingTarget) return;

      if (event.key.toLowerCase() === "u") {
        toggleMinimal();
        return;
      }
      if (els.pickerOverlay.hidden && (event.key === "Enter" || event.key === " " || event.key === "Spacebar" || event.key === "1")) {
        event.preventDefault();
        applyAndStart();
        return;
      }
      if (els.pickerOverlay.hidden && state.type !== "stopwatch" && event.key === "2") {
        event.preventDefault();
        if (runtime.phase === "running") {
          pauseTimer();
        } else if (runtime.phase === "paused") {
          resumeTimer();
        }
        return;
      }
      if (els.pickerOverlay.hidden && state.type !== "stopwatch" && event.key === "3") {
        event.preventDefault();
        if (isSequenceDetailType()) {
          skipCurrentPhase();
        } else {
          resetToIdleState({ log: true });
        }
        return;
      }
      if (els.pickerOverlay.hidden && state.type !== "stopwatch" && event.key === "4") {
        if (!isSequenceDetailType()) return;
        event.preventDefault();
        resetToIdleState({ log: true });
        return;
      }
      if (!els.pickerOverlay.hidden || state.type !== "stopwatch") return;
      if (event.key === "2") {
        event.preventDefault();
        captureStopwatchLap();
        return;
      }
      if (event.key === "3") {
        event.preventDefault();
        resetStopwatch();
        return;
      }
    });

    window.addEventListener("resize", () => {
      syncSideRailPlacement();
      updateAllUI();
      scheduleAlarmDisplayTogglePosition();
      syncMinimalUI();
    }, { passive: true });

    syncMinimalUI();
    resetToIdleState();
  }

  function makeNumberItems(min, max, step = 1, format = value => String(value)) {
    const items = [];
    for (let value = min; value <= max; value += step) {
      items.push({ value, label: format(value) });
    }
    return items;
  }

  function buildDurationValues(maxSeconds) {
    const values = new Set();
    const ranges = [
      [0, Math.min(maxSeconds, 60), 1],
      [65, Math.min(maxSeconds, 300), 5],
      [330, Math.min(maxSeconds, 900), 15],
      [960, Math.min(maxSeconds, 3600), 60],
      [3900, maxSeconds, 300],
    ];
    for (const [start, end, step] of ranges) {
      if (start > end) continue;
      for (let value = start; value <= end; value += step) values.add(value);
    }
    values.add(maxSeconds);
    return [...values].sort((a, b) => a - b);
  }

  function durationLabel(seconds, unit, allowInfinity = false) {
    if (allowInfinity && seconds === 0) return "INF";
    return unit === "clock" ? formatClock(seconds) : formatUnitTime(seconds);
  }

  function buildSingleDurationColumn(currentSeconds, maxSeconds, allowInfinity = false, unit = state.unit) {
    return {
      value: currentSeconds,
      items: buildDurationValues(maxSeconds).map(value => ({
        value,
        label: durationLabel(value, unit, allowInfinity),
      })),
      render: item => item.label,
      parse: raw => Number(raw),
    };
  }

  function buildClockColumns(currentSeconds) {
    const total = Math.max(0, Math.floor(currentSeconds));
    const hours = Math.min(99, Math.floor(total / 3600));
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;
    return [
      {
        value: hours,
        items: makeNumberItems(0, 99, 1, value => String(value).padStart(2, "0")),
        render: item => item.label,
        parse: raw => Number(raw),
      },
      {
        value: minutes,
        items: makeNumberItems(0, 59, 1, value => String(value).padStart(2, "0")),
        render: item => item.label,
        parse: raw => Number(raw),
      },
      {
        value: seconds,
        items: makeNumberItems(0, 59, 1, value => String(value).padStart(2, "0")),
        render: item => item.label,
        parse: raw => Number(raw),
      },
    ];
  }

  function buildCountColumn(currentValue, maxValue, allowInfinity = false, unit = state.unit) {
    return {
      value: currentValue,
      items: buildDurationValues(maxValue).map(value => ({
        value,
        label: allowInfinity && value === 0 ? "INF" : durationLabel(value, unit, false),
      })),
      render: item => item.label,
      parse: raw => Number(raw),
    };
  }

  function buildTypeColumns() {
    return [{
      value: state.type,
      items: TYPE_OPTIONS.map(option => ({ value: option.value, label: option.label })),
      render: item => item.label,
      parse: raw => String(raw),
    }];
  }

  function buildFontColumns() {
    return [{
      value: state.fontId,
      items: FONT_OPTIONS.map(font => ({ value: font.id, label: font.label })),
      render: item => item.label,
      parse: raw => String(raw),
    }];
  }

  function buildScaleColumns() {
    return [{
      value: state.size,
      items: SIZE_OPTIONS.map(value => ({ value, label: formatScaleLabel(value) })),
      render: item => item.label,
      parse: raw => Number(raw),
    }];
  }

  function buildUnitColumns() {
    return [{
      value: state.unit,
      items: UNIT_OPTIONS.map(option => ({ value: option.value, label: option.label })),
      render: item => item.label,
      parse: raw => String(raw),
    }];
  }

  function buildPanelColumns() {
    return [{
      value: state.detailPanelVisible ? "show" : "hide",
      items: PANEL_OPTIONS.map(option => ({ value: option.value, label: option.label })),
      render: item => item.label,
      parse: raw => String(raw),
    }];
  }

  function buildSoundColumns() {
    const safe = sanitizeSoundSettings(appStore.future.sound);
    return [
      {
        value: safe.enabled ? "sound" : "mute",
        items: [
          { value: "sound", label: "♪ SOUND" },
          { value: "mute", label: "MUTE" },
        ],
        render: item => item.label,
        parse: raw => String(raw),
      },
      {
        value: safe.preset,
        items: SOUND_OPTIONS.map(option => ({
          value: option.id,
          label: option.label,
        })),
        render: item => item.label,
        parse: raw => String(raw),
      },
    ];
  }

  function alarmSelectionFromConfig(config = state.alarm, { includeRepeat = false } = {}) {
    const safe = normalizeTypeConfig("alarm", config);
    const hour = Math.floor(safe.timeMinutes / 60);
    const minute = safe.timeMinutes % 60;
    return includeRepeat
      ? [safe.repeat, hour, minute, safe.snoozeMinutes]
      : [hour, minute, safe.snoozeMinutes];
  }

  function alarmConfigFromSelection(selection, { baseConfig = state.alarm, includeRepeat = false } = {}) {
    const safe = normalizeTypeConfig("alarm", baseConfig);
    let index = 0;
    const repeat = includeRepeat ? alarmRepeatOptionById(selection[index++]).id : safe.repeat;
    const hour = clamp(Math.floor(Number(selection[index++]) || 0), 0, 23);
    const minute = clamp(Math.floor(Number(selection[index++]) || 0), 0, 59);
    const snoozeMinutes = clamp(Math.floor(Number(selection[index]) || safe.snoozeMinutes), 1, 60);
    return normalizeTypeConfig("alarm", {
      ...safe,
      repeat,
      weekdays: picker.alarmWeekdays?.length ? picker.alarmWeekdays : safe.weekdays,
      message: picker.alarmMessage || safe.message,
      timeMinutes: hour * 60 + minute,
      snoozeMinutes,
    });
  }

  function renderAlarmRepeatEditor(config = state.alarm) {
    const safe = normalizeTypeConfig("alarm", config);
    if (safe.scheduleMode !== "time") {
      picker.alarmDraftConfig = safe;
      els.pickerEditor.hidden = false;
      els.pickerEditor.innerHTML = "";
      const wrap = document.createElement("div");
      wrap.className = "alarm-editor";
      const note = document.createElement("div");
      note.className = "picker-manual-hint";
      note.textContent = safe.scheduleMode === "relative"
        ? "Repeat applies to clock-time alarms. The current alarm is set to ring after a relative offset."
        : safe.scheduleMode === "hourly"
          ? "Hourly alarms already repeat every hour. Use TARGET MIN and BEFORE in the main alarm editor instead."
          : "Repeat applies to clock-time alarms. The current alarm is set to a specific date.";
      wrap.appendChild(note);
      els.pickerEditor.append(wrap);
      requestAnimationFrame(updatePickerLegibility);
      return;
    }
    const repeat = alarmRepeatOptionById(picker.selection[0] || safe.repeat).id;
    const customDays = normalizeAlarmWeekdays(picker.alarmWeekdays?.length ? picker.alarmWeekdays : safe.weekdays);
    picker.alarmWeekdays = customDays;
    picker.alarmDraftConfig = safe;
    els.pickerEditor.hidden = false;
    els.pickerEditor.innerHTML = "";

    const wrap = document.createElement("div");
    wrap.className = "alarm-editor";

    const note = document.createElement("div");
    note.className = "picker-manual-hint";
    note.textContent = repeat === "custom"
      ? "Choose the days that should ring. Enter confirms."
      : "Pick the cadence for this alarm. Switch to CUSTOM if you want exact weekdays.";

    const days = document.createElement("div");
    days.className = "alarm-weekdays";
    ALARM_WEEKDAY_OPTIONS.forEach(option => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "alarm-weekday";
      button.textContent = option.label;
      const active = customDays.includes(option.id);
      button.classList.toggle("is-active", active);
      button.disabled = repeat !== "custom";
      button.addEventListener("click", () => {
        if (repeat !== "custom") return;
        const next = new Set(picker.alarmWeekdays);
        if (next.has(option.id)) {
          next.delete(option.id);
        } else {
          next.add(option.id);
        }
        picker.alarmWeekdays = normalizeAlarmWeekdays([...next], customDays);
        renderAlarmRepeatEditor(alarmConfigFromSelection(picker.selection, {
          baseConfig: { ...safe, weekdays: picker.alarmWeekdays },
          includeRepeat: true,
        }));
        applyPickerLivePreview();
      });
      days.appendChild(button);
    });

    wrap.append(note, days);
    els.pickerEditor.append(wrap);
    requestAnimationFrame(updatePickerLegibility);
  }

  function renderAlarmTimeEditor(config = state.alarm, { includeRepeat = false } = {}) {
    const safe = normalizeTypeConfig("alarm", config);
    picker.alarmDraftConfig = safe;
    picker.alarmMessage = normalizeAlarmMessage(safe.message);
    picker.alarmWeekdays = normalizeAlarmWeekdays(safe.weekdays);
    picker.alarmIncludeRepeat = includeRepeat;
    picker.manualInputs = [];
    els.pickerEditor.hidden = false;
    els.pickerColumns.hidden = true;
    els.pickerColumns.innerHTML = "";
    els.pickerEditor.innerHTML = "";
    els.pickerDesc.textContent = alarmPickerDescription(safe, { includeRepeat });

    const wrap = document.createElement("div");
    wrap.className = "alarm-editor";

    const applyDraft = (nextConfig, { rerender = false, previewSound = null } = {}) => {
      picker.alarmDraftConfig = normalizeTypeConfig("alarm", {
        ...picker.alarmDraftConfig,
        ...nextConfig,
      });
      picker.alarmMessage = normalizeAlarmMessage(picker.alarmDraftConfig.message);
      picker.alarmWeekdays = normalizeAlarmWeekdays(picker.alarmDraftConfig.weekdays);
      applyPickerLivePreview();
      if (rerender) {
        renderAlarmTimeEditor(picker.alarmDraftConfig, { includeRepeat });
      }
      if (previewSound) {
        queueSoundPreview(previewSound, { force: true });
      }
    };

    const modeSegment = document.createElement("div");
    modeSegment.className = "clock-segmented";
    modeSegment.style.gridTemplateColumns = "repeat(4,minmax(0,1fr))";
    [
      { id: "time", label: "AT" },
      { id: "relative", label: "IN" },
      { id: "date", label: "DATE" },
      { id: "hourly", label: "HOURLY" },
    ].forEach(option => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = option.label;
      button.classList.toggle("is-active", picker.alarmDraftConfig.scheduleMode === option.id);
      button.addEventListener("click", () => {
        const nextMode = option.id;
        const nextConfig = {
          scheduleMode: nextMode,
          repeat: nextMode === "time" ? picker.alarmDraftConfig.repeat : "once",
        };
        if (nextMode === "hourly") {
          nextConfig.hourlyMinute = picker.alarmDraftConfig.hourlyMinute;
          nextConfig.hourlyLeadMinutes = picker.alarmDraftConfig.hourlyLeadMinutes;
        }
        if (nextMode === "date" && !picker.alarmDraftConfig.targetDate) {
          nextConfig.targetDate = alarmDateInputValue();
        }
        applyDraft(nextConfig, { rerender: true });
      });
      modeSegment.appendChild(button);
    });

    const modeWrap = document.createElement("div");
    modeWrap.className = "alarm-mode-panel";
    const modeCopy = document.createElement("div");
    modeCopy.className = "alarm-mode-copy";
    const modeLabel = document.createElement("span");
    modeLabel.className = "scenario-label";
    modeLabel.textContent = "SCHEDULE";
    const modeNote = document.createElement("strong");
    modeNote.className = "alarm-mode-note";
    modeNote.textContent = picker.alarmDraftConfig.scheduleMode === "relative"
      ? "Ring after a short offset from now"
      : picker.alarmDraftConfig.scheduleMode === "date"
        ? "Ring once on a specific calendar date"
        : picker.alarmDraftConfig.scheduleMode === "hourly"
          ? "Ring on the same minute every hour, with optional lead time"
          : "Ring at a clock time";
    modeCopy.append(modeLabel, modeNote);
    modeWrap.append(modeCopy, modeSegment);

    const grid = document.createElement("div");
    grid.className = "picker-manual is-three";
    const addNumberField = ({ label, value, min, max, onInput }) => {
      const card = document.createElement("label");
      card.className = "picker-manual-field";
      const title = document.createElement("span");
      title.textContent = label;
      const input = document.createElement("input");
      input.type = "number";
      input.inputMode = "numeric";
      input.min = String(min);
      input.max = String(max);
      input.step = "1";
      input.value = String(value);
      input.addEventListener("input", () => {
        const next = clamp(Math.floor(Number(input.value) || 0), min, max);
        input.value = String(next);
        onInput(next);
      });
      card.append(title, input);
      grid.appendChild(card);
    };

    const quickRow = document.createElement("div");
    quickRow.className = "alarm-quick-row";
    quickRow.classList.toggle("is-reserved", picker.alarmDraftConfig.scheduleMode !== "relative");
    [
      { label: "15m", minutes: 15 },
      { label: "30m", minutes: 30 },
      { label: "1h", minutes: 60 },
      { label: "8h", minutes: 480 },
    ].forEach(option => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "alarm-quick-button";
      button.textContent = option.label;
      button.addEventListener("click", () => {
        applyDraft({ offsetMinutes: option.minutes }, { rerender: true });
      });
      quickRow.appendChild(button);
    });

    if (picker.alarmDraftConfig.scheduleMode === "relative") {
      const offsetHours = Math.floor(picker.alarmDraftConfig.offsetMinutes / 60);
      const offsetMinutes = picker.alarmDraftConfig.offsetMinutes % 60;
      addNumberField({
        label: "FROM HOUR",
        value: offsetHours,
        min: 0,
        max: 24 * 14,
        onInput: next => applyDraft({
          offsetMinutes: next * 60 + (picker.alarmDraftConfig.offsetMinutes % 60),
        }),
      });
      addNumberField({
        label: "FROM MIN",
        value: offsetMinutes,
        min: 0,
        max: 59,
        onInput: next => applyDraft({
          offsetMinutes: Math.max(1, Math.floor(picker.alarmDraftConfig.offsetMinutes / 60) * 60 + next),
        }),
      });
      addNumberField({
        label: "SNOOZE",
        value: picker.alarmDraftConfig.snoozeMinutes,
        min: 1,
        max: 60,
        onInput: next => applyDraft({ snoozeMinutes: next }),
      });
    } else if (picker.alarmDraftConfig.scheduleMode === "hourly") {
      addNumberField({
        label: "TARGET MIN",
        value: picker.alarmDraftConfig.hourlyMinute,
        min: 0,
        max: 59,
        onInput: next => applyDraft({ hourlyMinute: next }),
      });
      addNumberField({
        label: "BEFORE",
        value: picker.alarmDraftConfig.hourlyLeadMinutes,
        min: 0,
        max: 59,
        onInput: next => applyDraft({ hourlyLeadMinutes: next }),
      });
      addNumberField({
        label: "SNOOZE",
        value: picker.alarmDraftConfig.snoozeMinutes,
        min: 1,
        max: 60,
        onInput: next => applyDraft({ snoozeMinutes: next }),
      });
    } else {
      addNumberField({
        label: "HOUR",
        value: Math.floor(picker.alarmDraftConfig.timeMinutes / 60),
        min: 0,
        max: 23,
        onInput: next => applyDraft({
          timeMinutes: next * 60 + (picker.alarmDraftConfig.timeMinutes % 60),
        }),
      });
      addNumberField({
        label: "MIN",
        value: picker.alarmDraftConfig.timeMinutes % 60,
        min: 0,
        max: 59,
        onInput: next => applyDraft({
          timeMinutes: Math.floor(picker.alarmDraftConfig.timeMinutes / 60) * 60 + next,
        }),
      });
      addNumberField({
        label: "SNOOZE",
        value: picker.alarmDraftConfig.snoozeMinutes,
        min: 1,
        max: 60,
        onInput: next => applyDraft({ snoozeMinutes: next }),
      });
    }

    const dateField = document.createElement("label");
    dateField.className = "alarm-date-field";
    dateField.classList.toggle("is-reserved", picker.alarmDraftConfig.scheduleMode !== "date");
    const dateLabel = document.createElement("span");
    dateLabel.textContent = "DATE";
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.value = normalizeAlarmDateValue(picker.alarmDraftConfig.targetDate, alarmDateInputValue());
    dateInput.min = alarmDateInputValue();
    dateInput.addEventListener("input", () => {
      applyDraft({ targetDate: normalizeAlarmDateValue(dateInput.value, alarmDateInputValue()) });
    });
    dateField.append(dateLabel, dateInput);

    const repeatWrap = document.createElement("div");
    repeatWrap.className = "alarm-repeat-panel";
    if (includeRepeat && picker.alarmDraftConfig.scheduleMode === "time") {
      const repeatField = document.createElement("label");
      repeatField.className = "alarm-select-field";
      const repeatLabel = document.createElement("span");
      repeatLabel.textContent = "REPEAT";
      const repeatSelect = document.createElement("select");
      repeatSelect.innerHTML = ALARM_REPEAT_OPTIONS.map(option => `<option value="${option.id}">${option.label}</option>`).join("");
      repeatSelect.value = picker.alarmDraftConfig.repeat;
      repeatSelect.addEventListener("change", () => {
        applyDraft({ repeat: alarmRepeatOptionById(repeatSelect.value).id }, { rerender: true });
      });
      repeatField.append(repeatLabel, repeatSelect);
      repeatWrap.append(repeatField);

      if (picker.alarmDraftConfig.repeat === "custom") {
        const days = document.createElement("div");
        days.className = "alarm-weekdays";
        ALARM_WEEKDAY_OPTIONS.forEach(option => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "alarm-weekday";
          button.textContent = option.label;
          button.classList.toggle("is-active", picker.alarmWeekdays.includes(option.id));
          button.addEventListener("click", () => {
            const next = new Set(picker.alarmWeekdays);
            if (next.has(option.id)) next.delete(option.id);
            else next.add(option.id);
            picker.alarmWeekdays = normalizeAlarmWeekdays([...next], picker.alarmWeekdays);
            applyDraft({ weekdays: picker.alarmWeekdays }, { rerender: true });
          });
          days.appendChild(button);
        });
        repeatWrap.appendChild(days);
      }
    } else if (includeRepeat) {
      const repeatNote = document.createElement("div");
      repeatNote.className = "picker-manual-hint";
      repeatNote.textContent = picker.alarmDraftConfig.scheduleMode === "hourly"
        ? "Hourly alarms repeat automatically every hour. Use TARGET MIN and BEFORE to describe the minute mark and its lead reminder."
        : "Repeat only applies to clock-time alarms. Date and relative alarms stay one-shot by design.";
      repeatWrap.appendChild(repeatNote);
    }

    const soundField = document.createElement("div");
    soundField.className = "alarm-sound-panel";
    const soundHead = document.createElement("div");
    soundHead.className = "alarm-sound-head";
    const soundLabel = document.createElement("span");
    soundLabel.textContent = "SOUND";
    const soundToggle = document.createElement("div");
    soundToggle.className = "clock-segmented";
    [
      { id: "sound", label: "SOUND" },
      { id: "mute", label: "MUTE" },
    ].forEach(option => {
      const button = document.createElement("button");
      button.type = "button";
      const enabled = picker.alarmDraftConfig.sound?.enabled !== false && picker.alarmDraftConfig.sound?.volume > 0;
      button.textContent = option.label;
      button.classList.toggle("is-active", option.id === (enabled ? "sound" : "mute"));
      button.addEventListener("click", () => {
        const nextSound = {
          ...sanitizeSoundSettings(picker.alarmDraftConfig.sound),
          enabled: option.id === "sound",
        };
        applyDraft({
          sound: {
            ...nextSound,
          },
        }, {
          rerender: true,
          previewSound: option.id === "sound" ? { ...nextSound, enabled: true } : null,
        });
      });
      soundToggle.appendChild(button);
    });
    soundHead.append(soundLabel, soundToggle);

    const soundBody = document.createElement("div");
    soundBody.className = "alarm-sound-body";
    const toneField = document.createElement("label");
    toneField.className = "alarm-select-field";
    const toneLabel = document.createElement("span");
    toneLabel.textContent = "TONE";
    const toneSelect = document.createElement("select");
    toneSelect.innerHTML = SOUND_OPTIONS.map(option => `<option value="${option.id}">${option.label}</option>`).join("");
    toneSelect.value = soundOptionById(picker.alarmDraftConfig.sound?.preset).id;
    toneSelect.addEventListener("change", () => {
      const nextSound = {
        ...sanitizeSoundSettings(picker.alarmDraftConfig.sound),
        preset: soundOptionById(toneSelect.value).id,
      };
      applyDraft({ sound: nextSound }, {
        previewSound: { ...nextSound, enabled: true },
      });
    });
    toneField.append(toneLabel, toneSelect);

    const volumeField = document.createElement("label");
    volumeField.className = "alarm-volume-field";
    const volumeLabel = document.createElement("span");
    volumeLabel.textContent = "VOLUME";
    const volumeWrap = document.createElement("div");
    volumeWrap.className = "settings-sound-volume-wrap";
    const volumeInput = document.createElement("input");
    volumeInput.type = "range";
    volumeInput.min = "0";
    volumeInput.max = "100";
    volumeInput.step = "1";
    volumeInput.value = String(clampSoundVolume(picker.alarmDraftConfig.sound?.volume));
    const volumeValue = document.createElement("strong");
    volumeValue.textContent = String(clampSoundVolume(picker.alarmDraftConfig.sound?.volume));
    volumeInput.addEventListener("input", () => {
      const volume = clampSoundVolume(volumeInput.value);
      volumeValue.textContent = String(volume);
      const nextSound = {
        ...sanitizeSoundSettings(picker.alarmDraftConfig.sound),
        volume,
      };
      applyDraft({ sound: nextSound }, {
        previewSound: { ...nextSound, enabled: true },
      });
    });
    volumeWrap.append(volumeInput, volumeValue);
    volumeField.append(volumeLabel, volumeWrap);
    soundBody.append(toneField, volumeField);
    soundField.append(soundHead, soundBody);

    const message = document.createElement("label");
    message.className = "alarm-message-field";
    const messageLabel = document.createElement("span");
    messageLabel.textContent = "MESSAGE";
    const messageInput = document.createElement("input");
    messageInput.type = "text";
    messageInput.maxLength = 120;
    messageInput.placeholder = "Time to begin";
    messageInput.value = picker.alarmMessage || safe.message;
    messageInput.addEventListener("input", () => {
      picker.alarmMessage = normalizeAlarmMessage(messageInput.value);
      applyDraft({ message: picker.alarmMessage });
    });
    message.append(messageLabel, messageInput);

    const hint = document.createElement("div");
    hint.className = "picker-manual-hint";
    hint.textContent = picker.alarmDraftConfig.scheduleMode === "relative"
      ? "Use the quick offsets for common wake notes, or type exact hours and minutes from now. Silent mode still shows the popup message."
      : picker.alarmDraftConfig.scheduleMode === "date"
        ? "Choose the calendar date first, then the clock time. This is ideal for one-off reminders and events."
        : picker.alarmDraftConfig.scheduleMode === "hourly"
          ? "Set the minute mark within each hour, then add BEFORE if you want a reminder such as 10 minutes ahead of :50. The alarm will keep repeating hourly."
          : "Set the clock time here. Repeat lives in the cadence control, and each alarm can still carry its own sound and popup note.";

    wrap.append(modeWrap, dateField, grid, quickRow);
    if (repeatWrap.childElementCount || repeatWrap.textContent.trim()) {
      wrap.appendChild(repeatWrap);
    }
    wrap.append(soundField, message, hint);
    els.pickerEditor.append(wrap);
    requestAnimationFrame(updatePickerLegibility);
  }

  function buildTimeColumns(kind, options = {}) {
    const config = normalizeTypeConfig(kind, options.config || extractTypeConfig(kind));
    const unit = normalizeUnit(options.unit ?? state.unit);
    if (kind === "clock") {
      const zoneItems = buildClockZoneItems();
      return [{
        value: clockPrecisionOptionById(config.precision).id,
        items: CLOCK_PRECISION_OPTIONS.map(option => ({
          value: option.id,
          label: `DETAIL ${option.label}`,
        })),
        render: item => item.label,
        parse: raw => String(raw),
      }, {
        value: clockHourOptionById(config.hourCycle).id,
        items: CLOCK_HOUR_OPTIONS.map(option => ({
          value: option.id,
          label: `FORMAT ${option.label}`,
        })),
        render: item => item.label,
        parse: raw => Number(raw),
      }, {
        value: config.showWorld ? "show" : "hide",
        items: [
          { value: "show", label: "WORLD SHOW" },
          { value: "hide", label: "WORLD HIDE" },
        ],
        render: item => item.label,
        parse: raw => String(raw),
      }, {
        value: clockZonePickerValue(config.zoneId),
        items: zoneItems.map(item => ({
          ...item,
          label: `ZONE ${item.label}`,
        })),
        itemClass: "is-zone-item",
        render: item => item.label,
        renderNode: item => renderClockZonePickerNode(item),
        parse: raw => String(raw),
      }, {
        value: clockCitySetById(config.citySet).id,
        items: CLOCK_CITY_SET_OPTIONS.map(option => ({
          value: option.id,
          label: `CITIES ${option.label}`,
        })),
        render: item => item.label,
        parse: raw => String(raw),
      }, {
        value: clockAmPmStyleOptionById(config.ampmStyle).id,
        items: CLOCK_AMPM_STYLE_OPTIONS.map(option => ({
          value: option.id,
          label: `AMPM ${option.label.toUpperCase()}`,
        })),
        render: item => item.label,
        parse: raw => String(raw),
      }];
    }
    if (kind === "alarm") {
      const includeRepeat = options.includeRepeat === true;
      const [repeatValue, hourValue, minuteValue, snoozeValue] = includeRepeat
        ? alarmSelectionFromConfig(config, { includeRepeat: true })
        : [null, ...alarmSelectionFromConfig(config, { includeRepeat: false })];
      const columns = [];
      if (includeRepeat) {
        columns.push({
          value: repeatValue,
          items: ALARM_REPEAT_OPTIONS.map(option => ({
            value: option.id,
            label: option.label,
          })),
          render: item => item.label,
          parse: raw => String(raw),
        });
      }
      columns.push(
        {
          value: hourValue,
          items: makeNumberItems(0, 23, 1, value => pad2(value)),
          render: item => item.label,
          parse: raw => Number(raw),
        },
        {
          value: minuteValue,
          items: makeNumberItems(0, 59, 1, value => pad2(value)),
          render: item => item.label,
          parse: raw => Number(raw),
        },
        {
          value: snoozeValue,
          items: ALARM_SNOOZE_OPTIONS.map(value => ({
            value,
            label: `${value}m`,
          })),
          render: item => item.label,
          parse: raw => Number(raw),
        },
      );
      return columns;
    }
    if (kind === "countdown") {
      return unit === "clock"
        ? buildClockColumns(config.seconds)
        : [buildSingleDurationColumn(config.seconds, 8 * 3600, false, unit)];
    }

    if (kind === "countup") {
      return unit === "clock"
        ? buildClockColumns(config.seconds)
        : [buildCountColumn(config.seconds, 8 * 3600, true, unit)];
    }

    if (kind === "stopwatch") {
      return unit === "clock"
        ? buildClockColumns(config.seconds)
        : [buildSingleDurationColumn(config.seconds, 8 * 3600, false, unit)];
    }

    if (kind === "pomodoro") {
      return [
        buildSingleDurationColumn(config.focusSeconds, 3 * 3600, false, unit),
        buildSingleDurationColumn(config.shortBreakSeconds, 30 * 60, false, unit),
        buildSingleDurationColumn(config.longBreakSeconds, 3 * 3600, false, unit),
        {
          value: config.cycles,
          items: makeNumberItems(1, 12, 1, value => `${value}`),
          render: item => item.label,
          parse: raw => Number(raw),
        },
      ];
    }

    if (kind === "loop") {
      return [
        buildSingleDurationColumn(config.workSeconds, 3 * 3600, false, unit),
        buildSingleDurationColumn(config.restSeconds, 3 * 3600, false, unit),
        {
          value: config.repeats,
          items: makeNumberItems(1, 20, 1, value => `${value}`),
          render: item => item.label,
          parse: raw => Number(raw),
        },
      ];
    }

    if (kind === "interval") {
      return [
        buildSingleDurationColumn(config.warmupSeconds, 30 * 60, false, unit),
        buildSingleDurationColumn(config.workSeconds, 3 * 3600, false, unit),
        buildSingleDurationColumn(config.restSeconds, 30 * 60, false, unit),
        {
          value: config.rounds,
          items: makeNumberItems(1, 20, 1, value => `${value}`),
          render: item => item.label,
          parse: raw => Number(raw),
        },
      ];
    }

    if (kind === "tabata") {
      return [
        buildSingleDurationColumn(config.workSeconds, 120, false, unit),
        buildSingleDurationColumn(config.restSeconds, 120, false, unit),
        {
          value: config.rounds,
          items: makeNumberItems(1, 20, 1, value => `${value}`),
          render: item => item.label,
          parse: raw => Number(raw),
        },
      ];
    }

    return [buildSingleDurationColumn(DEFAULT_STATE.countdownSeconds, 8 * 3600, false, unit)];
  }

  function commitTimeValuesToConfig(kind, selection, unit = state.unit, options = {}) {
    const safeUnit = normalizeUnit(unit);
    if (kind === "clock") {
      return normalizeTypeConfig("clock", {
        precision: clockPrecisionOptionById(selection[0]).id,
        hourCycle: clockHourOptionById(selection[1]).id,
        showWorld: String(selection[2] || "show") !== "hide",
        zoneId: clockZoneOptionById(selection[3]).id,
        citySet: clockCitySetById(selection[4]).id,
        ampmStyle: clockAmPmStyleOptionById(selection[5] || state.clock?.ampmStyle).id,
      });
    }
    if (kind === "alarm") {
      return alarmConfigFromSelection(selection, {
        baseConfig: options.config || state.alarm,
        includeRepeat: options.includeRepeat === true,
      });
    }
    if (kind === "countdown" || kind === "countup" || kind === "stopwatch") {
      const seconds = safeUnit === "clock"
        ? Number(selection[0] || 0) * 3600 + Number(selection[1] || 0) * 60 + Number(selection[2] || 0)
        : Number(selection[0]) || 0;
      return normalizeTypeConfig(kind, {
        seconds: Math.max(kind === "countdown" ? 1 : 0, seconds),
      });
    }
    if (kind === "pomodoro") {
      return normalizeTypeConfig(kind, {
        focusSeconds: Number(selection[0]) || 1,
        shortBreakSeconds: Number(selection[1]) || 1,
        longBreakSeconds: Number(selection[2]) || 1,
        cycles: Number(selection[3]) || 1,
      });
    }
    if (kind === "loop") {
      return normalizeTypeConfig(kind, {
        workSeconds: Number(selection[0]) || 1,
        restSeconds: Number(selection[1]) || 1,
        repeats: Number(selection[2]) || 1,
      });
    }
    if (kind === "interval") {
      return normalizeTypeConfig(kind, {
        warmupSeconds: Number(selection[0]) || 0,
        workSeconds: Number(selection[1]) || 1,
        restSeconds: Number(selection[2]) || 1,
        rounds: Number(selection[3]) || 1,
      });
    }
    if (kind === "tabata") {
      return normalizeTypeConfig(kind, {
        workSeconds: Number(selection[0]) || 1,
        restSeconds: Number(selection[1]) || 1,
        rounds: Number(selection[2]) || 1,
      });
    }
    return normalizeTypeConfig("countdown", { seconds: DEFAULT_STATE.countdownSeconds });
  }

  function scrollPickerColumnToSelection(index, behavior = "auto") {
    const wheel = picker.wheels[index];
    if (!wheel) return;
    const value = picker.selection[index];
    const match = [...wheel.querySelectorAll(".picker-item")].find(item => item.dataset.value === String(value));
    if (match) match.scrollIntoView({ block: "center", behavior });
  }

  function syncPickerActiveColumn() {
    picker.wheels.forEach((wheel, index) => {
      wheel.parentElement?.classList.toggle("is-active", index === picker.activeColumn);
    });
  }

  function syncPickerManualInputs() {
    picker.manualInputs.forEach((input, index) => {
      if (!input) return;
      const value = picker.selection[index];
      if (String(input.value) !== String(value)) input.value = String(value);
    });
  }

  function movePickerColumn(delta) {
    if (!picker.wheels.length) return;
    picker.activeColumn = clamp(picker.activeColumn + delta, 0, picker.wheels.length - 1);
    syncPickerActiveColumn();
    picker.wheels[picker.activeColumn]?.focus({ preventScroll: true });
  }

  function movePickerSelection(delta) {
    const wheel = picker.wheels[picker.activeColumn];
    const column = picker.columns[picker.activeColumn];
    if (!wheel || !column) return;
    const items = [...wheel.querySelectorAll(".picker-item")];
    if (!items.length) return;
    const currentIndex = Math.max(0, items.findIndex(item => item.dataset.value === String(picker.selection[picker.activeColumn])));
    const nextIndex = clamp(currentIndex + delta, 0, items.length - 1);
    const nextItem = items[nextIndex];
    picker.selection[picker.activeColumn] = column.parse ? column.parse(nextItem.dataset.value) : nextItem.dataset.value;
    syncPickerManualInputs();
    scrollPickerColumnToSelection(picker.activeColumn, "smooth");
  }

  function buildManualFields(kind) {
    const fields = [];
    if (kind === "clock") return fields;
    const activeUnit = picker.kind === "preset-config" ? picker.presetUnit : state.unit;
    const clockMode = ["countdown", "countup", "stopwatch"].includes(kind) && activeUnit === "clock";

    if (kind === "countdown" || kind === "countup" || kind === "stopwatch") {
      if (clockMode) {
        const [hours = 0, minutes = 0, seconds = 0] = picker.selection;
        fields.push(
          { label: "HOURS", value: hours, min: 0, max: 99, step: 1 },
          { label: "MINUTES", value: minutes, min: 0, max: 59, step: 1 },
          { label: "SECONDS", value: seconds, min: 0, max: 59, step: 1 },
        );
      } else {
        fields.push({
          label: "SECONDS",
          value: picker.selection[0] ?? (kind === "countup" ? 0 : 1),
          min: kind === "countup" ? 0 : 1,
          max: 8 * 3600,
          step: 1,
        });
      }
      return fields;
    }

    if (kind === "pomodoro") {
      const [focusSeconds = state.pomodoro.focusSeconds, shortBreakSeconds = state.pomodoro.shortBreakSeconds, longBreakSeconds = state.pomodoro.longBreakSeconds, cycles = state.pomodoro.cycles] = picker.selection;
      return [
        { label: "FOCUS", value: focusSeconds, min: 1, max: 3 * 3600, step: 1 },
        { label: "BREAK", value: shortBreakSeconds, min: 1, max: 30 * 60, step: 1 },
        { label: "LONG BREAK", value: longBreakSeconds, min: 1, max: 3 * 3600, step: 1 },
        { label: "CYCLES", value: cycles, min: 1, max: 12, step: 1 },
      ];
    }

    if (kind === "loop") {
      const [workSeconds = state.loop.workSeconds, restSeconds = state.loop.restSeconds, repeats = state.loop.repeats] = picker.selection;
      return [
        { label: "WORK", value: workSeconds, min: 1, max: 3 * 3600, step: 1 },
        { label: "REST", value: restSeconds, min: 1, max: 3 * 3600, step: 1 },
        { label: "REPEATS", value: repeats, min: 1, max: 20, step: 1 },
      ];
    }

    if (kind === "interval") {
      const [warmupSeconds = state.interval.warmupSeconds, workSeconds = state.interval.workSeconds, restSeconds = state.interval.restSeconds, rounds = state.interval.rounds] = picker.selection;
      return [
        { label: "WARM UP", value: warmupSeconds, min: 0, max: 30 * 60, step: 1 },
        { label: "WORK", value: workSeconds, min: 1, max: 3 * 3600, step: 1 },
        { label: "REST", value: restSeconds, min: 1, max: 30 * 60, step: 1 },
        { label: "ROUNDS", value: rounds, min: 1, max: 20, step: 1 },
      ];
    }

    if (kind === "tabata") {
      const [workSeconds = state.tabata.workSeconds, restSeconds = state.tabata.restSeconds, rounds = state.tabata.rounds] = picker.selection;
      return [
        { label: "WORK", value: workSeconds, min: 1, max: 120, step: 1 },
        { label: "REST", value: restSeconds, min: 1, max: 120, step: 1 },
        { label: "ROUNDS", value: rounds, min: 1, max: 20, step: 1 },
      ];
    }

    return fields;
  }

  function renderPickerManualEditor(kind) {
    const fields = buildManualFields(kind);
    picker.manualInputs = [];
    els.pickerEditor.innerHTML = "";
    if (!fields.length) {
      els.pickerEditor.hidden = true;
      return;
    }

    els.pickerEditor.hidden = false;
    const grid = document.createElement("div");
    grid.className = `picker-manual ${fields.length === 3 ? "is-three" : fields.length === 4 ? "is-four" : ""}`;

    fields.forEach((field, index) => {
      const wrap = document.createElement("label");
      wrap.className = "picker-manual-field";
      wrap.dataset.label = field.label;
      const title = document.createElement("span");
      title.textContent = field.label;
      const input = document.createElement("input");
      input.type = "number";
      input.inputMode = "numeric";
      input.min = String(field.min);
      input.max = String(field.max);
      input.step = String(field.step || 1);
      input.value = String(field.value);
      input.addEventListener("input", () => {
        const next = clamp(Number(input.value || 0), field.min, field.max);
        picker.selection[index] = next;
        scrollPickerColumnToSelection(index);
        syncPickerManualInputs();
        if (picker.kind === "preset-config") return;
        applyPickerLivePreview();
      });
      wrap.append(title, input);
      grid.appendChild(wrap);
      picker.manualInputs[index] = input;
    });

    els.pickerEditor.append(grid);
    requestAnimationFrame(updatePickerLegibility);
  }

  function updateUnitSegmentFromClicks() {
    els.unitSegment.addEventListener("click", event => {
      const button = event.target.closest("button[data-unit]");
      if (!button) return;
      setUnit(button.dataset.unit === "clock" ? "clock" : "seconds");
      updateAllUI();
      persistStore();
    });
  }

  function renderStopwatchPanel() {
    if (!els.stopwatchPanel || !els.stopwatchLaps) return;
    const visible = state.type === "stopwatch";
    els.stage?.classList.toggle("has-stopwatch", visible);
    els.stopwatchPanel.hidden = !visible;
    if (!visible) {
      runtime.stopwatchRenderKey = "";
      return;
    }

    const laps = [...runtime.stopwatchLaps];
    const durations = laps.map(lap => lap.durationMs);
    const bestDuration = durations.length ? Math.min(...durations) : null;
    const worstDuration = durations.length ? Math.max(...durations) : null;
    const averageDuration = durations.length ? durations.reduce((sum, value) => sum + value, 0) / durations.length : null;
    const bestLap = bestDuration == null ? null : laps.find(lap => lap.durationMs === bestDuration) || null;
    const worstLap = worstDuration == null ? null : laps.find(lap => lap.durationMs === worstDuration) || null;

    const setChipContent = (element, mainText, metaText = "", lapDecor = "") => {
      if (!element) return;
      element.replaceChildren();
      if (lapDecor) {
        element.dataset.lap = lapDecor;
      } else {
        delete element.dataset.lap;
      }
      const content = document.createElement("span");
      content.className = "stopwatch-chip-content";
      const main = document.createElement("span");
      main.className = "stopwatch-chip-main";
      main.textContent = mainText;
      content.appendChild(main);
      if (metaText) {
        const meta = document.createElement("span");
        meta.className = "stopwatch-chip-meta";
        meta.textContent = metaText;
        content.appendChild(meta);
      }
      element.appendChild(content);
    };

    setChipContent(els.stopwatchAvgChip, averageDuration == null ? "AVG --" : `AVG ${formatPreciseTime(averageDuration)}`);
    setChipContent(
      els.stopwatchBestChip,
      bestLap ? `BEST ${formatPreciseTime(bestLap.durationMs)}` : "BEST --",
      bestLap ? `LAP ${bestLap.index}` : "",
      bestLap ? String(bestLap.index) : "",
    );
    setChipContent(
      els.stopwatchWorstChip,
      worstLap ? `WORST ${formatPreciseTime(worstLap.durationMs)}` : "WORST --",
      worstLap ? `LAP ${worstLap.index}` : "",
      worstLap ? String(worstLap.index) : "",
    );
    els.stopwatchBestChip.classList.toggle("is-active", runtime.stopwatchSort === "best");
    els.stopwatchWorstChip.classList.toggle("is-active", runtime.stopwatchSort === "worst");
    els.stopwatchBestChip.disabled = !laps.length;
    els.stopwatchWorstChip.disabled = !laps.length;
    els.stopwatchLapBtn.disabled = runtime.phase !== "running";
    els.stopwatchResetBtn.disabled = runtime.phase === "idle" && !laps.length && state.stopwatchStartSeconds === 0;

    const renderedLaps = runtime.stopwatchSort === "best"
      ? [...laps].sort((a, b) => a.durationMs - b.durationMs || b.index - a.index)
      : runtime.stopwatchSort === "worst"
        ? [...laps].sort((a, b) => b.durationMs - a.durationMs || b.index - a.index)
        : [...laps].reverse();
    const renderKey = `${runtime.stopwatchSort}|${renderedLaps.map(lap => `${lap.index}:${lap.durationMs}:${lap.totalMs}`).join("|")}`;
    if (renderKey === runtime.stopwatchRenderKey) return;
    runtime.stopwatchRenderKey = renderKey;

    els.stopwatchLaps.replaceChildren();
    if (!laps.length) {
      const empty = document.createElement("div");
      empty.className = "stopwatch-empty";
      empty.textContent = "Lap data appears here";
      els.stopwatchLaps.appendChild(empty);
      return;
    }

    renderedLaps.forEach(lap => {
      const row = document.createElement("div");
      row.className = "lap-row";

      const decor = document.createElement("div");
      decor.className = "lap-decor";
      decor.textContent = String(lap.index);

      const index = document.createElement("div");
      index.className = "lap-index";
      index.textContent = `Lap ${lap.index}`;

      const times = document.createElement("div");
      times.className = "lap-times";
      const split = document.createElement("div");
      split.className = "lap-split";
      split.textContent = formatPreciseTime(lap.durationMs);
      const total = document.createElement("div");
      total.className = "lap-total";
      total.textContent = `Total ${formatPreciseTime(lap.totalMs)}`;
      times.append(split, total);

      const flags = document.createElement("div");
      flags.className = "lap-flags";

      const bestFlag = document.createElement("div");
      bestFlag.className = `lap-flag ${lap.durationMs === bestDuration ? "is-best" : "is-neutral"}`;
      bestFlag.textContent = lap.durationMs === bestDuration ? "Best" : "";

      const worstFlag = document.createElement("div");
      worstFlag.className = `lap-flag ${lap.durationMs === worstDuration ? "is-worst" : "is-neutral"}`;
      worstFlag.textContent = lap.durationMs === worstDuration ? "Worst" : "";

      flags.append(bestFlag, worstFlag);
      row.append(decor, index, times, flags);
      els.stopwatchLaps.appendChild(row);
    });
  }

  function captureStopwatchLap() {
    if (state.type !== "stopwatch" || runtime.phase !== "running" || runtime.plan?.kind !== "stopwatch") return;
    const elapsedMs = Math.max(0, performance.now() - runtime.startAt);
    runtime.pausedElapsedMs = elapsedMs;
    const durationMs = Math.max(0, elapsedMs - runtime.stopwatchLapStartMs);
    if (durationMs <= 0) return;
    runtime.stopwatchLaps.push({
      index: runtime.stopwatchLaps.length + 1,
      durationMs,
      totalMs: elapsedMs,
    });
    runtime.stopwatchLapStartMs = elapsedMs;
    renderStopwatchPanel();
  }

  function resetStopwatch() {
    if (state.type !== "stopwatch") return;
    stopLoop();
    runtime.phase = "idle";
    runtime.phaseIndex = 0;
    runtime.phaseRemainingMs = 0;
    runtime.plan = null;
    runtime.pausedElapsedMs = Math.max(0, state.stopwatchStartSeconds) * 1000;
    runtime.startAt = 0;
    runtime.trailStage = "";
    runtime.trailAt = 0;
    runtime.stopwatchSort = "default";
    runtime.stopwatchRenderKey = "";
    runtime.stopwatchLaps = [];
    runtime.stopwatchLapStartMs = runtime.pausedElapsedMs;
    document.body.classList.remove("is-ended");
    clearTrailParticles();
    renderDigits(formatClock(Math.max(0, state.stopwatchStartSeconds)));
    setStatus("READY");
    setPreview(typeLabel(state.type));
    setDurationPill(totalSummaryForType(), "STOPWATCH");
    renderStopwatchPanel();
    persistStore();
    logHistory("stopwatch_reset", {
      type: "stopwatch",
      summary: "Stopwatch reset",
      note: `Start ${formatClock(Math.max(0, state.stopwatchStartSeconds))}`,
    });
  }

  function toggleStopwatchSort(kind) {
    if (state.type !== "stopwatch") return;
    runtime.stopwatchSort = runtime.stopwatchSort === kind ? "default" : kind;
    runtime.stopwatchRenderKey = "";
    renderStopwatchPanel();
  }

  function stopStopwatch() {
    if (state.type !== "stopwatch" || runtime.phase !== "running") return;
    pauseTimer();
  }

  function buildPlan() {
    switch (state.type) {
      case "countdown":
        return {
          kind: "sequence",
          loop: false,
          phases: [{
            label: "COUNTDOWN",
            seconds: Math.max(1, state.countdownSeconds),
            role: "countdown",
          }],
        };
      case "countup":
        return {
          kind: "countup",
          targetSeconds: Math.max(0, state.countupTargetSeconds),
        };
      case "clock":
        return {
          kind: "clock",
        };
      case "alarm": {
        const match = nextAlarmSchedule(new Date(), {
          excludeIds: runtime.alarmConsumedIds,
        });
        const config = normalizeTypeConfig("alarm", match?.entry || state.alarm);
        return {
          kind: "alarm",
          alarmId: match?.entry?.id || state.alarmSelectedId || selectedAlarmEntry(state)?.id || "alarm_default",
          config,
          targetAt: (match?.targetAt || nextAlarmDate(config)).getTime(),
          snoozed: false,
        };
      }
      case "stopwatch":
        return {
          kind: "stopwatch",
          startSeconds: Math.max(0, state.stopwatchStartSeconds),
        };
      case "pomodoro": {
        const cycles = Math.max(1, state.pomodoro.cycles);
        const phases = [];
        for (let i = 0; i < cycles; i++) {
          phases.push({
            label: "FOCUS",
            seconds: Math.max(1, state.pomodoro.focusSeconds),
            role: "focus",
            cycle: i + 1,
            totalCycles: cycles,
          });
          phases.push({
            label: i < cycles - 1 ? "BREAK" : "LONG BREAK",
            seconds: Math.max(1, i < cycles - 1 ? state.pomodoro.shortBreakSeconds : state.pomodoro.longBreakSeconds),
            role: i < cycles - 1 ? "break" : "longBreak",
            cycle: i + 1,
            totalCycles: cycles,
          });
        }
        return { kind: "sequence", loop: false, phases };
      }
      case "loop": {
        const repeats = Math.max(1, state.loop.repeats);
        const phases = [];
        for (let i = 0; i < repeats; i++) {
          phases.push({
            label: "WORK",
            seconds: Math.max(1, state.loop.workSeconds),
            role: "work",
            cycle: i + 1,
            totalCycles: repeats,
          });
          phases.push({
            label: "REST",
            seconds: Math.max(1, state.loop.restSeconds),
            role: "rest",
            cycle: i + 1,
            totalCycles: repeats,
          });
        }
        return { kind: "sequence", loop: false, phases };
      }
      case "interval": {
        const rounds = Math.max(1, state.interval.rounds);
        const phases = [];
        if (state.interval.warmupSeconds > 0) {
          phases.push({
            label: "WARM UP",
            seconds: Math.max(1, state.interval.warmupSeconds),
            role: "warmup",
          });
        }
        for (let i = 0; i < rounds; i++) {
          phases.push({
            label: "WORK",
            seconds: Math.max(1, state.interval.workSeconds),
            role: "work",
            cycle: i + 1,
            totalCycles: rounds,
          });
          phases.push({
            label: "REST",
            seconds: Math.max(1, state.interval.restSeconds),
            role: "rest",
            cycle: i + 1,
            totalCycles: rounds,
          });
        }
        return { kind: "sequence", loop: false, phases };
      }
      case "tabata": {
        const rounds = Math.max(1, state.tabata.rounds);
        const phases = [];
        for (let i = 0; i < rounds; i++) {
          phases.push({
            label: "WORK",
            seconds: Math.max(1, state.tabata.workSeconds),
            role: "work",
            cycle: i + 1,
            totalCycles: rounds,
          });
          phases.push({
            label: "REST",
            seconds: Math.max(1, state.tabata.restSeconds),
            role: "rest",
            cycle: i + 1,
            totalCycles: rounds,
          });
        }
        return { kind: "sequence", loop: false, phases };
      }
      case "scenario": {
        const steps = state.scenario.length ? state.scenario : cloneScenario(DEFAULT_SCENARIO);
        const phases = steps.map((step, index, array) => ({
          label: step.label || `STEP ${index + 1}`,
          seconds: Math.max(1, step.seconds),
          role: inferScenarioRole(step.label, index),
          cycle: index + 1,
          totalCycles: array.length,
        }));
        return { kind: "sequence", loop: false, phases };
      }
      default:
        return {
          kind: "sequence",
          loop: false,
          phases: [{
            label: "COUNTDOWN",
            seconds: Math.max(1, state.countdownSeconds),
            role: "countdown",
          }],
        };
    }
  }

  function phaseCountText(phase, index, total) {
    if (!phase) return "";
    switch (state.type) {
      case "pomodoro":
        return phase.cycle && phase.totalCycles ? `Cycle ${phase.cycle} / ${phase.totalCycles}` : phase.label;
      case "loop":
      case "interval":
      case "tabata":
        return phase.cycle && phase.totalCycles ? `Round ${phase.cycle} / ${phase.totalCycles}` : phase.label;
      case "scenario":
        return `Step ${index + 1} / ${total}`;
      default:
        return phase.cycle && phase.totalCycles ? `${phase.cycle} / ${phase.totalCycles}` : phase.label;
    }
  }

  function sequenceRemainingSeconds(plan, currentIndex, currentRemainingMs) {
    if (!plan?.phases?.length) return 0;
    let totalMs = Math.max(0, currentRemainingMs || 0);
    for (let i = currentIndex + 1; i < plan.phases.length; i += 1) {
      totalMs += Math.max(1, plan.phases[i].seconds) * 1000;
    }
    return Math.max(0, Math.ceil(totalMs / 1000));
  }

  function phaseRemainingRatio(index, phase, activeIndex) {
    if (!phase) return 0;
    if (runtime.phase === "ended") return 0;
    if (runtime.phase !== "running" && runtime.phase !== "paused") return 1;
    if (index < activeIndex) return 0;
    if (index > activeIndex) return 1;
    return clamp(runtime.phaseRemainingMs / Math.max(1000, phase.seconds * 1000), 0, 1);
  }

  function inferScenarioRole(label, index = 0) {
    const raw = String(label || "").trim().toLowerCase();
    const compact = raw.replace(/[\s_-]+/g, "");

    if (!compact) return index % 2 === 0 ? "work" : "rest";
    if (/(warmup|warm|prep|prepare|ready|intro|setup|start)/.test(compact)) return "warmup";
    if (/(longbreak|longrest|deeprest|reset)/.test(compact)) return "longBreak";
    if (/(break|rest|pause|recover|recovery|stretch|cooldown|walk|breathe|breath|relax)/.test(compact)) return "rest";
    if (/(focus|work|study|read|write|code|build|train|sprint|flow|run)/.test(compact)) return "work";
    return index % 2 === 0 ? "work" : "rest";
  }

  function isRoundVisualType(type = state.type) {
    return type === "pomodoro" || type === "loop" || type === "interval" || type === "tabata";
  }

  function sequenceRoundSlotLimit() {
    const compact = window.matchMedia("(max-width: 640px), (pointer: coarse)").matches;
    return compact ? 3 : 6;
  }

  function buildRoundWindow(roundTotal, activeRound, slotLimit) {
    const total = Math.max(0, Math.floor(roundTotal));
    const limit = Math.max(1, Math.floor(slotLimit));
    if (!total) {
      return { items: [], start: 0, end: 0, before: 0, after: 0 };
    }

    const current = clamp(Math.floor(activeRound) || 1, 1, total);
    if (total <= limit) {
      return {
        items: Array.from({ length: total }, (_, index) => ({ kind: "round", round: index + 1 })),
        start: 1,
        end: total,
        before: 0,
        after: 0,
      };
    }

    let chosen = null;
    for (let visibleCount = Math.min(total, limit); visibleCount >= 1; visibleCount -= 1) {
      const start = clamp(current - Math.floor(visibleCount / 2), 1, total - visibleCount + 1);
      const end = start + visibleCount - 1;
      const before = start - 1;
      const after = total - end;
      const slots = visibleCount + (before > 0 ? 1 : 0) + (after > 0 ? 1 : 0);
      if (slots <= limit) {
        chosen = { start, end, before, after };
        break;
      }
    }

    if (!chosen) {
      chosen = { start: 1, end: Math.min(total, limit), before: 0, after: Math.max(0, total - limit) };
    }

    const items = [];
    if (chosen.before > 0) items.push({ kind: "gap", side: "before", count: chosen.before });
    for (let round = chosen.start; round <= chosen.end; round += 1) {
      items.push({ kind: "round", round });
    }
    if (chosen.after > 0) items.push({ kind: "gap", side: "after", count: chosen.after });

    return { ...chosen, items };
  }

  function createSequenceGapCard(side, count) {
    const card = document.createElement("div");
    card.className = "sequence-round sequence-gap";
    card.dataset.side = side;

    const top = document.createElement("div");
    top.className = "sequence-gap-top";
    const index = document.createElement("span");
    index.className = "sequence-gap-index";
    index.textContent = "MORE";
    const stateLabel = document.createElement("span");
    stateLabel.className = "sequence-gap-state";
    stateLabel.textContent = side === "before" ? "BEFORE" : "AFTER";
    top.append(index, stateLabel);

    const body = document.createElement("div");
    body.className = "sequence-gap-body";
    const countLabel = document.createElement("span");
    countLabel.className = "sequence-gap-count";
    countLabel.textContent = `+${count}`;
    const detail = document.createElement("span");
    detail.className = "sequence-gap-label";
    detail.textContent = "OMITTED";
    const line = document.createElement("div");
    line.className = "sequence-gap-line";
    body.append(countLabel, detail, line);

    card.append(top, body);
    return card;
  }

  function renderPhaseSplash(phase, { visible = false, complete = false } = {}) {
    if (!els.phaseSplash) return;
    if (!visible || !phase) {
      els.phaseSplash.hidden = true;
      els.phaseSplash.textContent = "";
      delete els.phaseSplash.dataset.role;
      delete els.phaseSplash.dataset.length;
      return;
    }
    els.phaseSplash.hidden = false;
    els.phaseSplash.textContent = complete ? "COMPLETE" : String(phase.label || "").toUpperCase();
    els.phaseSplash.dataset.role = complete ? "complete" : (phase.role || "step");
    const textLength = String(els.phaseSplash.textContent || "").replace(/\s+/g, "").length;
    if (complete || textLength >= 8) {
      els.phaseSplash.dataset.length = "long";
    } else {
      delete els.phaseSplash.dataset.length;
    }
  }

  function setSequenceChipLabels(labels = ["Round", "Left", "Next"]) {
    if (!els.sequencePanel) return;
    const nodes = els.sequencePanel.querySelectorAll(".sequence-chip-label");
    if (!nodes.length) return;
    labels.forEach((label, index) => {
      if (nodes[index]) nodes[index].textContent = label;
    });
  }

  function createClockCityCard(city, now, formatOptions) {
    const card = document.createElement("article");
    card.className = "clock-world-item";

    const name = document.createElement("span");
    name.className = "clock-world-city";
    name.textContent = city.label;

    const time = document.createElement("strong");
    time.className = "clock-world-time";
    time.textContent = formatTimeInZone(now, city.timeZone, formatOptions);

    const meta = document.createElement("span");
    meta.className = "clock-world-meta";
    meta.textContent = `${formatDateInZone(now, city.timeZone)} · ${formatZoneNameInZone(now, city.timeZone)}`;

    card.append(name, time, meta);
    return card;
  }

  function clockCitiesForSet(setId = state.clock?.citySet, { includeBackups = false } = {}) {
    const set = clockCitySetById(setId);
    const byId = new Map(CLOCK_CITY_LIBRARY.map(city => [city.id, city]));
    const ids = includeBackups
      ? [...(set.cityIds || []), ...(set.backupIds || [])]
      : [...(set.cityIds || [])];
    const seen = new Set();
    return ids.reduce((list, id) => {
      const city = byId.get(id);
      if (!city || seen.has(city.id)) return list;
      seen.add(city.id);
      list.push(city);
      return list;
    }, []);
  }

  function renderClockWorld(now = new Date()) {
    if (!els.clockWorld) return;
    const isClock = state.type === "clock";
    const showWorld = state.clock?.showWorld !== false;
    const visible = isClock && showWorld && !document.body.classList.contains("is-minimal");
    els.clockWorld.hidden = !visible;
    if (!visible) {
      els.clockWorld.replaceChildren();
      return;
    }

    const formatOptions = clockFormatOptions(state.clock);
    const set = clockCitySetById(state.clock?.citySet);
    const targetCount = Math.max(1, (set.cityIds || []).length || 5);
    const source = clockCitiesForSet(set.id, { includeBackups: true });
    const list = source
      .slice(0, targetCount)
      .slice()
      .sort((left, right) =>
        clockDateTimeSortKey(now, left.timeZone).localeCompare(clockDateTimeSortKey(now, right.timeZone))
        || left.label.localeCompare(right.label)
      );

    const fragment = document.createDocumentFragment();
    list.forEach(city => {
      fragment.appendChild(createClockCityCard(city, now, formatOptions));
    });
    els.clockWorld.replaceChildren(fragment);
  }

  function renderAlarmBoard() {
    if (!els.alarmBoard || !els.alarmCards) return;
    const visible = state.type === "alarm" && state.detailPanelVisible && !document.body.classList.contains("is-minimal");
    els.alarmBoard.hidden = !visible;
    els.stage?.classList.toggle("has-alarm", visible);
    if (!visible) {
      els.alarmCards.replaceChildren();
      return;
    }

    syncAlarmState();
    const entries = alarmEntries(state);
    const currentPlan = runtime.plan?.kind === "alarm" ? runtime.plan : null;
    const next = nextAlarmSchedule(new Date(), {
      excludeIds: runtime.phase === "running" || runtime.phase === "paused"
        ? runtime.alarmConsumedIds
        : [],
    });
    const fragment = document.createDocumentFragment();

    entries.forEach((entry, index) => {
      const row = document.createElement("article");
      row.className = "lap-row alarm-card";
      if (entry.id === state.alarmSelectedId) row.classList.add("is-selected");
      if (currentPlan?.alarmId === entry.id && runtime.phase === "running") row.classList.add("is-next");
      if (currentPlan?.alarmId === entry.id && runtime.phase === "ended") row.classList.add("is-ringing");

      const hit = document.createElement("button");
      hit.type = "button";
      hit.className = "alarm-card-hit";
      hit.dataset.alarmAction = "select";
      hit.dataset.alarmId = entry.id;
      hit.setAttribute("aria-label", `Select alarm ${index + 1}`);

      const decor = document.createElement("div");
      decor.className = "lap-decor";
      decor.textContent = String(index + 1);

      const copy = document.createElement("div");
      copy.className = "alarm-card-copy";

      const label = document.createElement("div");
      label.className = "lap-index";
      label.textContent = `Alarm ${index + 1}`;

      const times = document.createElement("div");
      times.className = "lap-times";
      const split = document.createElement("div");
      split.className = "lap-split";
      split.textContent = formatAlarmPrimary(entry);
      const total = document.createElement("div");
      total.className = "lap-total";
      total.textContent = `${alarmRepeatLabel(entry)} · ${formatAlarmSnooze(entry.snoozeMinutes)}`;
      times.append(split, total);

      const flags = document.createElement("div");
      flags.className = "lap-flags";
      const flagDefs = [
        entry.id === state.alarmSelectedId ? { text: "Selected", className: "is-selected" } : null,
        next?.entry?.id === entry.id ? { text: runtime.phase === "running" && currentPlan?.alarmId === entry.id ? "Live" : "Next", className: currentPlan?.alarmId === entry.id && runtime.phase === "running" ? "is-live" : "is-next" } : null,
        currentPlan?.alarmId === entry.id && runtime.phase === "ended" ? { text: "Ringing", className: "is-next" } : null,
        entry.sound?.enabled !== false && entry.sound?.volume > 0 ? { text: `${soundOptionById(entry.sound?.preset).label} ${entry.sound?.volume}` } : { text: "Silent" },
      ].filter(Boolean);
      flagDefs.forEach(def => {
        const flag = document.createElement("div");
        flag.className = `lap-flag ${def.className || ""}`.trim();
        flag.textContent = def.text;
        flags.appendChild(flag);
      });

      const note = document.createElement("div");
      note.className = "alarm-card-note";
      const noteParts = [];
      if (entry.scheduleMode === "date") {
        noteParts.push(formatAlarmDateLabel(entry.targetDate));
      } else if (entry.scheduleMode === "relative") {
        noteParts.push(`After ${formatAlarmOffset(entry.offsetMinutes)}`);
      } else if (entry.scheduleMode === "hourly") {
        noteParts.push(`Every hour ${formatAlarmHourlyRule(entry)}`);
        noteParts.push(next?.entry?.id === entry.id ? formatAlarmNextLabel(next.targetAt) : formatAlarmNextLabel(nextAlarmDate(entry)));
      } else {
        noteParts.push(next?.entry?.id === entry.id ? formatAlarmNextLabel(next.targetAt) : formatAlarmNextLabel(nextAlarmDate(entry)));
      }
      noteParts.push(formatAlarmMessageExcerpt(entry.message, 48));
      note.textContent = noteParts.filter(Boolean).join(" · ");
      note.title = normalizeAlarmMessage(entry.message);

      copy.append(label, times, flags, note);
      row.append(decor, hit, copy);

      if (entries.length > 1) {
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "alarm-card-delete";
        remove.textContent = "×";
        remove.dataset.alarmAction = "delete";
        remove.dataset.alarmId = entry.id;
        remove.title = "Remove alarm";
        row.appendChild(remove);
      }

      fragment.appendChild(row);
    });

    const add = document.createElement("button");
    add.type = "button";
    add.className = "lap-row alarm-card alarm-card-add";
    add.dataset.alarmAction = "add";
    const addDecor = document.createElement("div");
    addDecor.className = "lap-decor";
    addDecor.textContent = "+";
    const addLabel = document.createElement("div");
    addLabel.className = "alarm-card-add-label";
    addLabel.textContent = "Alarm";
    const addCopy = document.createElement("div");
    addCopy.className = "alarm-card-add-copy";
    addCopy.textContent = "Add Alarm";
    const addNote = document.createElement("div");
    addNote.className = "alarm-card-add-note";
    addNote.textContent = "Create another message, schedule, and sound slot.";
    add.append(addDecor, addLabel, addCopy, addNote);
    fragment.appendChild(add);

    els.alarmCards.replaceChildren(fragment);
  }

  function renderSequencePanel() {
    if (!els.sequencePanel || !els.sequenceRail) return;
    const supported = isSequenceDetailType() && state.type !== "stopwatch";
    const visible = supported && state.detailPanelVisible;
    const collapsed = supported && !state.detailPanelVisible;
    els.stage?.classList.toggle("has-detail", visible);
    els.stage?.classList.toggle("has-detail-collapsed", collapsed);
    els.sequencePanel.hidden = !visible;
    if (els.sequenceCollapsedBtn) {
      els.sequenceCollapsedBtn.hidden = !collapsed;
      els.sequenceCollapsedBtn.setAttribute("aria-label", "Show progress panel");
    }
    if (!supported) {
      renderPhaseSplash(null, { visible: false });
      return;
    }

    const plan = runtime.plan && runtime.plan.kind === "sequence" ? runtime.plan : buildPlan();
    const phases = plan?.phases || [];
    if (!phases.length) {
      els.sequencePanel.hidden = true;
      els.stage?.classList.remove("has-detail");
      els.stage?.classList.remove("has-detail-collapsed");
      renderPhaseSplash(null, { visible: false });
      return;
    }

    const activeIndex = clamp(
      runtime.phase === "running" || runtime.phase === "paused" || runtime.phase === "ended" ? runtime.phaseIndex : 0,
      0,
      phases.length - 1
    );
    const phase = phases[activeIndex];
    const nextPhase = phases[activeIndex + 1] || null;
    const countText = phaseCountText(phase, activeIndex, phases.length);
    const roundTotal = Math.max(...phases.map(item => item.cycle || 0), 0);
    const roundCurrent = phase?.cycle || 0;
    const roundsLeft = roundTotal && roundCurrent ? Math.max(0, roundTotal - roundCurrent) : roundTotal;
    const remainingSeconds = runtime.phase === "running" || runtime.phase === "paused"
      ? sequenceRemainingSeconds(plan, activeIndex, runtime.phaseRemainingMs)
      : runtime.phase === "ended"
        ? 0
        : totalSecondsForType();
    const leadText = runtime.phase === "ended"
      ? "Session complete"
      : isRoundVisualType()
        ? phase?.role === "warmup"
          ? `${formatClock(remainingSeconds)} until round 1`
          : `${formatClock(remainingSeconds)} left`
        : `${formatClock(remainingSeconds)} left`;

    renderPhaseSplash(phase, { visible: true, complete: runtime.phase === "ended" });
    if (!visible) {
      return;
    }

    setSequenceChipLabels(["Round", "Left", "Next"]);
    els.sequenceKicker.textContent = typeLabel(state.type);
    els.sequenceTitle.textContent = runtime.phase === "ended" ? "COMPLETE" : (phase?.label || typeLabel(state.type));
    els.sequenceLead.textContent = "";
    els.sequenceLead.hidden = true;
    els.sequenceNow.textContent = runtime.phase === "ended"
      ? `${roundTotal || phases.length} / ${roundTotal || phases.length}`
      : isRoundVisualType()
        ? phase?.role === "warmup"
          ? `0 / ${roundTotal}`
          : `${roundCurrent} / ${roundTotal}`
        : countText;
    els.sequenceNext.textContent = runtime.phase === "ended" ? formatClock(0) : formatClock(remainingSeconds);
    els.sequenceMeta.textContent = runtime.phase === "ended"
      ? "DONE"
      : nextPhase ? nextPhase.label : "FINISH";

    els.sequenceRail.replaceChildren();
    els.sequenceRail.classList.remove("is-clock");
    els.sequenceRail.classList.toggle("is-rounds", isRoundVisualType());
    els.sequenceRail.classList.toggle("is-windowed", false);
    if (isRoundVisualType()) {
      const warmupPhase = phases.find(item => item.role === "warmup") || null;
      const roundSlotLimit = sequenceRoundSlotLimit();
      const roundWindowLimit = warmupPhase ? Math.max(1, roundSlotLimit - 1) : roundSlotLimit;
      const showWindowedRail = Boolean(warmupPhase) || roundTotal > roundWindowLimit;
      els.sequenceRail.classList.toggle("is-windowed", showWindowedRail);
      if (warmupPhase) {
        const warmupIndex = phases.indexOf(warmupPhase);
        const warmupCard = document.createElement("div");
        warmupCard.className = "sequence-round";
        if (runtime.phase !== "ended" && activeIndex === warmupIndex) warmupCard.classList.add("is-current");
        if (runtime.phase === "ended" || activeIndex > warmupIndex) warmupCard.classList.add("is-done");

        const top = document.createElement("div");
        top.className = "sequence-round-top";
        const index = document.createElement("span");
        index.className = "sequence-round-index";
        index.textContent = "PREP";
        const stateLabel = document.createElement("span");
        stateLabel.className = "sequence-round-state";
        stateLabel.textContent = runtime.phase === "ended" || activeIndex > warmupIndex
          ? "DONE"
          : activeIndex === warmupIndex && runtime.phase !== "idle"
            ? "ACTIVE"
            : "READY";
        top.append(index, stateLabel);

        const bars = document.createElement("div");
        bars.className = "sequence-round-bars";
        const bar = document.createElement("div");
        bar.className = "sequence-round-bar";
        if (runtime.phase === "ended" || activeIndex > warmupIndex) {
          bar.classList.add("is-done");
        } else if (activeIndex === warmupIndex && runtime.phase !== "idle") {
          bar.classList.add("is-current");
        } else {
          bar.classList.add("is-pending");
        }
        const fill = document.createElement("span");
        fill.className = "sequence-round-fill";
        fill.dataset.role = "warmup";
        fill.style.setProperty("--fill", `${phaseRemainingRatio(warmupIndex, warmupPhase, activeIndex) * 100}%`);
        bar.appendChild(fill);
        bars.appendChild(bar);
        warmupCard.append(top, bars);
        els.sequenceRail.appendChild(warmupCard);
      }

      const activeRound = phase?.role === "warmup" ? 1 : Math.max(1, roundCurrent || 1);
      const roundWindow = buildRoundWindow(roundTotal, activeRound, roundWindowLimit);

      roundWindow.items.forEach(item => {
        if (item.kind === "gap") {
          els.sequenceRail.appendChild(createSequenceGapCard(item.side, item.count));
          return;
        }

        const round = item.round;
        const roundPhases = phases.filter(phaseItem => phaseItem.cycle === round);
        if (!roundPhases.length) return;
        const roundCard = document.createElement("div");
        roundCard.className = "sequence-round";
        const roundPhaseIndexes = roundPhases.map(item => phases.indexOf(item));
        const currentInRound = roundPhases.some(item => phases.indexOf(item) === activeIndex && runtime.phase !== "ended");
        const doneRound = runtime.phase === "ended" || roundPhaseIndexes.every(index => index < activeIndex);
        if (currentInRound) roundCard.classList.add("is-current");
        if (doneRound) roundCard.classList.add("is-done");

        const top = document.createElement("div");
        top.className = "sequence-round-top";
        const index = document.createElement("span");
        index.className = "sequence-round-index";
        index.textContent = `R${round}`;
        const stateLabel = document.createElement("span");
        stateLabel.className = "sequence-round-state";
        const activeRoundPhase = currentInRound ? roundPhases.find(item => phases.indexOf(item) === activeIndex) : null;
        stateLabel.textContent = doneRound ? "DONE" : activeRoundPhase ? activeRoundPhase.label : "READY";
        top.append(index, stateLabel);

        const bars = document.createElement("div");
        bars.className = "sequence-round-bars";
        roundPhases.forEach(item => {
          const phaseIndex = phases.indexOf(item);
          const bar = document.createElement("div");
          bar.className = "sequence-round-bar";
          if (runtime.phase === "ended" || phaseIndex < activeIndex) {
            bar.classList.add("is-done");
          } else if (phaseIndex === activeIndex && runtime.phase !== "idle") {
            bar.classList.add("is-current");
          } else {
            bar.classList.add("is-pending");
          }
          const fill = document.createElement("span");
          fill.className = "sequence-round-fill";
          fill.dataset.role = item.role || "step";
          fill.style.setProperty("--fill", `${phaseRemainingRatio(phaseIndex, item, activeIndex) * 100}%`);
          bar.title = item.label;
          bar.appendChild(fill);
          bars.appendChild(bar);
        });
        roundCard.append(top, bars);
        els.sequenceRail.appendChild(roundCard);
      });
      return;
    }

    phases.forEach((item, index) => {
      const segment = document.createElement("div");
      segment.className = "sequence-segment";
      if (index < activeIndex || runtime.phase === "ended") segment.classList.add("is-done");
      if (index === activeIndex && runtime.phase !== "ended") segment.classList.add("is-active");
      segment.dataset.role = item.role || "step";
      segment.title = `${item.label}${item.cycle && item.totalCycles ? ` · ${phaseCountText(item, index, phases.length)}` : ""}`;
      const fill = document.createElement("span");
      fill.className = "sequence-segment-fill";
      fill.dataset.role = item.role || "step";
      fill.style.setProperty("--fill", `${phaseRemainingRatio(index, item, activeIndex) * 100}%`);
      segment.appendChild(fill);
      els.sequenceRail.appendChild(segment);
    });
  }

  function createParticleBurst(target, {
    count,
    palette,
    stage = "calm",
    xSpread = 90,
    ySpread = 44,
    sweep = 120,
    durationMin = 0.95,
    durationMax = 1.55,
    opacityBase = 0.45,
  }) {
    const fragment = document.createDocumentFragment();
    for (let index = 0; index < count; index++) {
      const color = palette[index % palette.length];
      const rgba = alpha => `rgba(${color[0]},${color[1]},${color[2]},${alpha})`;
      const direction = index % 2 === 0 ? 1 : -1;
      const size = stage === "rush"
        ? 3.6 + Math.random() * 4.6
        : stage === "turn"
          ? 2.8 + Math.random() * 3.6
          : 2.2 + Math.random() * 2.8;
      const sparkWidth = stage === "rush"
        ? 44 + Math.random() * 54
        : stage === "turn"
          ? 34 + Math.random() * 44
          : 24 + Math.random() * 34;
      const sparkHeight = stage === "rush"
        ? 2 + Math.random() * 1.8
        : stage === "turn"
          ? 1.6 + Math.random() * 1.4
          : 1.2 + Math.random() * 1.2;
      const duration = durationMin + Math.random() * (durationMax - durationMin);
      const x = direction * (xSpread + Math.random() * xSpread * 0.65) + (Math.random() - 0.5) * sweep;
      const y = (Math.random() - 0.5) * ySpread;
      const particle = document.createElement("div");
      particle.dataset.particle = "trail";
      particle.style.cssText = [
        "position:absolute",
        "left:50%",
        "top:50%",
        "pointer-events:none",
        "mix-blend-mode:screen",
        "transform:translate(-50%,-50%)",
        `width:${size}px`,
        `height:${size}px`,
        `filter:blur(${stage === "rush" ? 0.04 : stage === "turn" ? 0.1 : 0.18}px)`,
        `animation:float ${duration}s cubic-bezier(.12,.8,.16,1) forwards`,
        `opacity:${opacityBase + (stage === "rush" ? 0.28 : stage === "turn" ? 0.18 : 0)}`,
      ].join(";");
      particle.style.borderRadius = Math.random() > 0.34 ? "999px" : "35% 65% 60% 40% / 40% 45% 55% 60%";
      particle.style.setProperty("--x", `${x}px`);
      particle.style.setProperty("--y", `${y}px`);
      particle.style.setProperty("--opacity", String(opacityBase + (stage === "rush" ? 0.2 : 0.06)));
      particle.style.setProperty("--duration", `${duration}s`);

      const glow = document.createElement("div");
      glow.style.cssText = [
        "position:absolute",
        "width:260%",
        "height:260%",
        "top:-80%",
        "left:-80%",
        "border-radius:50%",
        "filter:blur(8px)",
        `opacity:${.45 + (stage === "rush" ? .24 : stage === "turn" ? .14 : .08)}`,
        `background:radial-gradient(circle,${rgba(.52)} 0%,${rgba(.16)} 48%,transparent 82%)`,
      ].join(";");

      const core = document.createElement("div");
      core.style.cssText = [
        "width:100%",
        "height:100%",
        "border-radius:999px",
        `background:radial-gradient(circle,${rgba(1)} 0%,${rgba(.78)} 30%,${rgba(.26)} 60%,transparent 100%)`,
      ].join(";");

      const spark = document.createElement("div");
      spark.style.cssText = [
        "position:absolute",
        "left:50%",
        "top:50%",
        `width:${sparkWidth}px`,
        `height:${sparkHeight}px`,
        `margin-left:-${sparkWidth / 2}px`,
        `margin-top:-${sparkHeight / 2}px`,
        "border-radius:999px",
        "transform-origin:center",
        `background:linear-gradient(90deg,transparent,rgba(255,255,255,.98),rgba(255,255,255,.78),transparent)`,
        `opacity:${.9 + (stage === "rush" ? .08 : 0)}`,
        "filter:blur(.05px) drop-shadow(0 0 8px rgba(255,255,255,.28))",
        `animation:streak ${duration}s ease-out forwards`,
      ].join(";");
      spark.style.setProperty("--rotation", `${(Math.random() - 0.5) * (stage === "rush" ? 12 : stage === "turn" ? 18 : 24)}deg`);

      particle.append(glow, core, spark);
      fragment.appendChild(particle);
    }
    target.appendChild(fragment);
  }

  function emitTrail(stage, phase) {
    const palette = phasePalette(phase?.role);
    const config = stage === "rush"
      ? { count: 16, xSpread: 140, ySpread: 58, sweep: 176, durationMin: 0.75, durationMax: 1.08, opacityBase: 0.76 }
      : stage === "turn"
        ? { count: 11, xSpread: 116, ySpread: 50, sweep: 152, durationMin: 0.88, durationMax: 1.28, opacityBase: 0.58 }
        : { count: 7, xSpread: 90, ySpread: 44, sweep: 120, durationMin: 1.02, durationMax: 1.5, opacityBase: 0.42 };
    createParticleBurst(timerFrame, {
      ...config,
      palette,
      stage,
    });
  }

  function emitFinishParticles() {
    const palette = phasePalette("focus");
    const ring = document.createElement("div");
    ring.style.cssText = [
      "position:fixed",
      "left:50%",
      "top:50%",
      "width:120px",
      "height:120px",
      "margin-left:-60px",
      "margin-top:-60px",
      "border-radius:50%",
      "border:2px solid rgba(255,255,255,.82)",
      "box-shadow:0 0 24px rgba(255,255,255,.38),inset 0 0 18px rgba(255,255,255,.2)",
      "pointer-events:none",
      "z-index:5",
      "animation:ringExpand 1.35s ease-out forwards",
    ].join(";");
    document.body.appendChild(ring);
    setTimeout(() => ring.remove(), 1500);
    createParticleBurst(document.body, {
      count: 120,
      palette,
      stage: "rush",
      xSpread: 150,
      ySpread: 120,
      sweep: 260,
      durationMin: 1.05,
      durationMax: 1.7,
      opacityBase: 0.72,
    });
  }

  function ensureAudioContext() {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    if (!audioContext) audioContext = new Ctx();
    if (audioContext.state === "suspended") {
      audioContext.resume().catch(() => {});
    }
    return audioContext;
  }

  function soundPatternById(id) {
    const key = soundOptionById(id).id;
    const map = {
      Glass: [[880, 0.12], [1318, 0.14], [1760, 0.16]],
      Bell: [[784, 0.14], [1174, 0.16], [1568, 0.2]],
      Bloom: [[523, 0.12], [659, 0.14], [784, 0.16], [1046, 0.2]],
      Chime: [[987, 0.1], [1318, 0.14], [987, 0.12]],
      Pulse: [[440, 0.1], [554, 0.1], [659, 0.12], [880, 0.16]],
      Nova: [[660, 0.1], [880, 0.12], [1108, 0.14], [1320, 0.16]],
      Ripple: [[392, 0.12], [523, 0.12], [659, 0.14], [784, 0.16]],
      Orbit: [[740, 0.11], [988, 0.12], [1244, 0.14], [988, 0.14]],
      Spark: [[1046, 0.08], [1396, 0.09], [1864, 0.12]],
      Dawn: [[349, 0.12], [440, 0.13], [523, 0.14], [698, 0.2]],
      Aurora: [[659, 0.1], [880, 0.11], [1174, 0.14], [1568, 0.18]],
      Pebble: [[440, 0.08], [392, 0.08], [523, 0.1], [659, 0.12]],
      Echo: [[988, 0.09], [988, 0.08], [740, 0.1], [1174, 0.12]],
      Halo: [[523, 0.12], [784, 0.14], [1046, 0.16]],
      Lumen: [[622, 0.1], [831, 0.12], [1244, 0.14], [1661, 0.18]],
      Harbor: [[392, 0.14], [494, 0.14], [587, 0.16], [784, 0.2]],
      Prism: [[784, 0.08], [1046, 0.1], [1396, 0.1], [1864, 0.12]],
      Velvet: [[349, 0.12], [466, 0.14], [622, 0.16], [740, 0.2]],
      Quartz: [[880, 0.08], [988, 0.08], [1318, 0.1], [1760, 0.14]],
      Ember: [[330, 0.1], [494, 0.12], [659, 0.14], [880, 0.18]],
      Tidal: [[440, 0.1], [554, 0.1], [740, 0.12], [988, 0.14], [740, 0.12]],
      Meadow: [[523, 0.12], [659, 0.12], [587, 0.14], [784, 0.18]],
      Willow: [[466, 0.12], [622, 0.14], [740, 0.16], [932, 0.2]],
      Cedar: [[392, 0.12], [523, 0.14], [698, 0.16], [932, 0.18]],
      Breeze: [[698, 0.08], [880, 0.09], [1174, 0.1], [1568, 0.12]],
      Maple: [[349, 0.14], [523, 0.14], [698, 0.14], [1046, 0.16]],
      Linen: [[587, 0.09], [740, 0.1], [988, 0.12], [1318, 0.14]],
      Drift: [[262, 0.12], [392, 0.12], [523, 0.14], [698, 0.16]],
      Hearth: [[330, 0.14], [440, 0.14], [587, 0.16], [784, 0.18]],
      Opal: [[622, 0.1], [932, 0.1], [1244, 0.12], [1661, 0.16]],
    };
    return map[key] || map.Glass;
  }

  function playSoundPattern(source, { ignoreEnabled = false, preview = false } = {}) {
    const sound = sanitizeSoundSettings(source);
    if (!ignoreEnabled && !sound.enabled) return;
    if (sound.volume <= 0) return;
    const ctx = ensureAudioContext();
    if (!ctx) return;
    const start = ctx.currentTime + 0.01;
    const fullPattern = soundPatternById(sound.preset);
    const pattern = preview ? fullPattern.slice(0, Math.min(3, fullPattern.length)) : fullPattern;
    const gainPeak = 0.015 + (sound.volume / 100) * 0.14;
    let cursor = start;
    pattern.forEach(([freq, duration], index) => {
      const noteDuration = preview ? Math.max(0.08, duration * 0.85) : duration;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = index % 2 === 0 ? "sine" : "triangle";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, cursor);
      gain.gain.exponentialRampToValueAtTime(gainPeak, cursor + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, cursor + noteDuration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(cursor);
      osc.stop(cursor + noteDuration + 0.03);
      cursor += noteDuration * (preview ? 0.66 : 0.72);
    });
  }

  function queueSoundPreview(source, { force = false } = {}) {
    const safe = sanitizeSoundSettings(source);
    if (safe.volume <= 0) return;
    ensureAudioContext();
    const signature = `${safe.preset}|${safe.volume}|${safe.enabled ? "1" : "0"}`;
    if (!force && signature === soundPreviewSignature) return;
    soundPreviewSignature = signature;
    if (soundPreviewTimer) window.clearTimeout(soundPreviewTimer);
    soundPreviewTimer = window.setTimeout(() => {
      playSoundPattern({ ...safe, enabled: true }, { ignoreEnabled: true, preview: true });
    }, 90);
  }

  function playCompletionSound() {
    playSoundPattern(appStore.future.sound);
  }

  function playAlarmSound(config = state.alarm, { preview = false, force = false } = {}) {
    const safe = normalizeTypeConfig("alarm", config);
    playSoundPattern(safe.sound, {
      ignoreEnabled: force || safe.sound?.enabled !== false,
      preview,
    });
  }

  function shouldAnimateClockTransition(nextText, formatOptions, formatKey) {
    if (state.type !== "clock" || !els.timerText) return false;
    const animation = "none";
    if (animation === "none") return false;
    if (!clockRenderedText || clockRenderedFormatKey !== formatKey) return false;
    if (clockRenderedText.length !== String(nextText).length) return false;
    if (clockRenderedText === String(nextText)) return false;
    const precision = clockPrecisionOptionById(formatOptions.precision).id;
    const now = performance.now();
    const minInterval = precision === "milliseconds" ? 120 : 0;
    if (minInterval && now - clockAnimationAt < minInterval) return false;
    clockAnimationAt = now;
    return true;
  }

  function renderClockSnapshot(now = new Date()) {
    const formatOptions = clockFormatOptions(state.clock);
    const zone = clockBaseTimeZone(state.clock);
    const display = clockDisplayPartsInZone(now, zone, formatOptions);
    clockRenderedText = display.time;
    clockRenderedFormatKey = `${formatOptions.hourCycle}|${formatOptions.precision}|${formatOptions.zoneId}`;
    renderDigits(display.time);
    setClockMeridiem(display.meridiem);
    setPreview(typeLabel(state.type));
    setDurationPill(totalSummaryForType(), "LIVE");
    renderClockWorld(now);
  }

  function stopClockTicker() {
    if (clockTicker) clearTimeout(clockTicker);
    clockTicker = 0;
    clockTickerProfile = "";
    resetClockRenderState();
  }

  function nextClockDelay(precision = "seconds") {
    const now = Date.now();
    if (precision === "milliseconds") return 34;
    const unit = precision === "minute" ? 60000 : 1000;
    const remain = unit - (now % unit);
    return Math.max(16, Math.min(unit, remain + 6));
  }

  function scheduleClockTick() {
    if (state.type !== "clock") {
      stopClockTicker();
      return;
    }
    const precision = clockPrecisionOptionById(state.clock?.precision).id;
    clockTicker = window.setTimeout(() => {
      if (state.type !== "clock") {
        stopClockTicker();
        return;
      }
      renderClockSnapshot(new Date());
      scheduleClockTick();
    }, nextClockDelay(precision));
  }

  function ensureClockTicker({ force = false } = {}) {
    if (state.type !== "clock") {
      stopClockTicker();
      return;
    }
    const profile = [
      clockHourOptionById(state.clock?.hourCycle).id,
      clockPrecisionOptionById(state.clock?.precision).id,
      state.clock?.showWorld !== false ? "1" : "0",
      clockZoneOptionById(state.clock?.zoneId).id,
      clockCitySetById(state.clock?.citySet).id,
      clockAmPmStyleOptionById(state.clock?.ampmStyle).id,
    ].join("|");
    renderClockSnapshot(new Date());
    if (!force && clockTicker && clockTickerProfile === profile) return;
    stopClockTicker();
    clockTickerProfile = profile;
    scheduleClockTick();
  }

  function stopAlarmTicker() {
    if (alarmTicker) clearTimeout(alarmTicker);
    alarmTicker = 0;
  }

  function stopAlarmAlertLoop() {
    if (alarmAlertLoopTimer) clearInterval(alarmAlertLoopTimer);
    alarmAlertLoopTimer = 0;
  }

  function showAlarmOverlay(config = state.alarm, targetAt = null) {
    if (!els.alarmOverlay) return;
    const safe = normalizeTypeConfig("alarm", config);
    const targetDate = targetAt instanceof Date && !Number.isNaN(targetAt.getTime())
      ? targetAt
      : new Date(runtime.plan?.targetAt || nextAlarmDate(safe).getTime());
    els.alarmAlertMessage.textContent = normalizeAlarmMessage(safe.message);
    els.alarmAlertMeta.textContent = `${formatAlarmPrimary(safe)} · ${alarmRepeatLabel(safe)} · Snooze ${formatAlarmSnooze(safe.snoozeMinutes)} · ${formatAlarmNextLabel(targetDate)}`;
    els.alarmOverlay.hidden = false;
  }

  function hideAlarmOverlay() {
    if (!els.alarmOverlay) return;
    els.alarmOverlay.hidden = true;
  }

  function startAlarmAlertLoop(config = runtime.plan?.config || state.alarm) {
    stopAlarmAlertLoop();
    playAlarmSound(config);
    if (!sanitizeSoundSettings(normalizeTypeConfig("alarm", config).sound).enabled) return;
    alarmAlertLoopTimer = window.setInterval(() => {
      playAlarmSound(config);
    }, 3600);
  }

  function nextAlarmTickDelay(targetAt) {
    const now = Date.now();
    const remaining = Math.max(0, targetAt - now);
    if (remaining <= 1000) return Math.max(40, remaining || 40);
    return Math.max(120, Math.min(1000, 1000 - (now % 1000) + 8));
  }

  function renderAlarmRuntime(now = Date.now()) {
    if (!runtime.plan || runtime.plan.kind !== "alarm") return;
    const remainingMs = runtime.plan.targetAt - now;
    if (remainingMs <= 0) {
      triggerAlarm();
      return;
    }
    runtime.phaseRemainingMs = remainingMs;
    if (alarmUsesClockDisplay()) {
      renderAlarmClockFace(new Date());
    } else {
      setClockMeridiem("");
      renderDigits(formatClock(Math.max(0, Math.ceil(remainingMs / 1000))));
    }
    setStatus(runtime.plan.snoozed ? "SNOOZE" : "ARMED");
    setPreview(typeLabel(state.type));
    setDurationPill(alarmRuntimeSummary(runtime.plan.config || state.alarm, runtime.plan.targetAt), formatAlarmNextLabel(new Date(runtime.plan.targetAt)));
    renderStageControls();
    renderAlarmBoard();
    stopAlarmTicker();
    alarmTicker = window.setTimeout(() => {
      renderAlarmRuntime(Date.now());
    }, nextAlarmTickDelay(runtime.plan.targetAt));
  }

  function triggerAlarm() {
    if (!runtime.plan || runtime.plan.kind !== "alarm") return;
    stopAlarmTicker();
    stopLoop();
    stopAlarmDisplayTicker();
    runtime.phase = "ended";
    runtime.phaseRemainingMs = 0;
    document.body.classList.add("is-ended");
    emitFinishParticles();
    setClockMeridiem("");
    renderDigits(formatAlarmPrimary(runtime.plan.config || state.alarm));
    setStatus("RINGING");
    setPreview(typeLabel(state.type));
    setDurationPill(alarmRuntimeSummary(runtime.plan.config || state.alarm, runtime.plan.targetAt), "WAKE NOTE");
    renderStageControls();
    renderAlarmBoard();
    showAlarmOverlay(runtime.plan.config || state.alarm, new Date(runtime.plan.targetAt));
    startAlarmAlertLoop(runtime.plan.config || state.alarm);
    persistStore();
    logHistory("finished", {
      type: "alarm",
      summary: "Alarm ringing",
      note: normalizeAlarmMessage((runtime.plan.config || state.alarm).message),
    });
  }

  function snoozeAlarm() {
    if (!runtime.plan || runtime.plan.kind !== "alarm") return;
    const config = normalizeTypeConfig("alarm", runtime.plan.config || state.alarm);
    const snoozeTargetAt = Date.now() + config.snoozeMinutes * 60000;
    stopAlarmAlertLoop();
    hideAlarmOverlay();
    document.body.classList.remove("is-ended");
    runtime.plan = {
      ...runtime.plan,
      config,
      targetAt: snoozeTargetAt,
      snoozed: true,
    };
    runtime.phase = "running";
    renderAlarmRuntime(Date.now());
    persistStore();
    logHistory("snoozed", {
      type: "alarm",
      summary: `Alarm snoozed ${config.snoozeMinutes}m`,
      note: formatAlarmNextLabel(new Date(snoozeTargetAt)),
    });
  }

  function dismissAlarm() {
    if (!runtime.plan || runtime.plan.kind !== "alarm") return;
    const config = normalizeTypeConfig("alarm", runtime.plan.config || state.alarm);
    stopAlarmAlertLoop();
    hideAlarmOverlay();
    document.body.classList.remove("is-ended");
    if ((config.scheduleMode === "time" && config.repeat === "once") || config.scheduleMode === "relative" || config.scheduleMode === "date") {
      runtime.alarmConsumedIds = [...new Set([...(runtime.alarmConsumedIds || []), runtime.plan.alarmId])];
    }
    const next = nextAlarmSchedule(new Date(Date.now() + 1000), {
      excludeIds: runtime.alarmConsumedIds,
    });
    if (!next) {
      resetToIdleState();
      logHistory("dismissed", {
        type: "alarm",
        summary: "Alarm dismissed",
        note: "No armed alarms remain",
      });
      return;
    }
    runtime.plan = {
      kind: "alarm",
      alarmId: next.entry.id,
      config: normalizeTypeConfig("alarm", next.entry),
      targetAt: next.targetAt.getTime(),
      snoozed: false,
    };
    runtime.phase = "running";
    renderAlarmRuntime(Date.now());
    persistStore();
    logHistory("dismissed", {
      type: "alarm",
      summary: "Alarm dismissed",
      note: `Re-armed · ${formatAlarmNextLabel(new Date(runtime.plan.targetAt))}`,
    });
  }

  function stopLoop() {
    if (runtime.rafId) cancelAnimationFrame(runtime.rafId);
    runtime.rafId = 0;
  }

  function scheduleNextFrame(fn) {
    stopLoop();
    runtime.rafId = requestAnimationFrame(fn);
  }

  function skipCurrentPhase() {
    if (!runtime.plan || runtime.plan.kind !== "sequence") return;
    if (runtime.phase !== "running" && runtime.phase !== "paused") return;
    const nextIndex = runtime.phaseIndex + 1;
    if (nextIndex >= runtime.plan.phases.length) {
      finishTimer();
      return;
    }
    const nextPhase = runtime.plan.phases[nextIndex];
    const now = performance.now();
    runtime.phaseIndex = nextIndex;
    runtime.phaseRemainingMs = Math.max(1, nextPhase.seconds) * 1000;
    runtime.phaseEndsAt = now + runtime.phaseRemainingMs;
    runtime.trailStage = "calm";
    runtime.trailAt = now;
    document.body.classList.remove("is-ended");
    renderDigits(formatClock(Math.max(1, nextPhase.seconds)));
    setPreview(typeLabel(state.type));
    setDurationPill(totalSummaryForType(), formatPhaseSummary(nextPhase));
    renderStageControls();
    renderSequencePanel();
    logHistory("skipped", {
      type: state.type,
      summary: `Skipped to ${nextPhase.label}`,
      note: formatPresetSummary(state.type, extractTypeConfig(state.type)),
    });
    if (runtime.phase === "running") {
      scheduleNextFrame(renderSequenceRuntime);
    } else {
      renderPausedRuntime();
    }
  }

  function renderSequenceRuntime(now) {
    if (!runtime.plan || runtime.plan.kind !== "sequence") return;
    let phase = runtime.plan.phases[runtime.phaseIndex];
    if (!phase) return;
    let remainingMs = runtime.phaseEndsAt - now;

    while (remainingMs <= 0) {
      const overshoot = remainingMs;
      emitTrail("rush", phase);
      runtime.phaseIndex += 1;
      if (runtime.phaseIndex >= runtime.plan.phases.length) {
        if (runtime.plan.loop) {
          runtime.phaseIndex = 0;
          runtime.loopCycles += 1;
        } else {
          finishTimer();
          return;
        }
      }
      phase = runtime.plan.phases[runtime.phaseIndex];
      remainingMs = phase.seconds * 1000 + overshoot;
      runtime.phaseEndsAt = now + remainingMs;
    }

    runtime.phaseRemainingMs = remainingMs;
    const totalMs = Math.max(1000, phase.seconds * 1000);
    const ratio = clamp(remainingMs / totalMs, 0, 1);
    const stage = ratio <= 0.1 ? "rush" : ratio <= 0.5 ? "turn" : "calm";
    const intervals = { calm: 1200, turn: 760, rush: 420 };
    if (runtime.trailStage !== stage || now - runtime.trailAt >= intervals[stage]) {
      runtime.trailStage = stage;
      runtime.trailAt = now;
      emitTrail(stage, phase);
    }

    renderDigits(formatClock(Math.max(0, Math.ceil(remainingMs / 1000))));
    setPreview(typeLabel(state.type));
    setDurationPill(totalSummaryForType(), formatPhaseSummary(phase));
    renderSequencePanel();
    runtime.rafId = requestAnimationFrame(renderSequenceRuntime);
  }

  function renderCountupRuntime(now) {
    if (!runtime.plan || (runtime.plan.kind !== "countup" && runtime.plan.kind !== "stopwatch")) return;
    const elapsedMs = now - runtime.startAt;
    runtime.pausedElapsedMs = elapsedMs;
    const elapsedSeconds = Math.max(0, Math.floor(elapsedMs / 1000));
    renderDigits(formatClock(elapsedSeconds));
    setPreview(typeLabel(state.type));
    setDurationPill(totalSummaryForType(), runtime.plan.kind === "stopwatch" ? "STOPWATCH" : "COUNT UP");
    renderSequencePanel();
    if (runtime.plan.kind === "stopwatch") renderStopwatchPanel();

    if (runtime.plan.kind === "countup" && runtime.plan.targetSeconds > 0) {
      const targetMs = runtime.plan.targetSeconds * 1000;
      const ratio = clamp((targetMs - elapsedMs) / targetMs, 0, 1);
      const stage = ratio <= 0.1 ? "rush" : ratio <= 0.5 ? "turn" : "calm";
      const intervals = { calm: 1200, turn: 760, rush: 420 };
      if (runtime.trailStage !== stage || now - runtime.trailAt >= intervals[stage]) {
        runtime.trailStage = stage;
        runtime.trailAt = now;
        emitTrail(stage, null);
      }
      if (elapsedMs >= targetMs) {
        finishTimer();
        return;
      }
    } else if (now - runtime.trailAt >= 2200) {
      runtime.trailAt = now;
      emitTrail("calm", null);
    }

    runtime.rafId = requestAnimationFrame(renderCountupRuntime);
  }

  function finishTimer() {
    const plan = runtime.plan;
    if (plan?.kind === "alarm") {
      triggerAlarm();
      return;
    }
    stopLoop();
    runtime.phase = "ended";
    setStatus("ENDED");
    document.body.classList.add("is-ended");
    emitFinishParticles();
    playCompletionSound();
    if (plan?.kind === "countup" && plan.targetSeconds > 0) {
      runtime.pausedElapsedMs = plan.targetSeconds * 1000;
      renderDigits(formatClock(plan.targetSeconds));
      setDurationPill(totalSummaryForType(), "COMPLETE");
    } else if (plan?.kind === "stopwatch") {
      renderDigits(formatClock(Math.max(0, Math.floor(runtime.pausedElapsedMs / 1000))));
      setDurationPill(totalSummaryForType(), "STOPWATCH");
    } else {
      renderIdleTimer();
    }
    setPreview(typeLabel(state.type));
    renderStageControls();
    renderSequencePanel();
    renderStopwatchPanel();
    persistStore();
    logHistory("finished", {
      type: state.type,
      summary: `${typeLabel(state.type)} complete`,
      note: totalSummaryForType(state.type),
    });
  }

  function startTimer({ fresh = true } = {}) {
    if (state.type === "clock") {
      runtime.plan = { kind: "clock" };
      runtime.phase = "idle";
      runtime.phaseIndex = 0;
      runtime.phaseRemainingMs = 0;
      runtime.pausedElapsedMs = 0;
      runtime.startAt = 0;
      stopLoop();
      ensureClockTicker({ force: true });
      setStatus("LIVE");
      setPreview(typeLabel(state.type));
      setDurationPill(totalSummaryForType(), "LIVE");
      renderStageControls();
      renderSequencePanel();
      renderClockWorld();
      return;
    }
    if (state.type === "alarm") {
      const plan = buildPlan();
      stopClockTicker();
      stopLoop();
      stopAlarmAlertLoop();
      stopAlarmDisplayTicker();
      hideAlarmOverlay();
      runtime.alarmConsumedIds = [];
      runtime.plan = {
        ...plan,
        config: normalizeTypeConfig("alarm", plan.config || state.alarm),
        alarmId: plan.alarmId,
        targetAt: plan.targetAt,
        snoozed: false,
      };
      runtime.phase = "running";
      runtime.phaseIndex = 0;
      runtime.pausedElapsedMs = 0;
      runtime.startAt = 0;
      runtime.trailStage = "";
      runtime.trailAt = 0;
      document.body.classList.remove("is-ended");
      clearTrailParticles();
      renderAlarmRuntime(Date.now());
      return;
    }

    const plan = buildPlan();
    stopClockTicker();
    stopAlarmTicker();
    stopAlarmAlertLoop();
    stopAlarmDisplayTicker();
    hideAlarmOverlay();
    runtime.plan = plan;
    runtime.phase = "running";
    runtime.trailStage = "";
    runtime.trailAt = performance.now();
    runtime.loopCycles = 0;
    document.body.classList.remove("is-ended");
    clearTrailParticles();
    setStatus("RUNNING");
    setPreview(typeLabel(state.type));
    renderStageControls();
    renderSequencePanel();
    renderClockWorld();

    const now = performance.now();
    if (plan.kind === "countup" || plan.kind === "stopwatch") {
      const origin = plan.kind === "stopwatch" ? Math.max(0, plan.startSeconds) * 1000 : 0;
      runtime.pausedElapsedMs = fresh ? origin : runtime.pausedElapsedMs;
      if (plan.kind === "stopwatch" && fresh) {
        runtime.stopwatchSort = "default";
        runtime.stopwatchRenderKey = "";
        runtime.stopwatchLaps = [];
        runtime.stopwatchLapStartMs = origin;
      }
      runtime.startAt = now - runtime.pausedElapsedMs;
      renderStopwatchPanel();
      renderCountupRuntime(now);
      scheduleNextFrame(renderCountupRuntime);
      return;
    }

    runtime.phaseIndex = fresh ? 0 : runtime.phaseIndex;
    const firstPhase = plan.phases[runtime.phaseIndex] || plan.phases[0];
    runtime.phaseEndsAt = now + ((firstPhase?.seconds || 1) * 1000);
    runtime.phaseRemainingMs = (firstPhase?.seconds || 1) * 1000;
    runtime.trailStage = "calm";
    renderDigits(formatClock(Math.max(1, firstPhase?.seconds || 1)));
    setPreview(typeLabel(state.type));
    setDurationPill(totalSummaryForType(), formatPhaseSummary(firstPhase));
    renderSequencePanel();
    scheduleNextFrame(renderSequenceRuntime);
  }

  function pauseTimer() {
    if (runtime.phase !== "running" || !runtime.plan) return;
    if (runtime.plan.kind === "clock") return;
    if (runtime.plan.kind === "alarm") {
      runtime.phase = "paused";
      stopAlarmTicker();
      stopAlarmDisplayTicker();
      setStatus("OFF");
      renderStageControls();
      renderAlarmBoard();
      logHistory("paused", {
        type: "alarm",
        summary: "Alarm off",
        note: alarmDurationSummary(runtime.plan.config || state.alarm),
      });
      return;
    }
    const now = performance.now();
    if (runtime.plan.kind === "countup" || runtime.plan.kind === "stopwatch") {
      runtime.pausedElapsedMs = now - runtime.startAt;
    } else {
      runtime.phaseRemainingMs = Math.max(0, runtime.phaseEndsAt - now);
    }
    runtime.phase = "paused";
    stopLoop();
    setStatus("PAUSED");
    renderStageControls();
    renderSequencePanel();
    renderStopwatchPanel();
    logHistory("paused", {
      type: state.type,
      summary: `${typeLabel(state.type)} paused`,
      note: runtime.plan?.kind === "sequence"
        ? formatClock(Math.max(0, Math.ceil(runtime.phaseRemainingMs / 1000)))
        : formatClock(Math.max(0, Math.floor(runtime.pausedElapsedMs / 1000))),
    });
  }

  function resumeTimer() {
    if (runtime.phase !== "paused" || !runtime.plan) return;
    if (runtime.plan.kind === "clock") return;
    if (runtime.plan.kind === "alarm") {
      const next = nextAlarmSchedule(new Date(), {
        excludeIds: runtime.alarmConsumedIds,
      });
      runtime.phase = "running";
      runtime.plan = {
        ...runtime.plan,
        alarmId: next?.entry?.id || state.alarmSelectedId,
        config: normalizeTypeConfig("alarm", next?.entry || state.alarm),
        targetAt: (next?.targetAt || nextAlarmDate(state.alarm, new Date())).getTime(),
        snoozed: false,
      };
      document.body.classList.remove("is-ended");
      renderAlarmRuntime(Date.now());
      logHistory("resumed", {
        type: "alarm",
        summary: "Alarm armed",
        note: formatAlarmNextLabel(new Date(runtime.plan.targetAt)),
      });
      return;
    }
    const now = performance.now();
    runtime.phase = "running";
    setStatus("RUNNING");
    document.body.classList.remove("is-ended");

    if (runtime.plan.kind === "countup" || runtime.plan.kind === "stopwatch") {
      runtime.startAt = now - runtime.pausedElapsedMs;
      scheduleNextFrame(renderCountupRuntime);
    } else {
      runtime.phaseEndsAt = now + runtime.phaseRemainingMs;
      scheduleNextFrame(renderSequenceRuntime);
    }
    renderStageControls();
    renderSequencePanel();
    renderStopwatchPanel();
    logHistory("resumed", {
      type: state.type,
      summary: `${typeLabel(state.type)} resumed`,
      note: runtime.plan?.kind === "sequence" ? currentTypePhaseLabel() : timeSummaryForType(state.type),
    });
  }

  function restartTimer() {
    applyAndStart();
  }

  function resetToIdleState({ log = false } = {}) {
    runtime.phase = "idle";
    runtime.phaseIndex = 0;
    runtime.phaseRemainingMs = 0;
    runtime.pausedElapsedMs = 0;
    runtime.startAt = 0;
    runtime.trailStage = "";
    runtime.trailAt = 0;
    runtime.loopCycles = 0;
    runtime.stopwatchSort = "default";
    runtime.stopwatchRenderKey = "";
    runtime.stopwatchLaps = [];
    runtime.stopwatchLapStartMs = 0;
    runtime.alarmConsumedIds = [];
    runtime.plan = null;
    stopLoop();
    stopClockTicker();
    stopAlarmTicker();
    stopAlarmAlertLoop();
    stopAlarmDisplayTicker();
    hideAlarmOverlay();
    document.body.classList.remove("is-ended");
    clearTrailParticles();
    renderIdleTimer();
    if (state.type === "clock") {
      ensureClockTicker({ force: true });
      scheduleClockMeridiemLayoutSync();
      setStatus("LIVE");
    } else {
      setStatus("READY");
    }
    setPreview(typeLabel(state.type));
    setDurationPill(totalSummaryForType());
    renderStageControls();
    renderSequencePanel();
    renderClockWorld();
    renderAlarmBoard();
    renderStopwatchPanel();
    persistStore();
    if (log) {
      logHistory("reset", {
        type: state.type,
        summary: `${typeLabel(state.type)} reset`,
        note: timeSummaryForType(state.type),
      });
    }
  }

  function applyAndStart() {
    if (state.type === "stopwatch" && runtime.phase === "running") {
      stopStopwatch();
      return;
    }
    if (state.type === "clock") {
      resetToIdleState();
      ensureClockTicker({ force: true });
      persistStore();
      logHistory("started", {
        type: state.type,
        summary: `${typeLabel(state.type)} started`,
        note: timeSummaryForType(state.type),
      });
      return;
    }
    resetToIdleState();
    startTimer({ fresh: true });
    persistStore();
    logHistory("started", {
      type: state.type,
      summary: `${typeLabel(state.type)} started`,
      note: timeSummaryForType(state.type),
    });
  }

  function clearTrailParticles() {
    timerFrame.querySelectorAll('[data-particle="trail"]').forEach(particle => particle.remove());
  }

  function toggleDetailPanel(force) {
    const next = typeof force === "boolean" ? force : !state.detailPanelVisible;
    state.detailPanelVisible = next;
    updateAllUI();
    persistStore();
  }

  function syncMinimalUI() {
    const hidden = document.body.classList.contains("is-minimal");
    els.uiToggle.setAttribute("aria-pressed", String(hidden));
    if (els.uiTogglePath) {
      els.uiTogglePath.setAttribute("d", hidden ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6");
    } else {
      uiToggleGlyph.textContent = hidden ? "‹" : "›";
    }
    els.uiToggle.setAttribute("aria-label", hidden ? "Show UI" : "Hide UI");
    if (els.uiToggleLabel) els.uiToggleLabel.textContent = hidden ? "UI SHOW" : "UI HIDE";
    document.body.classList.toggle("show-minimal-detail", hidden && state.detailPanelVisible && isDetailPanelType());
    state.uiVisible = !hidden;
  }

  function toggleMinimal(force) {
    const next = typeof force === "boolean" ? force : !document.body.classList.contains("is-minimal");
    document.body.classList.toggle("is-minimal", next);
    syncMinimalUI();
    renderClockWorld();
    renderAlarmBoard();
    scheduleClockMeridiemLayoutSync();
    scheduleAlarmDisplayTogglePosition();
    persistStore();
  }

  function setFont(fontId) {
    state.fontId = FONT_OPTIONS.some(font => font.id === fontId) ? fontId : FONT_OPTIONS[0].id;
    setFontText();
  }

  function setScale(size) {
    state.size = clamp(Number(size) || 100, 10, 200);
    applyScale();
  }

  function setUnit(unit) {
    state.unit = unit === "clock" ? "clock" : "seconds";
    setUnitText();
    setTimeText();
  }

  initControls();
})();


