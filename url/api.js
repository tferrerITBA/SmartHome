"use strict";
var api = class {
  static get baseUrl() {
    return "http://127.0.0.1:8080/api/";
  }

  static get timeout() {
    return 60 * 1000;
  }
}

api.room = class {
  static get url() {
    return api.baseUrl + "rooms/";
  }

  static add(room) {
   return $.ajax({
      url: api.room.url,
      method: "POST",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      timeout: api.timeout,
      data: JSON.stringify(room)
    });
  }

  static modify(room) {
   return $.ajax({
      url: api.room.url + room.id,
      method: "PUT",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      timeout: api.timeout,
      data: JSON.stringify(room)
    });
  }

  static delete(id) {
   return $.ajax({
      url: api.room.url + id,
      method: "DELETE",
      dataType: "json",
      timeout: api.timeout
    });
  }

  static get(id) {
    return $.ajax({
      url: api.room.url + id,
      method: "GET",
      dataType: "json",
      timeout: api.timeout
    });
  }

  static getAll() {
    return $.ajax({
      url: api.room.url,
      method: "GET",
      dataType: "json",
      timeout: api.timeout
    });
  }

  static getDevices(roomId) {
    return $.ajax({
      url: api.room.url + roomId + "/devices",
      method: "GET",
      dataType: "json",
      timeout: api.timeout
    });
  }
}


api.device = class {
  static get url() {
    return api.baseUrl + "devices/";
  }

  static add(device) {
   return $.ajax({
      url: api.device.url,
      method: "POST",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      timeout: api.timeout,
      data: JSON.stringify(device)
    });
  }

  static modify(device, id) {
   return $.ajax({
      url: api.device.url + id,
      method: "PUT",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      timeout: api.timeout,
      data: JSON.stringify(device)
    });
  }

  static delete(id) {
   return $.ajax({
      url: api.device.url + id,
      method: "DELETE",
      dataType: "json",
      timeout: api.timeout
    });
  }

  static get(id) {
    return $.ajax({
      url: api.device.url + id,
      method: "GET",
      dataType: "json",
      timeout: api.timeout
    });
  }

  static getAll() {
    return $.ajax({
      url: api.device.url,
      method: "GET",
      dataType: "json",
      timeout: api.timeout
    });
  }

  static addDeviceToRoom(deviceId, roomId) {
   return $.ajax({
      url: api.device.url + deviceId + "/rooms/" + roomId,
      method: "POST",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      timeout: api.timeout,
      data: JSON.stringify(device)
    });
  }

  static deleteDeviceFromRoom(id) {
   return $.ajax({
      url: api.device.url + id + "/rooms",
      method: "DELETE",
      dataType: "json",
      timeout: api.timeout
    });
  }

  static executeAction(id, actionName, params) {
   return $.ajax({
      url: api.device.url + id + "/" + actionName,
      method: "PUT",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      timeout: api.timeout,
      data: JSON.stringify(params)
    });
  }
}


api.routine = class {
  static get url() {
    return api.baseUrl + "routines/";
  }

  static add(routine) {
   return $.ajax({
      url: api.device.url,
      method: "POST",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      timeout: api.timeout,
      data: JSON.stringify(routine)
    });
  }

  static modify(routine, id) {
   return $.ajax({
      url: api.routine.url + id,
      method: "PUT",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      timeout: api.timeout,
      data: JSON.stringify(routine)
    });
  }

  static delete(id) {
   return $.ajax({
      url: api.routine.url + id,
      method: "DELETE",
      dataType: "json",
      timeout: api.timeout
    });
  }

  static get(id) {
    return $.ajax({
      url: api.routine.url + id,
      method: "GET",
      dataType: "json",
      timeout: api.timeout
    });
  }

  static getAll() {
    return $.ajax({
      url: api.routine.url,
      method: "GET",
      dataType: "json",
      timeout: api.timeout
    });
  }

  static execute(routineId) {
   return $.ajax({
      url: api.routine.url + id + "/execute",
      method: "PUT",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      timeout: api.timeout,
      data: JSON.stringify({})
    });
  }
}

api.deviceType = class {
  static get url() {
    return api.baseUrl + "devicetypes/";
  }

  static getTypes() {
   return $.ajax({
      url: api.deviceType.url,
      method: "GET",
      dataType: "json",
      timeout: api.timeout
    });
  }

  static getTypeById(id) {
   return $.ajax({
      url: api.deviceType.url + id,
      method: "GET",
      dataType: "json",
      timeout: api.timeout
    });
  }
}
