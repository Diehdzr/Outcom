let scormAPI = null;
let lmsConnected = false;

const initCourse = () => {

  if (getAPI()) {
    lmsConnected = true;
    console.log("API encontrada");
    startScormAPI();
  } else {
    console.log("No se encontró API");
  }

};

const getAPI = () => {
  scormAPI = findAPI(window);
  if ((scormAPI == null) && (window.opener != null) && (typeof (window.opener) != "undefined")) {
    if (!window.opener.closed) {
      scormAPI = findAPI(window.opener);
    }

    if ((scormAPI == null) && (window.opener.opener != null) && (typeof (window.opener.opener) != "undefined")) {
      if (!window.opener.opener.closed) {
        scormAPI = findAPI(window.opener.opener);
      }
    }

  }

  if (scormAPI == null) {
    console.log("No se encontró adaptador API.");
    return false;
  }
  console.log("Se encontró adaptador API.");
  return true;
};

const findAPI = (win) => {
  let findAPITries = 0;

  while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
    findAPITries++;

    if (findAPITries > 500) {
      console.log("Busqueda finalizada.");
      return null;
    }
    win = win.parent;
  }

  APIWnd = win;
  return win.API;
};

const startScormAPI = () => {
  scormAPI.LMSInitialize("", "");
  const progress = scormAPI.LMSGetValue("cmi.core.score.raw");
  let slide = scormAPI.LMSGetValue("cmi.core.lesson_location");
  if (progress == 100) {
    scormAPI.LMSSetValue("cmi.core.lesson_status", "completed");
    slide = scormAPI.LMSSetValue("cmi.core.lesson_location", "0");
    scormAPI.LMSCommit("", "");
  } else {
    scormAPI.LMSSetValue("cmi.core.lesson_status", "incomplete");
    scormAPI.LMSCommit("", "");
    if (!isNaN(parseInt(slide, 10))) {
      no_slide = slide == '0' ? 1 : parseInt(slide, 10);
    }
  }
};

const scormSetSlide = (sc_slide) => {
  if (lmsConnected) {
    scormAPI.LMSSetValue("cmi.core.lesson_location", sc_slide);
    scormAPI.LMSCommit("", "");
    console.log("Se guardo el slide: " + sc_slide);
  } else {
    console.log("No hay conexion a la API para guardar el slide. Slide: " + sc_slide);
  }
}

const scormScore = (sc_score) => {
  if (lmsConnected) {
    if (sc_score == '100') {
      console.log("Se termino el curso");
      scormAPI.LMSSetValue("cmi.core.score.raw", "100");
      scormAPI.LMSSetValue("cmi.core.lesson_status", "completed");
      scormAPI.LMSCommit("", "");
    }
    scormAPI.LMSSetValue("cmi.core.score.raw", sc_score);
    scormAPI.LMSCommit("", "");
    const progress = scormAPI.LMSGetValue("cmi.core.score.raw");
    console.log("Se guardo el progreso: " + progress);
  } else {
    console.log("No hay conexion a la API para guardar el Score. Progreso: " + sc_score);
  }
}

const finish = () => {
  if (scormAPI != null) {
    scormAPI.LMSFinish("", "");
  }
}

