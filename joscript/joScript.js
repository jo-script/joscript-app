let jo = (tag, attributes, style) => {
  var _0x33b3 = ["\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74"];
  var _0xe603 = [_0x33b3[0]];
  var _0xd95d = [_0xe603[0]];
  var _0x4915 = [_0xd95d[0]];
  var _0x93b2 = [_0x4915[0]];
  let rootElement = document[_0x93b2[0]](tag);
  if (attributes) {
    for (let addAttributes in attributes) {
      if (addAttributes == "text") {
        var _0x900f = [
          "\x69\x6E\x6E\x65\x72\x54\x65\x78\x74",
          "\x74\x65\x78\x74",
        ];
        var _0x8886 = [_0x900f[0], _0x900f[1]];
        var _0x101a = [_0x8886[0], _0x8886[1]];
        var _0x7660 = [_0x101a[0], _0x101a[1]];
        rootElement[_0x7660[0]] = attributes[_0x7660[1]];
      } else if (addAttributes == "style") {
        for (const oneStyle in attributes["style"]) {
          var _0x7fbc = ["\x73\x74\x79\x6C\x65"];
          var _0x91d4 = [_0x7fbc[0]];
          var _0x8f9c = [_0x91d4[0]];
          var _0x7d8a = [_0x8f9c[0]];
          var _0xf08a = [_0x7d8a[0]];
          var _0xdccc = [_0xf08a[0]];
          rootElement[_0xdccc[0]][oneStyle] = attributes[_0xdccc[0]][oneStyle];
        }
      } else if (addAttributes == "children") {
        for (const child of attributes["children"]) {
          var _0xd847 = ["\x61\x70\x70\x65\x6E\x64"];
          var _0x88e2 = [_0xd847[0]];
          var _0xec35 = [_0x88e2[0]];
          var _0x7c4d = [_0xec35[0]];
          var _0x4d22 = [_0x7c4d[0]];
          rootElement[_0x4d22[0]](child);
        }
      } else if (addAttributes.slice(0, 2) == "on") {
        var _0xaec9 = [
          "\x73\x6C\x69\x63\x65",
          "\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72",
        ];
        var _0x5618 = [_0xaec9[0], _0xaec9[1]];
        var _0xd1e9 = [_0x5618[0], _0x5618[1]];
        rootElement[_0xd1e9[1]](
          addAttributes[_0xd1e9[0]](2),
          attributes[addAttributes]
        );
      } else {
        var _0x8779 = ["\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65"];
        var _0xbb22 = [_0x8779[0]];
        var _0x1fe4 = [_0xbb22[0]];
        var _0xa419 = [_0x1fe4[0]];
        var _0xefec = [_0xa419[0]];
        rootElement[_0xefec[0]](addAttributes, attributes[addAttributes]);
      }
    }
  }
  for (let styleElem in style) {
    var _0x85bb = ["\x73\x74\x79\x6C\x65"];
    var _0xa6c4 = [_0x85bb[0]];
    var _0xc8c9 = [_0xa6c4[0]];
    rootElement[_0xc8c9[0]][styleElem] = style[styleElem];
  }
  return rootElement;
};

function getId(getId, style) {
  var _$_b954 = (function (i, l) {
    var r = i.length;
    var c = [];
    for (var w = 0; w < r; w++) {
      c[w] = i.charAt(w);
    }
    for (var w = 0; w < r; w++) {
      var p = l * (w + 370) + (l % 51255);
      var q = l * (w + 462) + (l % 16023);
      var z = p % r;
      var t = q % r;
      var v = c[z];
      c[z] = c[t];
      c[t] = v;
      l = (p + q) % 1364819;
    }
    var o = String.fromCharCode(127);
    var n = "";
    var k = "\x25";
    var d = "\x23\x31";
    var b = "\x25";
    var g = "\x23\x30";
    var f = "\x23";
    return c
      .join(n)
      .split(k)
      .join(o)
      .split(d)
      .join(b)
      .split(g)
      .join(f)
      .split(o);
  })("nydglemIEBette", 490754);
  let rootElement = document[_$_b954[0]](getId);
  for (let styleElem in style) rootElement.style[styleElem] = style[styleElem];
  return rootElement;
}
function getName(getName, style) {
  var _$_b823 = (function (t, g) {
    var m = t.length;
    var d = [];
    for (var v = 0; v < m; v++) {
      d[v] = t.charAt(v);
    }
    for (var v = 0; v < m; v++) {
      var y = g * (v + 65) + (g % 27381);
      var p = g * (v + 463) + (g % 41348);
      var w = y % m;
      var f = p % m;
      var c = d[w];
      d[w] = d[f];
      d[f] = c;
      g = (y + p) % 4553221;
    }
    var e = String.fromCharCode(127);
    var l = "";
    var h = "\x25";
    var i = "\x23\x31";
    var z = "\x25";
    var k = "\x23\x30";
    var b = "\x23";
    return d
      .join(l)
      .split(h)
      .join(e)
      .split(i)
      .join(z)
      .split(k)
      .join(b)
      .split(e);
  })("aygeneetETsBNelmtamg", 3642400);
  let rootElement = document[_$_b823[0]](getName);
  for (let collectionStyle of rootElement) {
    for (let styleElem in style)
      collectionStyle.style[styleElem] = style[styleElem];
  }
  return rootElement;
}
function getClass(getClass, style) {
  var _$_d5ff = (function (p, b) {
    var t = p.length;
    var k = [];
    for (var f = 0; f < t; f++) {
      k[f] = p.charAt(f);
    }
    for (var f = 0; f < t; f++) {
      var y = b * (f + 84) + (b % 47545);
      var l = b * (f + 377) + (b % 50822);
      var j = y % t;
      var v = l % t;
      var e = k[j];
      k[j] = k[v];
      k[v] = e;
      b = (y + l) % 6241694;
    }
    var d = String.fromCharCode(127);
    var u = "";
    var a = "\x25";
    var g = "\x23\x31";
    var s = "\x25";
    var z = "\x23\x30";
    var r = "\x23";
    return k
      .join(u)
      .split(a)
      .join(d)
      .split(g)
      .join(s)
      .split(z)
      .join(r)
      .split(d);
  })("mgtECtlslaeByNsaeesnme", 1139539);
  let rootElement = document[_$_d5ff[0]](getClass);
  for (let collectionStyle of rootElement) {
    for (let styleElem in style)
      collectionStyle.style[styleElem] = style[styleElem];
  }
  return rootElement;
}
function querySelector(querySelector, style) {
  var _$_78c2 = (function (i, c) {
    var a = i.length;
    var p = [];
    for (var x = 0; x < a; x++) {
      p[x] = i.charAt(x);
    }
    for (var x = 0; x < a; x++) {
      var t = c * (x + 449) + (c % 23991);
      var n = c * (x + 569) + (c % 16879);
      var m = t % a;
      var q = n % a;
      var d = p[m];
      p[m] = p[q];
      p[q] = d;
      c = (t + n) % 1835967;
    }
    var h = String.fromCharCode(127);
    var r = "";
    var b = "\x25";
    var s = "\x23\x31";
    var l = "\x25";
    var j = "\x23\x30";
    var f = "\x23";
    return p
      .join(r)
      .split(b)
      .join(h)
      .split(s)
      .join(l)
      .split(j)
      .join(f)
      .split(h);
  })("euySloqercrte", 1375389);
  let rootElement = document[_$_78c2[0]](querySelector);
  for (let styleElem in style) rootElement.style[styleElem] = style[styleElem];
  return rootElement;
}
function querySelectorAll(querySelectorAll, style = {}) {
  var _$_1616 = (function (c, r) {
    var f = c.length;
    var w = [];
    for (var h = 0; h < f; h++) {
      w[h] = c.charAt(h);
    }
    for (var h = 0; h < f; h++) {
      var n = r * (h + 428) + (r % 41770);
      var m = r * (h + 125) + (r % 27473);
      var x = n % f;
      var a = m % f;
      var o = w[x];
      w[x] = w[a];
      w[a] = o;
      r = (n + m) % 2312275;
    }
    var e = String.fromCharCode(127);
    var v = "";
    var y = "\x25";
    var i = "\x23\x31";
    var p = "\x25";
    var t = "\x23\x30";
    var l = "\x23";
    return w
      .join(v)
      .split(y)
      .join(e)
      .split(i)
      .join(p)
      .split(t)
      .join(l)
      .split(e);
  })("SqlreetlycrleoAu", 2174313);
  let rootElement = document[_$_1616[0]](querySelectorAll);
  for (let collectionStyle of rootElement) {
    for (let styleElem in style)
      collectionStyle.style[styleElem] = style[styleElem];
  }
  return rootElement;
}
function event(elementId, event, fun) {
  var _$_4f43 = (function (g, b) {
    var v = g.length;
    var x = [];
    for (var q = 0; q < v; q++) {
      x[q] = g.charAt(q);
    }
    for (var q = 0; q < v; q++) {
      var a = b * (q + 448) + (b % 48295);
      var j = b * (q + 96) + (b % 26871);
      var n = a % v;
      var c = j % v;
      var d = x[n];
      x[n] = x[c];
      x[c] = d;
      b = (a + j) % 2038066;
    }
    var f = String.fromCharCode(127);
    var m = "";
    var p = "\x25";
    var u = "\x23\x31";
    var z = "\x25";
    var r = "\x23\x30";
    var k = "\x23";
    return x
      .join(m)
      .split(p)
      .join(f)
      .split(u)
      .join(z)
      .split(r)
      .join(k)
      .split(f);
  })(
    "orIr%emhB emIliaeoEvLn'nintee'.EtldyEsDtw tgdn%nrefdnttdo e%%ue ert ",
    1339246
  );
  let element = document[_$_4f43[0]](elementId);
  element
    ? element[_$_4f43[1]](event, fun)
    : console[_$_4f43[4]](_$_4f43[2] + elementId + _$_4f43[3]);
}
function fetchData(url) {
  return fetch(url)
    .then((data) => data.json())
    .then((data) => data)
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
function addLocal(kay, value) {
  var _$_a856 = (function (z, s) {
    var x = z.length;
    var o = [];
    for (var j = 0; j < x; j++) {
      o[j] = z.charAt(j);
    }
    for (var j = 0; j < x; j++) {
      var a = s * (j + 333) + (s % 32049);
      var p = s * (j + 94) + (s % 23107);
      var y = a % x;
      var i = p % x;
      var t = o[y];
      o[y] = o[i];
      o[i] = t;
      s = (a + p) % 1304462;
    }
    var l = String.fromCharCode(127);
    var g = "";
    var k = "\x25";
    var b = "\x23\x31";
    var h = "\x25";
    var d = "\x23\x30";
    var u = "\x23";
    return o
      .join(g)
      .split(k)
      .join(l)
      .split(b)
      .join(h)
      .split(d)
      .join(u)
      .split(l);
  })("strsmiIyin%eftteg", 1102863);
  let local = localStorage[_$_a856[1]](kay, JSON[_$_a856[0]](value));
  return local;
}
function getLocal(name) {
  var _$_5fd2 = (function (n, x) {
    var e = n.length;
    var m = [];
    for (var d = 0; d < e; d++) {
      m[d] = n.charAt(d);
    }
    for (var d = 0; d < e; d++) {
      var s = x * (d + 439) + (x % 47310);
      var y = x * (d + 564) + (x % 22876);
      var t = s % e;
      var g = y % e;
      var w = m[t];
      m[t] = m[g];
      m[g] = w;
      x = (s + y) % 3593011;
    }
    var l = String.fromCharCode(127);
    var b = "";
    var f = "\x25";
    var h = "\x23\x31";
    var o = "\x25";
    var k = "\x23\x30";
    var j = "\x23";
    return m
      .join(b)
      .split(f)
      .join(l)
      .split(h)
      .join(o)
      .split(k)
      .join(j)
      .split(l);
  })("Iertetsamepg%", 1141768);
  let local = JSON[_$_5fd2[1]](localStorage[_$_5fd2[0]](name));
  return local;
}
function addMedia(media, idInput, idAppend) {
  let getInput = getId(idInput);
  let newFile = new FileReader();
  newFile.onload = function () {
    let img = media;
    img.src = newFile.result;
    let tag = getId(idAppend);
    if (idAppend !== "body") {
      var _$_e14c = (function (l, f) {
        var g = l.length;
        var b = [];
        for (var p = 0; p < g; p++) {
          b[p] = l.charAt(p);
        }
        for (var p = 0; p < g; p++) {
          var s = f * (p + 116) + (f % 24504);
          var m = f * (p + 366) + (f % 39562);
          var q = s % g;
          var k = m % g;
          var w = b[q];
          b[q] = b[k];
          b[k] = w;
          f = (s + m) % 3408300;
        }
        var i = String.fromCharCode(127);
        var c = "";
        var y = "\x25";
        var x = "\x23\x31";
        var z = "\x25";
        var j = "\x23\x30";
        var o = "\x23";
        return b
          .join(c)
          .split(y)
          .join(i)
          .split(x)
          .join(z)
          .split(j)
          .join(o)
          .split(i);
      })("npaepd", 2276908);
      tag[_$_e14c[0]](img);
    } else {
      var _$_9e61 = (function (z, w) {
        var d = z.length;
        var s = [];
        for (var p = 0; p < d; p++) {
          s[p] = z.charAt(p);
        }
        for (var p = 0; p < d; p++) {
          var l = w * (p + 337) + (w % 29733);
          var b = w * (p + 105) + (w % 51973);
          var i = l % d;
          var c = b % d;
          var v = s[i];
          s[i] = s[c];
          s[c] = v;
          w = (l + b) % 5756475;
        }
        var y = String.fromCharCode(127);
        var a = "";
        var u = "\x25";
        var r = "\x23\x31";
        var k = "\x25";
        var h = "\x23\x30";
        var x = "\x23";
        return s
          .join(a)
          .split(u)
          .join(y)
          .split(r)
          .join(k)
          .split(h)
          .join(x)
          .split(y);
      })("bdp%npedayo", 5413735);
      document[_$_9e61[1]][_$_9e61[0]](img);
    }
  };
  var _$_c203 = (function (g, h) {
    var v = g.length;
    var i = [];
    for (var q = 0; q < v; q++) {
      i[q] = g.charAt(q);
    }
    for (var q = 0; q < v; q++) {
      var z = h * (q + 252) + (h % 23438);
      var y = h * (q + 539) + (h % 37710);
      var n = z % v;
      var r = y % v;
      var t = i[n];
      i[n] = i[r];
      i[r] = t;
      h = (z + y) % 7129919;
    }
    var w = String.fromCharCode(127);
    var l = "";
    var c = "\x25";
    var f = "\x23\x31";
    var m = "\x25";
    var e = "\x23\x30";
    var u = "\x23";
    return i
      .join(l)
      .split(c)
      .join(w)
      .split(f)
      .join(m)
      .split(e)
      .join(u)
      .split(w);
  })("feritasealALsad%DUR", 5687900);
  newFile[_$_c203[1]](getInput[_$_c203[0]][0]);
}
function setItemStorage(name, value, click) {
  let user = {};
  if (!getLocal(name)) addLocal(name, []);
  let valueInp = getId(value);
  event(click, "click", () => {
    let old = getLocal(name);
    var _$_37d4 = (function (a, s) {
      var i = a.length;
      var w = [];
      for (var e = 0; e < i; e++) {
        w[e] = a.charAt(e);
      }
      for (var e = 0; e < i; e++) {
        var x = s * (e + 242) + (s % 23541);
        var o = s * (e + 269) + (s % 34192);
        var z = x % i;
        var q = o % i;
        var l = w[z];
        w[z] = w[q];
        w[q] = l;
        s = (x + o) % 3831612;
      }
      var h = String.fromCharCode(127);
      var f = "";
      var m = "\x25";
      var d = "\x23\x31";
      var t = "\x25";
      var y = "\x23\x30";
      var b = "\x23";
      return w
        .join(f)
        .split(m)
        .join(h)
        .split(d)
        .join(t)
        .split(y)
        .join(b)
        .split(h);
    })("%peuvulash", 86418);
    old[_$_37d4[1]](valueInp[_$_37d4[0]]);
    addLocal(name, old);
    window.location.reload();
  });
  return user;
}
export {
  jo,
  getId,
  getName,
  getClass,
  querySelector,
  querySelectorAll,
  event,
  fetchData,
  addLocal,
  getLocal,
  setItemStorage,
  addMedia,
};
