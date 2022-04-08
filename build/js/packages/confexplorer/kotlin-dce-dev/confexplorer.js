(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'react', 'kotlin-react', 'kotlinx-html-js', 'kotlin-react-dom', 'kotlin-css', 'kotlin-styled', 'ktor-ktor-io-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('react'), require('kotlin-react'), require('kotlinx-html-js'), require('kotlin-react-dom'), require('kotlin-css'), require('kotlin-styled'), require('ktor-ktor-io-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'confexplorer'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'confexplorer'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'confexplorer'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'confexplorer'.");
    }if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'confexplorer'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'confexplorer'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'confexplorer'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'confexplorer'.");
    }if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'confexplorer'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'confexplorer'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'confexplorer'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'confexplorer'.");
    }if (typeof this['kotlin-styled'] === 'undefined') {
      throw new Error("Error loading module 'confexplorer'. Its dependency 'kotlin-styled' was not found. Please, check whether 'kotlin-styled' is loaded prior to 'confexplorer'.");
    }if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'confexplorer'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'confexplorer'.");
    }root.confexplorer = factory(typeof confexplorer === 'undefined' ? {} : confexplorer, kotlin, react, this['kotlin-react'], this['kotlinx-html-js'], this['kotlin-react-dom'], this['kotlin-css'], this['kotlin-styled'], this['ktor-ktor-io-js-legacy']);
  }
}(this, function (_, Kotlin, $module$react, $module$kotlin_react, $module$kotlinx_html_js, $module$kotlin_react_dom, $module$kotlin_css, $module$kotlin_styled, $module$ktor_ktor_io_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var useState = $module$react.useState;
  var equals = Kotlin.equals;
  var Unit = Kotlin.kotlin.Unit;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var fc = $module$kotlin_react.react.fc_4mavxa$;
  var throwCCE = Kotlin.throwCCE;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var toString = Kotlin.toString;
  var toInt_0 = Kotlin.kotlin.text.toInt_6ic1pp$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var NumberFormatException = Kotlin.kotlin.NumberFormatException;
  var toString_0 = Kotlin.kotlin.text.toString_pqjt0d$;
  var toUShort = Kotlin.kotlin.text.toUShort_6ic1pp$;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var toChar = Kotlin.toChar;
  var toString_1 = Kotlin.kotlin.text.toString_dqglrj$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var UInt_init = Kotlin.kotlin.UInt;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var UShort = Kotlin.kotlin.UShort;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var set_onInput = $module$kotlin_react_dom.react.dom.set_onInput_8970js$;
  var LinearDimension = $module$kotlin_css.kotlinx.css.LinearDimension;
  var set_height = $module$kotlin_css.kotlinx.css.set_height_n8chyh$;
  var Display = $module$kotlin_css.kotlinx.css.Display;
  var set_display = $module$kotlin_css.kotlinx.css.set_display_qidz4o$;
  var set_width = $module$kotlin_css.kotlinx.css.set_width_n8chyh$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var Color = $module$kotlin_css.kotlinx.css.Color;
  var set_color = $module$kotlin_css.kotlinx.css.set_color_ommczd$;
  var TextAlign = $module$kotlin_css.kotlinx.css.TextAlign;
  var set_textAlign = $module$kotlin_css.kotlinx.css.set_textAlign_q2ys32$;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var set_borderWidth = $module$kotlin_css.kotlinx.css.set_borderWidth_n8chyh$;
  var set_contentEditable = $module$kotlinx_html_js.kotlinx.html.set_contentEditable_jqpcbu$;
  var set_onPaste = $module$kotlin_react_dom.react.dom.set_onPaste_rs73sa$;
  var Overflow = $module$kotlin_css.kotlinx.css.Overflow;
  var set_overflow = $module$kotlin_css.kotlinx.css.set_overflow_qhpm6s$;
  var set_fontFamily = $module$kotlin_css.kotlinx.css.set_fontFamily_krvuuu$;
  var set_paddingTop = $module$kotlin_css.kotlinx.css.set_paddingTop_n8chyh$;
  var set_defaultValue = $module$kotlin_react_dom.react.dom.set_defaultValue_q3v29f$;
  var ThScope = $module$kotlinx_html_js.kotlinx.html.ThScope;
  var set_padding = $module$kotlin_css.kotlinx.css.set_padding_krvuuu$;
  var set_fontSize = $module$kotlin_css.kotlinx.css.set_fontSize_n8chyh$;
  var Visibility = $module$kotlin_css.kotlinx.css.Visibility;
  var set_visibility = $module$kotlin_css.kotlinx.css.set_visibility_xorjt0$;
  var Float = $module$kotlin_css.kotlinx.css.Float;
  var set_float = $module$kotlin_css.kotlinx.css.set_float_oo7voy$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var slice = Kotlin.kotlin.text.slice_fc3b62$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var OPTION_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
  var RDOMBuilder = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var html = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var SELECT_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SELECT;
  var StyledDOMBuilder = $module$kotlin_styled.styled.StyledDOMBuilder;
  var enumEncode = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  var A_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.A;
  var BUTTON_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var DIV_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var enumEncode_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_1 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var FORM_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FORM;
  var attributesMapOf_2 = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var TH_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TH;
  var TD_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
  var TR_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TR;
  var TABLE_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TABLE;
  var UShortArray_init = Kotlin.kotlin.UShortArray;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Position = $module$kotlin_css.kotlinx.css.Position;
  var set_position = $module$kotlin_css.kotlinx.css.set_position_mvtmy5$;
  var set_bottom = $module$kotlin_css.kotlinx.css.set_bottom_n8chyh$;
  var set_overflowY = $module$kotlin_css.kotlinx.css.set_overflowY_qhpm6s$;
  var P_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  var uintCompare = Kotlin.kotlin.uintCompare_vux9f0$;
  var toShort = Kotlin.toShort;
  var uintDivide = Kotlin.kotlin.uintDivide_oqfnby$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var throwUPAE = Kotlin.throwUPAE;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var Exception = Kotlin.kotlin.Exception;
  var toUShort_0 = Kotlin.kotlin.text.toUShort_pdl1vz$;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var encodeToByteArray = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.encodeToByteArray_fj4osb$;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  InputT.prototype = Object.create(Enum.prototype);
  InputT.prototype.constructor = InputT;
  ACC_STATE.prototype = Object.create(Enum.prototype);
  ACC_STATE.prototype.constructor = ACC_STATE;
  ACC.prototype = Object.create(HardwareBlock.prototype);
  ACC.prototype.constructor = ACC;
  ALU_OP.prototype = Object.create(Enum.prototype);
  ALU_OP.prototype.constructor = ALU_OP;
  ALU.prototype = Object.create(HardwareBlock.prototype);
  ALU.prototype.constructor = ALU;
  ACTION_BLOCK.prototype = Object.create(Enum.prototype);
  ACTION_BLOCK.prototype.constructor = ACTION_BLOCK;
  Control$SyscallTypes.prototype = Object.create(Enum.prototype);
  Control$SyscallTypes.prototype.constructor = Control$SyscallTypes;
  IR_STATE.prototype = Object.create(Enum.prototype);
  IR_STATE.prototype.constructor = IR_STATE;
  IR.prototype = Object.create(HardwareBlock.prototype);
  IR.prototype.constructor = IR;
  MAR.prototype = Object.create(HardwareBlock.prototype);
  MAR.prototype.constructor = MAR;
  MDR_STATE.prototype = Object.create(Enum.prototype);
  MDR_STATE.prototype.constructor = MDR_STATE;
  MDR.prototype = Object.create(HardwareBlock.prototype);
  MDR.prototype.constructor = MDR;
  PC.prototype = Object.create(HardwareBlock.prototype);
  PC.prototype.constructor = PC;
  var simulator;
  var lineSelectStepDebug;
  var MAX_WORD_VAL;
  var disable_logs;
  var light_mode;
  var isFetchNext;
  var componentToValue;
  function app$lambda$lambda$lambda(selection) {
    if (equals(selection.toLowerCase(), 'hexadecimal')) {
      simulator.inputType = InputT$HEX_getInstance();
      console.log('hex');
    } else {
      if (equals(selection.toLowerCase(), 'assembly')) {
        simulator.inputType = InputT$ASM_getInstance();
        console.log('asm');
      } else {
        simulator.inputType = InputT$BIN_getInstance();
        console.log('bin');
      }
    }
    return Unit;
  }
  function app$lambda$lambda$lambda_0(closure$logs) {
    return function (input) {
      changeMemWindowVisibility(false);
      changeAllLinesToBlackInEditor();
      removeSyscallLogs();
      resetMemory();
      var $this = closure$logs;
      var value = emptyList();
      $this[1](value);
      var output = split(simulator.runSimulation_61zpoe$(input), ['\n']);
      if (!disable_logs) {
        closure$logs[1](output);
      }if (indexOf(output.get_za3lpa$(0), 'line') !== -1) {
        var logArr = split(output.get_za3lpa$(0), [' ']);
        for (var i = 0; i !== logArr.size; ++i) {
          if (i !== 0) {
            if (equals(logArr.get_za3lpa$(i - 1 | 0), 'line')) {
              changeColorOfALineInEditor(toInt(logArr.get_za3lpa$(i)), 'red');
              scrollToLine(toInt(logArr.get_za3lpa$(i)));
              closure$logs[1](output);
            }}}
      }return Unit;
    };
  }
  function app$lambda$lambda$lambda_1(closure$logs) {
    return function (input) {
      removeSyscallLogs();
      resetMemory();
      refreshMemoryWindow(1);
      var $this = closure$logs;
      var value = emptyList();
      $this[1](value);
      lineSelectStepDebug = 1;
      var memorySetupOutput = simulator.preprocessAndCompile_61zpoe$(input);
      if (!equals(memorySetupOutput.compilationStatus, 'OK')) {
        var $this_0 = closure$logs;
        var value_0 = listOf(memorySetupOutput.compilationStatus);
        $this_0[1](value_0);
        if (indexOf(memorySetupOutput.compilationStatus, 'line') !== -1) {
          var logArr = split(memorySetupOutput.compilationStatus, [' ']);
          for (var i = 0; i !== logArr.size; ++i) {
            if (i !== 0) {
              if (equals(logArr.get_za3lpa$(i - 1 | 0), 'line')) {
                changeColorOfALineInEditor(toInt(logArr.get_za3lpa$(i)), 'red');
                scrollToLine(toInt(logArr.get_za3lpa$(i)));
              }}}
        }} else {
        var tmp$ = closure$logs;
        var value_1 = emptyList();
        tmp$[1](value_1);
        changeAllLinesToBlackInEditor();
        lineSelectStepDebug = memorySetupOutput.firstLine;
        changeColorOfALineInEditor(memorySetupOutput.firstLine, 'blue');
        scrollToLine(memorySetupOutput.firstLine);
        changeMemWindowVisibility(true);
        resetComponentValues();
        removeSyscallLogs();
        setupMemoryContents(memorySetupOutput.memory);
        simulator.prepareModelForDebug_1n40sl$(memorySetupOutput.memory);
        refreshMemoryWindow(1);
      }
      return Unit;
    };
  }
  function app$lambda$lambda$lambda_2(closure$logs) {
    return function () {
      if (!isFetchNext) {
        window.alert("Cannot step instruction as simulator hasn't executed second cycle of previous instruction.");
      } else {
        removeUpdateColoring();
        var fetchEffect = simulator.fetchCycleStep();
        var instructionEffect = simulator.executeCycleStep();
        showSimulation(fetchEffect, instructionEffect.processorStateChange);
        if (!contains(instructionEffect.log, 'break')) {
          if (instructionEffect.memUpdate.storeAddress != null && instructionEffect.memUpdate.storeValue != null) {
            updateMemoryWord(ensureNotNull(instructionEffect.memUpdate.storeAddress), ensureNotNull(instructionEffect.memUpdate.storeValue));
            refreshMemoryWindow(getPageNumberForAddress(ensureNotNull(instructionEffect.memUpdate.storeAddress)));
            showMemoryCellAsChanged(ensureNotNull(instructionEffect.memUpdate.storeAddress));
          }if (!disable_logs) {
            var tmp$ = closure$logs;
            var value = plus(closure$logs[0], instructionEffect.log);
            tmp$[1](value);
          }lineSelectStepDebug = lineSelectStepDebug + instructionEffect.pcJump | 0;
          changeAllLinesToBlackInEditor();
          changeColorOfALineInEditor(lineSelectStepDebug, 'blue');
          scrollToLine(lineSelectStepDebug);
        } else {
          changeAllLinesToBlackInEditor();
          changeMemWindowVisibility(false);
          removeSyscallLogs();
        }
      }
      return Unit;
    };
  }
  function app$lambda$lambda$lambda_3() {
    sendMemoryUpdate();
    return Unit;
  }
  function app$lambda$lambda$lambda_4(closure$logs) {
    return function () {
      if (isFetchNext) {
        showSimulation(simulator.fetchCycleStep());
        isFetchNext = false;
      } else {
        var instructionEffect = simulator.executeCycleStep();
        showSimulation(instructionEffect.processorStateChange);
        isFetchNext = true;
        removeUpdateColoring();
        if (!contains(instructionEffect.log, 'break')) {
          if (instructionEffect.memUpdate.storeAddress != null && instructionEffect.memUpdate.storeValue != null) {
            updateMemoryWord(ensureNotNull(instructionEffect.memUpdate.storeAddress), ensureNotNull(instructionEffect.memUpdate.storeValue));
            refreshMemoryWindow(getPageNumberForAddress(ensureNotNull(instructionEffect.memUpdate.storeAddress)));
            showMemoryCellAsChanged(ensureNotNull(instructionEffect.memUpdate.storeAddress));
          }if (!disable_logs) {
            var tmp$ = closure$logs;
            var value = plus(closure$logs[0], instructionEffect.log);
            tmp$[1](value);
          }lineSelectStepDebug = lineSelectStepDebug + instructionEffect.pcJump | 0;
          changeAllLinesToBlackInEditor();
          changeColorOfALineInEditor(lineSelectStepDebug, 'blue');
          scrollToLine(lineSelectStepDebug);
        } else {
          changeAllLinesToBlackInEditor();
          changeMemWindowVisibility(false);
          removeSyscallLogs();
        }
      }
      return Unit;
    };
  }
  function app$lambda$lambda(closure$logs) {
    return function ($receiver) {
      $receiver.attrs.onSelect = app$lambda$lambda$lambda;
      $receiver.attrs.onRunClick = app$lambda$lambda$lambda_0(closure$logs);
      $receiver.attrs.onDebugClick = app$lambda$lambda$lambda_1(closure$logs);
      $receiver.attrs.onStep = app$lambda$lambda$lambda_2(closure$logs);
      $receiver.attrs.onMemoryUpdate = app$lambda$lambda$lambda_3;
      $receiver.attrs.onCycleStep = app$lambda$lambda$lambda_4(closure$logs);
      return Unit;
    };
  }
  function app$lambda$lambda_0(closure$logs) {
    return function ($receiver) {
      $receiver.attrs.logs = closure$logs[0];
      return Unit;
    };
  }
  function app$lambda($receiver, it) {
    var logs = useState(emptyList());
    $receiver.child_1mw94g$(inputComponent, void 0, app$lambda$lambda(logs));
    $receiver.child_1mw94g$(logger, void 0, app$lambda$lambda_0(logs));
    return Unit;
  }
  var app;
  function buildDiagram(mermaidText) {
    var tmp$, tmp$_0, tmp$_1;
    var mainDiv = Kotlin.isType(tmp$ = document.getElementById('mainLeftRightDiv'), HTMLDivElement) ? tmp$ : throwCCE();
    if ((tmp$_0 = mainDiv.lastChild) != null) {
      mainDiv.removeChild(tmp$_0);
    }var diagramDiv = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLDivElement) ? tmp$_1 : throwCCE();
    diagramDiv.className = 'mermaid';
    diagramDiv.id = 'diagram';
    diagramDiv.innerHTML = mermaidText;
    diagramDiv.style.width = '40%';
    diagramDiv.style.cssFloat = 'left';
    diagramDiv.style.padding = '40px';
    mainDiv.appendChild(diagramDiv);
    mermaid.init(undefined, '.mermaid');
  }
  function showSimulation$lambda(closure$diagram) {
    return function () {
      buildDiagram(closure$diagram.v);
      return Unit;
    };
  }
  function showSimulation$lambda_0(closure$secondProcessorStateChange) {
    return function () {
      showSimulation(closure$secondProcessorStateChange);
      return Unit;
    };
  }
  function showSimulation(processorStateChange, secondProcessorStateChange) {
    if (secondProcessorStateChange === void 0)
      secondProcessorStateChange = null;
    var boilerplateDiagramText = buildDiagramWithValues();
    var connectionToIndexMap = mutableMapOf([to('MEMMDR', 0), to('MARMEM', 1), to('MDRACC', 2), to('ACCALU', 3), to('ALUACC', 3), to('MDRALU', 4), to('MDRIR', 5), to('IRMAR', 6), to('IRCON', 7), to('PCMAR', 8), to('IRPC', 9), to('IRALU', 10)]);
    var timeout = 0;
    var index = 0;
    for (var tmp$ = processorStateChange.visitedComponents.iterator(); tmp$.hasNext(); ++index) {
      var component = tmp$.next();
      var diagram = {v: boilerplateDiagramText};
      if (connectionToIndexMap.containsKey_11rb$(component.toString())) {
        diagram.v = boilerplateDiagramText + ('\n' + 'linkStyle ' + toString(connectionToIndexMap.get_11rb$(component.toString())) + ' stroke:red');
      } else {
        if (componentToValue.containsKey_11rb$(component.toString()) && processorStateChange.componentToReadValue.containsKey_11rb$(component.toString())) {
          var newComponentValue = ensureNotNull(processorStateChange.componentToReadValue.get_11rb$(component.toString()));
          if (newComponentValue !== -1) {
            var $receiver = componentToValue;
            var key = component.toString();
            $receiver.put_xwzc9p$(key, newComponentValue);
          }boilerplateDiagramText = buildDiagramWithValues();
        }diagram.v = boilerplateDiagramText + ('\n' + 'style ' + component.toString() + ' fill:red');
      }
      window.setTimeout(showSimulation$lambda(diagram), timeout);
      timeout = timeout + 1000 | 0;
      if (index === (processorStateChange.visitedComponents.size - 1 | 0)) {
        if (secondProcessorStateChange != null) {
          window.setTimeout(showSimulation$lambda_0(secondProcessorStateChange), timeout);
        }}}
  }
  function refreshMemoryWindow(page) {
    changePageInput(page);
    changeMemoryWindowPage(page);
  }
  function validateHexInput(input) {
    try {
      var inputAsInt = toInt_0(input, 16);
      if (inputAsInt > 65535) {
        throw IllegalArgumentException_init('Input value more than word width');
      }} catch (e) {
      if (Kotlin.isType(e, NumberFormatException)) {
        throw new NumberFormatException('Input not in hex');
      } else
        throw e;
    }
  }
  function sendMemoryUpdate() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var table = Kotlin.isType(tmp$ = document.getElementById('memTable'), HTMLTableElement) ? tmp$ : throwCCE();
    tmp$_0 = table.childElementCount;
    for (var i = 1; i < tmp$_0; i++) {
      var row = Kotlin.isType(tmp$_1 = table.children[i], HTMLTableRowElement) ? tmp$_1 : throwCCE();
      tmp$_2 = row.childElementCount;
      for (var j = 1; j < tmp$_2; j++) {
        var element = Kotlin.isType(tmp$_3 = row.children[j], HTMLTableCellElement) ? tmp$_3 : throwCCE();
        if (element.textContent != null) {
          if (!equals(proceedWithZeros(4, toString_0(getFrontMemoryContents().get_za3lpa$(toInt_0(element.id, 16)), 16)), ensureNotNull(element.textContent))) {
            try {
              validateHexInput(ensureNotNull(element.textContent));
              updateMemoryWord(toInt_0(element.id, 16), toUShort(ensureNotNull(element.textContent), 16));
              simulator.updateSimulatorsMemory_1pe3u2$(toInt_0(element.id, 16), toUShort(ensureNotNull(element.textContent), 16));
            } catch (ne) {
              if (Kotlin.isType(ne, NumberFormatException)) {
                window.alert('Input (' + toString(element.textContent) + ') is not hexadecimal');
                element.textContent = proceedWithZeros(4, toString_0(getFrontMemoryContents().get_za3lpa$(toInt_0(element.id, 16)), 16)).toUpperCase();
              } else if (Kotlin.isType(ne, IllegalArgumentException)) {
                var iae = ne;
                window.alert('Input (' + toString(element.textContent) + ') is more than word size');
                element.textContent = proceedWithZeros(4, toString_0(getFrontMemoryContents().get_za3lpa$(toInt_0(element.id, 16)), 16)).toUpperCase();
              } else
                throw ne;
            }
          }} else {
          window.alert('Cannot update ' + element.id + ' to null');
          element.textContent = proceedWithZeros(4, toString_0(getFrontMemoryContents().get_za3lpa$(toInt_0(element.id, 16)), 16));
        }
      }
    }
  }
  function syscallPrintInt(startAddress) {
    var tmp$;
    var mem = Memory_getInstance().arr;
    var hi = mem.get_za3lpa$(startAddress.data & 65535);
    var low = mem.get_za3lpa$((startAddress.data & 65535) + 1 | 0);
    var res = new UInt_init((hi.data & 65535) << 16);
    var tmp$_0 = res;
    var other = new UInt_init(low.data & 65535);
    res = new UInt_init(tmp$_0.data | other.data);
    var loggerDiv = Kotlin.isType(tmp$ = document.getElementById('loggerDiv'), HTMLDivElement) ? tmp$ : throwCCE();
    var p = document.createElement('p');
    p.textContent = res.toString();
    p.className = 'syscall';
    loggerDiv.appendChild(p);
  }
  function syscallPrintFloat(startAddress) {
    var tmp$;
    var mem = Memory_getInstance().arr;
    var hi = mem.get_za3lpa$(startAddress.data & 65535);
    var low = mem.get_za3lpa$((startAddress.data & 65535) + 1 | 0);
    var res = new UInt_init((hi.data & 65535) << 16);
    var tmp$_0 = res;
    var other = new UInt_init(low.data & 65535);
    res = new UInt_init(tmp$_0.data | other.data);
    var bits = res.data;
    var fl = Kotlin.floatFromBits(bits);
    var loggerDiv = Kotlin.isType(tmp$ = document.getElementById('loggerDiv'), HTMLDivElement) ? tmp$ : throwCCE();
    var p = document.createElement('p');
    p.className = 'syscall';
    p.textContent = fl.toString();
    loggerDiv.appendChild(p);
  }
  function syscallPrintString(startAddress) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var toPrint = '';
    var index = -1;
    var firstByte = true;
    var mem = Memory_getInstance().arr;
    tmp$ = startAddress.data & 65535;
    tmp$_0 = mem.size;
    for (var i = tmp$; i < tmp$_0; i++) {
      if ((mem.get_za3lpa$(i).data & 65535 & 255) === 0) {
        index = i;
        firstByte = false;
        break;
      } else {
        if ((mem.get_za3lpa$(i).data & 65535 & 65280) === 0) {
          index = i;
          break;
        }}
      if ((i + 1 | 0) === mem.size) {
        return;
      }}
    tmp$_1 = startAddress.data & 65535;
    tmp$_2 = index;
    for (var i_0 = tmp$_1; i_0 <= tmp$_2; i_0++) {
      if (i_0 === index && firstByte) {
        var first = (mem.get_za3lpa$(i_0).data & 65535 & 65280) >> 8;
        toPrint += String.fromCharCode(toChar(first));
      } else {
        var first_0 = (mem.get_za3lpa$(i_0).data & 65535 & 65280) >> 8;
        var second = mem.get_za3lpa$(i_0).data & 65535 & 255;
        toPrint += String.fromCharCode(toChar(first_0));
        toPrint += String.fromCharCode(toChar(second));
      }
    }
    var loggerDiv = Kotlin.isType(tmp$_3 = document.getElementById('loggerDiv'), HTMLDivElement) ? tmp$_3 : throwCCE();
    var p = document.createElement('p');
    p.textContent = toPrint;
    p.className = 'syscall';
    loggerDiv.appendChild(p);
  }
  function removeSyscallLogs() {
    var tmp$, tmp$_0, tmp$_1;
    var div = Kotlin.isType(tmp$ = document.getElementById('loggerDiv'), HTMLDivElement) ? tmp$ : throwCCE();
    var removedSoFar = 0;
    tmp$_0 = div.childElementCount;
    for (var i = 0; i < tmp$_0; i++) {
      var child = Kotlin.isType(tmp$_1 = div.children[i - removedSoFar | 0], HTMLParagraphElement) ? tmp$_1 : throwCCE();
      if (equals(child.className, 'syscall')) {
        div.removeChild(child);
        removedSoFar = removedSoFar + 1 | 0;
      }}
  }
  function enableLogs(isEnable) {
    disable_logs = !isEnable;
  }
  function areLogsEnabled() {
    return !disable_logs;
  }
  function enableLightMode(isEnable) {
    light_mode = isEnable;
  }
  function isLightMode() {
    return light_mode;
  }
  function resetComponentValues() {
    componentToValue.put_xwzc9p$('ACC', 0);
    componentToValue.put_xwzc9p$('ALU', 0);
    componentToValue.put_xwzc9p$('IR', 0);
    componentToValue.put_xwzc9p$('MAR', 0);
    componentToValue.put_xwzc9p$('MDR', 0);
    componentToValue.put_xwzc9p$('PC', 0);
  }
  function buildDiagramWithValues() {
    return trimIndent('\n' + '                        flowchart TB' + '\n' + "                        %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#f8f9fa', 'textColor': '" + diagramLinkColor + "', 'lineColor': '" + diagramLinkColor + "', 'fontSize': '" + '30' + "px', 'fontFamily': 'Monospace'}}}%%" + '\n' + '    MDR[MDR' + '\\' + 'n0x' + proceedWithZeros(4, toString_1(ensureNotNull(componentToValue.get_11rb$('MDR')), 16).toUpperCase()) + '] ' + '\n' + '    IR[IR' + '\\' + 'n0x' + proceedWithZeros(4, toString_1(ensureNotNull(componentToValue.get_11rb$('IR')), 16).toUpperCase()) + ']' + '\n' + '    ACC[ACC' + '\\' + 'n0x' + proceedWithZeros(4, toString_1(ensureNotNull(componentToValue.get_11rb$('ACC')), 16).toUpperCase()) + ']' + '\n' + '    ALU[/ALU' + '\\' + 'n0x' + proceedWithZeros(4, toString_1(ensureNotNull(componentToValue.get_11rb$('ALU')), 16).toUpperCase()) + '\\' + ']' + '\n' + '    MAR[MAR' + '\\' + 'n0x' + proceedWithZeros(4, toString_1(ensureNotNull(componentToValue.get_11rb$('MAR')), 16).toUpperCase()) + ']' + '\n' + '    PC[PC' + '\\' + 'n0x' + proceedWithZeros(4, toString_1(ensureNotNull(componentToValue.get_11rb$('PC')), 16).toUpperCase()) + ']' + '\n' + '    CON[CONTROL UNIT]' + '\n' + '    MEM[MEMORY]' + '\n' + '\n' + '    MEM --- MDR ' + '\n' + '    MEM --- MAR ' + '\n' + '    MDR --- ACC' + '\n' + '    ACC --- ALU' + '\n' + '    MDR --- ALU' + '\n' + '    MDR --- IR' + '\n' + '    MAR --- IR ' + '\n' + '    IR --- CON' + '\n' + '    MAR --- PC ' + '\n' + '    IR --- PC' + '\n' + '    IR --- ALU' + '\n' + '    ');
  }
  function option$lambda(closure$classes) {
    return function (it) {
      return new OPTION_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledSelect$lambda(it) {
    return new SELECT_init(html.emptyMap, it);
  }
  function styledInput$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name]), it);
    };
  }
  function styledA$lambda(closure$href, closure$target) {
    return function (it) {
      return new A_init(attributesMapOf_0(['href', closure$href, 'target', closure$target]), it);
    };
  }
  function styledButton$lambda(closure$formEncType, closure$formMethod, closure$type) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null]), it);
    };
  }
  function styledDiv$lambda(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function form$lambda(closure$action, closure$encType, closure$method, closure$classes) {
    return function (it) {
      return new FORM_init(attributesMapOf_1(['action', closure$action, 'enctype', closure$encType != null ? enumEncode_0(closure$encType) : null, 'method', closure$method != null ? enumEncode_0(closure$method) : null, 'class', closure$classes]), it);
    };
  }
  function styledTh$lambda(closure$scope) {
    return function (it) {
      return new TH_init(attributesMapOf_2('scope', closure$scope != null ? enumEncode(closure$scope) : null), it);
    };
  }
  function styledTd$lambda(it) {
    return new TD_init(html.emptyMap, it);
  }
  function styledTr$lambda(it) {
    return new TR_init(html.emptyMap, it);
  }
  function styledTable$lambda(it) {
    return new TABLE_init(html.emptyMap, it);
  }
  function UShortArray$lambda(closure$init) {
    return function (index) {
      return closure$init(index).data;
    };
  }
  function memoryContents$lambda(it) {
    return new UShort(-8531);
  }
  var memoryContents;
  var WORDS_PER_PAGE;
  var currentMemoryPage;
  var DIAGRAM_FONT_SIZE;
  var diagramLinkColor;
  function inputComponent$lambda$lambda(it) {
    var tmp$, tmp$_0;
    var target = Kotlin.isType(tmp$ = it.target, HTMLElement) ? tmp$ : throwCCE();
    if (!target.matches('.dropdown-toggle')) {
      var dropdownDiv = Kotlin.isType(tmp$_0 = document.getElementById('dropdowndiv'), HTMLDivElement) ? tmp$_0 : throwCCE();
      if (dropdownDiv.classList.contains('show')) {
        dropdownDiv.classList.remove('show');
      }}return Unit;
  }
  function inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$props) {
    return function (it) {
      var tmp$;
      closure$props.onSelect((Kotlin.isType(tmp$ = it.target, HTMLSelectElement) ? tmp$ : throwCCE()).value);
      return Unit;
    };
  }
  function inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$props) {
    return function (it) {
      it.preventDefault();
      closure$props.onRunClick(getTextInEditor());
      console.log('Trying to start simulator');
      return Unit;
    };
  }
  function inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$props) {
    return function (it) {
      it.preventDefault();
      closure$props.onDebugClick(getTextInEditor());
      console.log('Trying to start simulator in debug mode');
      return Unit;
    };
  }
  function inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(it) {
    var tmp$;
    var dropdownDiv = Kotlin.isType(tmp$ = document.getElementById('dropdowndiv'), HTMLDivElement) ? tmp$ : throwCCE();
    dropdownDiv.classList.toggle('show');
    return Unit;
  }
  function inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(it) {
    var tmp$;
    var anchor = Kotlin.isType(tmp$ = document.getElementById('logOption'), HTMLAnchorElement) ? tmp$ : throwCCE();
    enableLogs(!areLogsEnabled());
    anchor.innerText = areLogsEnabled() ? 'Disable logs' : 'Enable logs';
    return Unit;
  }
  function inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(it) {
    var tmp$;
    var anchor = Kotlin.isType(tmp$ = document.getElementById('colorMode'), HTMLAnchorElement) ? tmp$ : throwCCE();
    enableLightMode(!isLightMode());
    anchor.innerText = isLightMode() ? 'Dark mode' : 'Light mode';
    toggleColorMode();
    return Unit;
  }
  function inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda(it) {
    it.preventDefault();
    var text = it.clipboardData.getData('text/plain');
    window.document.execCommand('insertText', false, text);
    return Unit;
  }
  function inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$props) {
    return function (it) {
      closure$props.onMemoryUpdate();
      return Unit;
    };
  }
  function inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(it) {
    var tmp$;
    changeMemoryWindowPage(toInt((Kotlin.isType(tmp$ = it.target, HTMLInputElement) ? tmp$ : throwCCE()).value));
    return Unit;
  }
  function inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(it) {
    var tmp$, tmp$_0;
    var div = Kotlin.isType(tmp$ = document.getElementById('selectedWordNum'), HTMLDivElement) ? tmp$ : throwCCE();
    div.innerText = 'Selected word: 0x' + proceedWithZeros(4, (Kotlin.isType(tmp$_0 = it.target, HTMLTableCellElement) ? tmp$_0 : throwCCE()).id.toUpperCase());
    return Unit;
  }
  function inputComponent$lambda$lambda$lambda$lambda$lambda$lambda(closure$props) {
    return function (it) {
      it.preventDefault();
      closure$props.onStep();
      return Unit;
    };
  }
  function inputComponent$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$props) {
    return function (it) {
      it.preventDefault();
      closure$props.onCycleStep();
      return Unit;
    };
  }
  function inputComponent$lambda($receiver, props) {
    document.execCommand('defaultParagraphSeparator', false, 'div');
    window.onclick = inputComponent$lambda$lambda;
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    set_id($receiver_0.attrs, 'mainLeftRightDiv');
    var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    set_id($receiver_0_1.attrs, 'controlDiv');
    set_classes($receiver_0_1.attrs, setOf('border border-dark'));
    var $receiver_0_2 = RDOMBuilder.Companion.invoke_f6ihu2$(form$lambda(null, null, null, null));
    var $receiver_0_3 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    var $receiver_0_4 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSelect$lambda);
    set_id($receiver_0_4.attrs, 'inputTypeSelect');
    set_classes($receiver_0_4.attrs, setOf('custom-select'));
    var $receiver_0_5 = RDOMBuilder.Companion.invoke_f6ihu2$(option$lambda(null));
    $receiver_0_5.unaryPlus_pdl1vz$('Assembly');
    $receiver_0_4.child_30b5ua$($receiver_0_5.create());
    var $receiver_0_6 = RDOMBuilder.Companion.invoke_f6ihu2$(option$lambda(null));
    $receiver_0_6.unaryPlus_pdl1vz$('Hexadecimal');
    $receiver_0_4.child_30b5ua$($receiver_0_6.create());
    var $receiver_0_7 = RDOMBuilder.Companion.invoke_f6ihu2$(option$lambda(null));
    $receiver_0_7.unaryPlus_pdl1vz$('Binary');
    $receiver_0_4.child_30b5ua$($receiver_0_7.create());
    set_onInput($receiver_0_4.attrs, inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(props));
    set_height($receiver_0_4.css, new LinearDimension('100%'));
    $receiver_0_3.child_30b5ua$($receiver_0_4.create());
    var $receiver_1 = $receiver_0_3.css;
    set_display($receiver_1, Display.tableCell);
    set_width($receiver_1, new LinearDimension('20%'));
    $receiver_0_2.child_30b5ua$($receiver_0_3.create());
    var $receiver_0_8 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    var $receiver_2 = $receiver_0_8.css;
    set_width($receiver_2, new LinearDimension('75%'));
    set_display($receiver_2, Display.tableCell);
    $receiver_0_2.child_30b5ua$($receiver_0_8.create());
    var $receiver_0_9 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    var $receiver_0_10 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    var type = InputType.button;
    var $receiver_0_11 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledInput$lambda(type, null, null, null));
    set_classes($receiver_0_11.attrs, setOf('btn btn-light'));
    set_id($receiver_0_11.attrs, 'runInput');
    $receiver_0_11.attrs.value = '\u25B6';
    set_onClickFunction($receiver_0_11.attrs, inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(props));
    set_color($receiver_0_11.css, Color.Companion.green);
    $receiver_0_10.child_30b5ua$($receiver_0_11.create());
    var $receiver_3 = $receiver_0_10.css;
    set_height($receiver_3, new LinearDimension('100%'));
    set_textAlign($receiver_3, TextAlign.center);
    set_display($receiver_3, Display.tableCell);
    $receiver_0_9.child_30b5ua$($receiver_0_10.create());
    var $receiver_0_12 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    var type_0 = InputType.button;
    var $receiver_0_13 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledInput$lambda(type_0, null, null, null));
    set_classes($receiver_0_13.attrs, setOf('btn btn-light'));
    $receiver_0_13.attrs.value = '\uD83D\uDC1E';
    set_id($receiver_0_13.attrs, 'debugInput');
    set_onClickFunction($receiver_0_13.attrs, inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(props));
    $receiver_0_12.child_30b5ua$($receiver_0_13.create());
    var $receiver_4 = $receiver_0_12.css;
    set_color($receiver_4, Color.Companion.green);
    set_height($receiver_4, new LinearDimension('100%'));
    set_textAlign($receiver_4, TextAlign.center);
    set_display($receiver_4, Display.tableCell);
    $receiver_0_9.child_30b5ua$($receiver_0_12.create());
    var $receiver_0_14 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    set_classes($receiver_0_14.attrs, setOf('dropdown'));
    var $receiver_0_15 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledButton$lambda(null, null, null));
    set_classes($receiver_0_15.attrs, setOf('btn btn-light dropdown-toggle'));
    $receiver_0_15.attrs.type = ButtonType.button;
    set_id($receiver_0_15.attrs, 'dropdownMenuButton');
    $receiver_0_15.set_hpg2xa$($receiver_0_15.attrs, 'data-toggle', 'dropdown');
    $receiver_0_15.set_hpg2xa$($receiver_0_15.attrs, 'aria-haspopup', 'true');
    $receiver_0_15.set_hpg2xa$($receiver_0_15.attrs, 'aria-expanded', 'false');
    set_onClickFunction($receiver_0_15.attrs, inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
    $receiver_0_15.unaryPlus_pdl1vz$('\u2699');
    set_color($receiver_0_15.css, Color.Companion.grey);
    $receiver_0_14.child_30b5ua$($receiver_0_15.create());
    var $receiver_0_16 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    set_id($receiver_0_16.attrs, 'dropdowndiv');
    set_classes($receiver_0_16.attrs, setOf('dropdown-menu'));
    $receiver_0_16.set_hpg2xa$($receiver_0_16.attrs, 'aria-labelledby', 'dropdownMenuButton');
    $receiver_0_16.set_hpg2xa$($receiver_0_16.attrs, 'will-change', 'transform');
    var $receiver_0_17 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledA$lambda(null, null));
    set_id($receiver_0_17.attrs, 'logOption');
    set_classes($receiver_0_17.attrs, setOf('dropdown-item'));
    $receiver_0_17.attrs.href = '#';
    if (areLogsEnabled())
      $receiver_0_17.unaryPlus_pdl1vz$('Disable logs');
    else
      $receiver_0_17.unaryPlus_pdl1vz$('Enable logs');
    set_onClickFunction($receiver_0_17.attrs, inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    $receiver_0_16.child_30b5ua$($receiver_0_17.create());
    var $receiver_0_18 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledA$lambda(null, null));
    $receiver_0_18.unaryPlus_pdl1vz$('Help');
    set_classes($receiver_0_18.attrs, setOf('dropdown-item'));
    $receiver_0_18.attrs.href = 'help.html';
    $receiver_0_16.child_30b5ua$($receiver_0_18.create());
    var $receiver_0_19 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledA$lambda(null, null));
    set_id($receiver_0_19.attrs, 'colorMode');
    set_classes($receiver_0_19.attrs, setOf('dropdown-item'));
    if (isLightMode())
      $receiver_0_19.unaryPlus_pdl1vz$('Dark mode');
    else
      $receiver_0_19.unaryPlus_pdl1vz$('Light mode');
    set_onClickFunction($receiver_0_19.attrs, inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
    $receiver_0_16.child_30b5ua$($receiver_0_19.create());
    $receiver_0_14.child_30b5ua$($receiver_0_16.create());
    var $receiver_5 = $receiver_0_14.css;
    set_height($receiver_5, new LinearDimension('100%'));
    set_textAlign($receiver_5, TextAlign.center);
    set_display($receiver_5, Display.tableCell);
    $receiver_0_9.child_30b5ua$($receiver_0_14.create());
    set_display($receiver_0_9.css, Display.tableCell);
    $receiver_0_2.child_30b5ua$($receiver_0_9.create());
    $receiver_0_1.child_30b5ua$($receiver_0_2.create());
    var $receiver_6 = $receiver_0_1.css;
    set_width($receiver_6, new LinearDimension('100%'));
    set_borderWidth($receiver_6, new LinearDimension('3px'));
    set_display($receiver_6, Display.table);
    $receiver_0_0.child_30b5ua$($receiver_0_1.create());
    var $receiver_0_20 = RDOMBuilder.Companion.invoke_f6ihu2$(form$lambda(null, null, null, null));
    var $receiver_0_21 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    var $receiver_0_22 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    set_classes($receiver_0_22.attrs, setOf('border border-dark'));
    set_contentEditable($receiver_0_22.attrs, true);
    set_id($receiver_0_22.attrs, 'textEditDiv1');
    set_onPaste($receiver_0_22.attrs, inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    var $receiver_7 = $receiver_0_22.css;
    set_width($receiver_7, new LinearDimension('100%'));
    set_height($receiver_7, new LinearDimension('500px'));
    set_borderWidth($receiver_7, new LinearDimension('3px'));
    set_overflow($receiver_7, Overflow.scroll);
    set_fontFamily($receiver_7, 'Courier New');
    $receiver_0_21.child_30b5ua$($receiver_0_22.create());
    var $receiver_0_23 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    set_id($receiver_0_23.attrs, 'memoryDiv');
    set_classes($receiver_0_23.attrs, setOf('border border-dark'));
    var $receiver_0_24 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    var $receiver_0_25 = RDOMBuilder.Companion.invoke_f6ihu2$(form$lambda(null, null, null, null));
    var $receiver_0_26 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    set_classes($receiver_0_26.attrs, setOf('form-row'));
    var $receiver_0_27 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    set_classes($receiver_0_27.attrs, setOf('col'));
    var type_1 = InputType.button;
    var $receiver_0_28 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledInput$lambda(type_1, null, null, null));
    $receiver_0_28.attrs.value = 'Update';
    set_id($receiver_0_28.attrs, 'updateMemoryInput');
    set_classes($receiver_0_28.attrs, setOf('btn btn-light'));
    set_onClickFunction($receiver_0_28.attrs, inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(props));
    $receiver_0_27.child_30b5ua$($receiver_0_28.create());
    $receiver_0_27.css;
    $receiver_0_26.child_30b5ua$($receiver_0_27.create());
    var $receiver_0_29 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    $receiver_0_29.unaryPlus_pdl1vz$('Selected word: ');
    set_id($receiver_0_29.attrs, 'selectedWordNum');
    set_classes($receiver_0_29.attrs, setOf('col-sm'));
    var $receiver_8 = $receiver_0_29.css;
    set_textAlign($receiver_8, TextAlign.center);
    set_paddingTop($receiver_8, new LinearDimension('7px'));
    $receiver_0_26.child_30b5ua$($receiver_0_29.create());
    var $receiver_0_30 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    set_classes($receiver_0_30.attrs, setOf('col'));
    var $receiver_0_31 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledInput$lambda(null, null, null, null));
    set_classes($receiver_0_31.attrs, setOf('form-control input-lg'));
    $receiver_0_31.attrs.type = InputType.number;
    set_id($receiver_0_31.attrs, 'range');
    $receiver_0_31.attrs.name = 'range';
    $receiver_0_31.attrs.min = '1';
    $receiver_0_31.attrs.max = '32';
    set_defaultValue($receiver_0_31.attrs, '1');
    set_onInput($receiver_0_31.attrs, inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
    $receiver_0_30.child_30b5ua$($receiver_0_31.create());
    $receiver_0_26.child_30b5ua$($receiver_0_30.create());
    $receiver_0_25.child_30b5ua$($receiver_0_26.create());
    $receiver_0_24.child_30b5ua$($receiver_0_25.create());
    $receiver_0_23.child_30b5ua$($receiver_0_24.create());
    var $receiver_0_32 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    set_classes($receiver_0_32.attrs, setOf('border border-dark'));
    set_id($receiver_0_32.attrs, 'memEditDiv');
    var $receiver_0_33 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTable$lambda);
    set_contentEditable($receiver_0_33.attrs, true);
    set_id($receiver_0_33.attrs, 'memTable');
    var $receiver_0_34 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTr$lambda);
    var $receiver_0_35 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTh$lambda(null));
    $receiver_0_35.attrs.scope = ThScope.col;
    $receiver_0_35.unaryPlus_pdl1vz$(' ');
    set_contentEditable($receiver_0_35.attrs, false);
    $receiver_0_34.child_30b5ua$($receiver_0_35.create());
    for (var header = 0; header < 16; header++) {
      var $receiver_0_36 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTh$lambda(null));
      $receiver_0_36.attrs.scope = ThScope.col;
      $receiver_0_36.unaryPlus_pdl1vz$('col');
      set_contentEditable($receiver_0_36.attrs, false);
      $receiver_0_34.child_30b5ua$($receiver_0_36.create());
    }
    $receiver_0_33.child_30b5ua$($receiver_0_34.create());
    for (var i = 0; i < 8; i++) {
      var $receiver_0_37 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTr$lambda);
      var $receiver_0_38 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTh$lambda(null));
      $receiver_0_38.attrs.scope = ThScope.col;
      $receiver_0_38.unaryPlus_pdl1vz$('row');
      set_contentEditable($receiver_0_38.attrs, false);
      $receiver_0_37.child_30b5ua$($receiver_0_38.create());
      for (var j = 0; j < 16; j++) {
        var $receiver_0_39 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda);
        $receiver_0_39.unaryPlus_pdl1vz$('DEAD');
        var rowHexStr = toString_1(i, 16);
        var columnHexStr = toString_1(j, 16);
        set_id($receiver_0_39.attrs, rowHexStr + columnHexStr);
        set_onClickFunction($receiver_0_39.attrs, inputComponent$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
        var $receiver_9 = $receiver_0_39.css;
        set_textAlign($receiver_9, TextAlign.left);
        set_padding($receiver_9, '4px');
        set_fontFamily($receiver_9, 'Courier New');
        $receiver_0_37.child_30b5ua$($receiver_0_39.create());
      }
      $receiver_0_33.child_30b5ua$($receiver_0_37.create());
    }
    var $receiver_10 = $receiver_0_33.css;
    set_width($receiver_10, new LinearDimension('100%'));
    set_fontSize($receiver_10, new LinearDimension('15px'));
    $receiver_0_32.child_30b5ua$($receiver_0_33.create());
    var $receiver_11 = $receiver_0_32.css;
    set_borderWidth($receiver_11, new LinearDimension('3px'));
    set_height($receiver_11, new LinearDimension('100%'));
    set_width($receiver_11, new LinearDimension('100%'));
    $receiver_0_23.child_30b5ua$($receiver_0_32.create());
    var $receiver_12 = $receiver_0_23.css;
    set_borderWidth($receiver_12, new LinearDimension('3px'));
    set_width($receiver_12, new LinearDimension('100%'));
    set_visibility($receiver_12, Visibility.hidden);
    $receiver_0_21.child_30b5ua$($receiver_0_23.create());
    $receiver_0_20.child_30b5ua$($receiver_0_21.create());
    var type_2 = InputType.button;
    var $receiver_0_40 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledInput$lambda(type_2, null, null, null));
    set_id($receiver_0_40.attrs, 'stepSubmit');
    set_classes($receiver_0_40.attrs, setOf('btn btn-light'));
    $receiver_0_40.attrs.value = '\u293C';
    set_onClickFunction($receiver_0_40.attrs, inputComponent$lambda$lambda$lambda$lambda$lambda$lambda(props));
    var $receiver_13 = $receiver_0_40.css;
    set_color($receiver_13, Color.Companion.green);
    set_visibility($receiver_13, Visibility.hidden);
    $receiver_0_20.child_30b5ua$($receiver_0_40.create());
    var type_3 = InputType.button;
    var $receiver_0_41 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledInput$lambda(type_3, null, null, null));
    set_id($receiver_0_41.attrs, 'cycleStepSubmit');
    set_classes($receiver_0_41.attrs, setOf('btn btn-light'));
    $receiver_0_41.attrs.value = '\uD83D\uDD04';
    set_onClickFunction($receiver_0_41.attrs, inputComponent$lambda$lambda$lambda$lambda$lambda$lambda_0(props));
    set_visibility($receiver_0_41.css, Visibility.hidden);
    $receiver_0_20.child_30b5ua$($receiver_0_41.create());
    $receiver_0_0.child_30b5ua$($receiver_0_20.create());
    var $receiver_14 = $receiver_0_0.css;
    set_width($receiver_14, new LinearDimension('60%'));
    set_float($receiver_14, Float.left);
    $receiver_0.child_30b5ua$($receiver_0_0.create());
    var $receiver_0_42 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    set_classes($receiver_0_42.attrs, setOf('mermaid'));
    set_id($receiver_0_42.attrs, 'diagram');
    $receiver_0_42.unaryPlus_pdl1vz$(trimIndent('\n' + "                %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#f8f9fa', 'textColor': '" + diagramLinkColor + "', 'lineColor': '" + diagramLinkColor + "', 'fontSize': '" + '30' + "px', 'fontFamily': 'Monospace'}}}%%" + '\n' + '                          flowchart TB' + '\n' + '    MDR[MDR] ' + '\n' + '    IR[IR]' + '\n' + '    ACC[ACC]' + '\n' + '    ALU[/ALU' + '\\' + ']' + '\n' + '    MAR[MAR]' + '\n' + '    PC[PC]' + '\n' + '    CON[CONTROL UNIT]' + '\n' + '    MEM[MEMORY]' + '\n' + '\n' + '    MEM --- MDR ' + '\n' + '    MEM --- MAR ' + '\n' + '    MDR --- ACC' + '\n' + '    ACC --- ALU' + '\n' + '    MDR --- ALU' + '\n' + '    MDR --- IR' + '\n' + '    MAR --- IR ' + '\n' + '    IR --- CON' + '\n' + '    MAR --- PC ' + '\n' + '    IR --- PC' + '\n' + '    IR --- ALU' + '\n' + '            '));
    var $receiver_15 = $receiver_0_42.css;
    set_width($receiver_15, new LinearDimension('40%'));
    set_float($receiver_15, Float.left);
    set_padding($receiver_15, '130px');
    set_visibility($receiver_15, Visibility.hidden);
    $receiver_0.child_30b5ua$($receiver_0_42.create());
    $receiver.child_30b5ua$($receiver_0.create());
    return Unit;
  }
  var inputComponent;
  function toggleColorMode() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14;
    var body = Kotlin.isType(tmp$ = document.getElementById('main_body'), HTMLBodyElement) ? tmp$ : throwCCE();
    var select = Kotlin.isType(tmp$_0 = document.getElementById('inputTypeSelect'), HTMLSelectElement) ? tmp$_0 : throwCCE();
    var runInput = Kotlin.isType(tmp$_1 = document.getElementById('runInput'), HTMLInputElement) ? tmp$_1 : throwCCE();
    var debugInput = Kotlin.isType(tmp$_2 = document.getElementById('debugInput'), HTMLInputElement) ? tmp$_2 : throwCCE();
    var stepSubmit = Kotlin.isType(tmp$_3 = document.getElementById('stepSubmit'), HTMLInputElement) ? tmp$_3 : throwCCE();
    var cycleStep = Kotlin.isType(tmp$_4 = document.getElementById('cycleStepSubmit'), HTMLInputElement) ? tmp$_4 : throwCCE();
    var range = Kotlin.isType(tmp$_5 = document.getElementById('range'), HTMLInputElement) ? tmp$_5 : throwCCE();
    var settingsBtn = Kotlin.isType(tmp$_6 = document.getElementById('dropdownMenuButton'), HTMLButtonElement) ? tmp$_6 : throwCCE();
    var header = Kotlin.isType(tmp$_7 = document.getElementById('mainHeader'), HTMLHeadingElement) ? tmp$_7 : throwCCE();
    var controlDiv = Kotlin.isType(tmp$_8 = document.getElementById('controlDiv'), HTMLDivElement) ? tmp$_8 : throwCCE();
    var textEditDiv = Kotlin.isType(tmp$_9 = document.getElementById('textEditDiv1'), HTMLDivElement) ? tmp$_9 : throwCCE();
    var memoryDiv = Kotlin.isType(tmp$_10 = document.getElementById('memoryDiv'), HTMLDivElement) ? tmp$_10 : throwCCE();
    var memEditDiv = Kotlin.isType(tmp$_11 = document.getElementById('memEditDiv'), HTMLDivElement) ? tmp$_11 : throwCCE();
    var selectedWordNumDiv = Kotlin.isType(tmp$_12 = document.getElementById('selectedWordNum'), HTMLDivElement) ? tmp$_12 : throwCCE();
    var updateMemoryInput = Kotlin.isType(tmp$_13 = document.getElementById('updateMemoryInput'), HTMLInputElement) ? tmp$_13 : throwCCE();
    var loggerDiv = Kotlin.isType(tmp$_14 = document.getElementById('loggerDiv'), HTMLDivElement) ? tmp$_14 : throwCCE();
    runInput.classList.toggle('btn-light');
    runInput.classList.toggle('btn-dark');
    debugInput.classList.toggle('btn-light');
    debugInput.classList.toggle('btn-dark');
    stepSubmit.classList.toggle('btn-light');
    stepSubmit.classList.toggle('btn-dark');
    cycleStep.classList.toggle('btn-light');
    cycleStep.classList.toggle('btn-dark');
    range.classList.toggle('bg-dark');
    range.classList.toggle('text-light');
    updateMemoryInput.classList.toggle('btn-light');
    updateMemoryInput.classList.toggle('btn-dark');
    settingsBtn.classList.toggle('btn-light');
    settingsBtn.classList.toggle('btn-dark');
    select.classList.toggle('bg-dark');
    body.classList.toggle('bg-dark');
    select.classList.toggle('text-light');
    header.classList.toggle('text-light');
    controlDiv.classList.toggle('border-dark');
    controlDiv.classList.toggle('border-light');
    textEditDiv.classList.toggle('border-dark');
    textEditDiv.classList.toggle('border-light');
    textEditDiv.classList.toggle('text-light');
    selectedWordNumDiv.classList.toggle('text-light');
    memoryDiv.classList.toggle('border-dark');
    memoryDiv.classList.toggle('border-light');
    memEditDiv.classList.toggle('border-dark');
    memEditDiv.classList.toggle('border-light');
    loggerDiv.classList.toggle('text-light');
    if (equals(diagramLinkColor, '#f8f9fa')) {
      diagramLinkColor = '#343a40';
    } else {
      diagramLinkColor = '#f8f9fa';
    }
    changeAllLinesToBlackInEditor();
    changeMemoryWindowPage(1);
  }
  function getTextInEditor() {
    var tmp$;
    var div = Kotlin.isType(tmp$ = document.getElementById('textEditDiv1'), HTMLDivElement) ? tmp$ : throwCCE();
    return div.innerText;
  }
  function changeColorOfALineInEditor(lineNumber, color) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var div = Kotlin.isType(tmp$ = document.getElementById('textEditDiv1'), HTMLDivElement) ? tmp$ : throwCCE();
    if (lineNumber === 1) {
      if (!equals(slice(div.innerHTML, new IntRange(0, 3)), '<div')) {
        div.style.color = color;
        tmp$_0 = div.childElementCount;
        for (var index = 0; index < tmp$_0; index++) {
          (Kotlin.isType(tmp$_1 = div.children[index], HTMLDivElement) ? tmp$_1 : throwCCE()).style.color = isLightMode() ? 'black' : 'white';
        }
      } else {
        var toChange = Kotlin.isType(tmp$_2 = div.childNodes[0], HTMLDivElement) ? tmp$_2 : throwCCE();
        toChange.style.color = color;
      }
    } else {
      var toChange_0 = Kotlin.isType(tmp$_3 = div.childNodes[lineNumber - 1 | 0], HTMLDivElement) ? tmp$_3 : throwCCE();
      toChange_0.style.color = color;
    }
  }
  function changeAllLinesToBlackInEditor() {
    var tmp$, tmp$_0, tmp$_1;
    var div = Kotlin.isType(tmp$ = document.getElementById('textEditDiv1'), HTMLDivElement) ? tmp$ : throwCCE();
    var colorStr = isLightMode() ? 'black' : 'white';
    div.style.color = colorStr;
    tmp$_0 = div.childElementCount;
    for (var index = 0; index < tmp$_0; index++) {
      (Kotlin.isType(tmp$_1 = div.children[index], HTMLDivElement) ? tmp$_1 : throwCCE()).style.color = colorStr;
    }
  }
  function changeMemoryWindowPage(page) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var hasPageChanged = true;
    if (currentMemoryPage === page) {
      hasPageChanged = false;
    } else {
      currentMemoryPage = page;
    }
    var page0indexed = page - 1 | 0;
    var table = Kotlin.isType(tmp$ = document.getElementById('memTable'), HTMLTableElement) ? tmp$ : throwCCE();
    var headerRow = Kotlin.isType(tmp$_0 = table.children[0], HTMLTableRowElement) ? tmp$_0 : throwCCE();
    tmp$_1 = headerRow.childElementCount;
    for (var headerRowChildIndex = 0; headerRowChildIndex < tmp$_1; headerRowChildIndex++) {
      if (headerRowChildIndex !== 0) {
        var headerTd = Kotlin.isType(tmp$_2 = headerRow.children[headerRowChildIndex], HTMLTableCellElement) ? tmp$_2 : throwCCE();
        headerTd.textContent = proceedWithZeros(4, toString_1(headerRowChildIndex - 1 | 0, 16).toUpperCase());
        headerTd.style.color = isLightMode() ? 'black' : 'white';
      }}
    tmp$_3 = table.childElementCount;
    for (var i = 1; i < tmp$_3; i++) {
      var row = Kotlin.isType(tmp$_4 = table.children[i], HTMLTableRowElement) ? tmp$_4 : throwCCE();
      tmp$_5 = row.childElementCount;
      for (var j = 0; j < tmp$_5; j++) {
        var element = Kotlin.isType(tmp$_6 = row.children[j], HTMLTableCellElement) ? tmp$_6 : throwCCE();
        if (j === 0) {
          element.textContent = proceedWithZeros(4, toString_1(((i - 1 | 0) * 16 | 0) + (page0indexed * 128 | 0) | 0, 16).toUpperCase());
          element.style.color = isLightMode() ? 'black' : 'white';
          continue;
        }if (page0indexed % 2 === 0) {
          element.id = proceedWithZeros(4, toString_1(page0indexed / 2 | 0, 16) + toString_1(i - 1 | 0, 16) + toString_1(j - 1 | 0, 16));
        } else {
          element.id = proceedWithZeros(4, toString_1((page0indexed - 1 | 0) / 2 | 0, 16) + toString_1(i + 7 | 0, 16) + toString_1(j - 1 | 0, 16));
        }
        var newCellValue = proceedWithZeros(4, toString_0(memoryContents.get_za3lpa$(toInt_0(element.id, 16)), 16).toUpperCase());
        if (!hasPageChanged) {
          if (!equals(element.textContent, newCellValue)) {
            element.style.color = 'red';
          } else {
            element.style.color = isLightMode() ? 'black' : 'white';
          }
        } else {
          element.style.color = isLightMode() ? 'black' : 'white';
        }
        element.textContent = newCellValue;
      }
    }
  }
  function setupMemoryContents(memoryInput) {
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = memoryInput.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      memoryContents.set_1pe3u2$((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item);
    }
  }
  function updateMemoryWord(index, value) {
    memoryContents.set_1pe3u2$(index, value);
  }
  function changePageInput(page) {
    var tmp$;
    (Kotlin.isType(tmp$ = document.getElementById('range'), HTMLInputElement) ? tmp$ : throwCCE()).value = page.toString();
  }
  function getPageNumberForAddress(address) {
    return (address / 128 | 0) + 1 | 0;
  }
  function removeUpdateColoring() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var table = Kotlin.isType(tmp$ = document.getElementById('memTable'), HTMLTableElement) ? tmp$ : throwCCE();
    tmp$_0 = table.childElementCount;
    for (var i = 1; i < tmp$_0; i++) {
      var row = Kotlin.isType(tmp$_1 = table.children[i], HTMLTableRowElement) ? tmp$_1 : throwCCE();
      tmp$_2 = row.childElementCount;
      for (var j = 1; j < tmp$_2; j++) {
        var element = Kotlin.isType(tmp$_3 = row.children[j], HTMLTableCellElement) ? tmp$_3 : throwCCE();
        element.style.color = isLightMode() ? 'black' : 'white';
      }
    }
  }
  function MemUpdate(storeAddress, storeValue) {
    this.storeAddress = storeAddress;
    this.storeValue = storeValue;
  }
  MemUpdate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemUpdate',
    interfaces: []
  };
  MemUpdate.prototype.component1 = function () {
    return this.storeAddress;
  };
  MemUpdate.prototype.component2 = function () {
    return this.storeValue;
  };
  MemUpdate.prototype.copy_h1a8hm$ = function (storeAddress, storeValue) {
    return new MemUpdate(storeAddress === void 0 ? this.storeAddress : storeAddress, storeValue === void 0 ? this.storeValue : storeValue);
  };
  MemUpdate.prototype.toString = function () {
    return 'MemUpdate(storeAddress=' + Kotlin.toString(this.storeAddress) + (', storeValue=' + Kotlin.toString(this.storeValue)) + ')';
  };
  MemUpdate.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.storeAddress) | 0;
    result = result * 31 + Kotlin.hashCode(this.storeValue) | 0;
    return result;
  };
  MemUpdate.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.storeAddress, other.storeAddress) && Kotlin.equals(this.storeValue, other.storeValue)))));
  };
  function getFrontMemoryContents() {
    return memoryContents;
  }
  function changeMemWindowVisibility(visibility) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var memDiv = Kotlin.isType(tmp$ = document.getElementById('memoryDiv'), HTMLDivElement) ? tmp$ : throwCCE();
    var stepBtn = Kotlin.isType(tmp$_0 = document.getElementById('stepSubmit'), HTMLInputElement) ? tmp$_0 : throwCCE();
    var cycleStepBtn = Kotlin.isType(tmp$_1 = document.getElementById('cycleStepSubmit'), HTMLInputElement) ? tmp$_1 : throwCCE();
    var diagramDiv = Kotlin.isType(tmp$_2 = document.getElementById('diagram'), HTMLDivElement) ? tmp$_2 : throwCCE();
    if (visibility) {
      memDiv.style.visibility = 'visible';
      stepBtn.style.visibility = 'visible';
      cycleStepBtn.style.visibility = 'visible';
      diagramDiv.style.visibility = 'visible';
    } else {
      memDiv.style.visibility = 'hidden';
      stepBtn.style.visibility = 'hidden';
      cycleStepBtn.style.visibility = 'hidden';
      diagramDiv.style.visibility = 'hidden';
    }
  }
  function resetMemory$lambda(it) {
    return new UShort(-8531);
  }
  function resetMemory() {
    memoryContents = new UShortArray_init(Kotlin.fillArray(new Int16Array(4096), UShortArray$lambda(resetMemory$lambda)));
  }
  function scrollToLine(lineNum) {
    var tmp$, tmp$_0, tmp$_1;
    var div = Kotlin.isType(tmp$ = document.getElementById('textEditDiv1'), HTMLDivElement) ? tmp$ : throwCCE();
    if (lineNum === 1) {
      if (!equals(slice(div.innerHTML, new IntRange(0, 3)), '<div')) {
        div.scrollIntoView();
      } else {
        var toChange = Kotlin.isType(tmp$_0 = div.childNodes[0], HTMLDivElement) ? tmp$_0 : throwCCE();
        toChange.scrollIntoView();
      }
    } else {
      var toChange_0 = Kotlin.isType(tmp$_1 = div.childNodes[lineNum - 1 | 0], HTMLDivElement) ? tmp$_1 : throwCCE();
      toChange_0.scrollIntoView();
    }
  }
  function showMemoryCellAsChanged(address) {
    var tmp$;
    var td = Kotlin.isType(tmp$ = document.getElementById(proceedWithZeros(4, toString_1(address, 16))), HTMLTableCellElement) ? tmp$ : throwCCE();
    td.style.color = 'red';
  }
  function InputT(name, ordinal, key) {
    Enum.call(this);
    this.key = key;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function InputT_initFields() {
    InputT_initFields = function () {
    };
    InputT$HEX_instance = new InputT('HEX', 0, 'HEX');
    InputT$ASM_instance = new InputT('ASM', 1, 'ASM');
    InputT$BIN_instance = new InputT('BIN', 2, 'BIN');
    InputT$Companion_getInstance();
  }
  var InputT$HEX_instance;
  function InputT$HEX_getInstance() {
    InputT_initFields();
    return InputT$HEX_instance;
  }
  var InputT$ASM_instance;
  function InputT$ASM_getInstance() {
    InputT_initFields();
    return InputT$ASM_instance;
  }
  var InputT$BIN_instance;
  function InputT$BIN_getInstance() {
    InputT_initFields();
    return InputT$BIN_instance;
  }
  function InputT$Companion() {
    InputT$Companion_instance = this;
  }
  InputT$Companion.prototype.findByKey_g99ac8$ = function (key, default_0) {
    if (default_0 === void 0)
      default_0 = InputT$HEX_getInstance();
    var tmp$;
    var $receiver = InputT$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var element = $receiver[tmp$_0];
        if (equals(element.key, key)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    return (tmp$ = firstOrNull$result) != null ? tmp$ : default_0;
  };
  InputT$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var InputT$Companion_instance = null;
  function InputT$Companion_getInstance() {
    InputT_initFields();
    if (InputT$Companion_instance === null) {
      new InputT$Companion();
    }return InputT$Companion_instance;
  }
  InputT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputT',
    interfaces: [Enum]
  };
  function InputT$values() {
    return [InputT$HEX_getInstance(), InputT$ASM_getInstance(), InputT$BIN_getInstance()];
  }
  InputT.values = InputT$values;
  function InputT$valueOf(name) {
    switch (name) {
      case 'HEX':
        return InputT$HEX_getInstance();
      case 'ASM':
        return InputT$ASM_getInstance();
      case 'BIN':
        return InputT$BIN_getInstance();
      default:throwISE('No enum constant InputT.' + name);
    }
  }
  InputT.valueOf_61zpoe$ = InputT$valueOf;
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledDiv$lambda_0(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function logger$lambda($receiver, props) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_0);
    set_id($receiver_0.attrs, 'loggerDiv');
    set_classes($receiver_0.attrs, setOf('border border-dark'));
    var tmp$;
    tmp$ = props.logs.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!equals(element, '')) {
        var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(p$lambda(null));
        $receiver_0_0.unaryPlus_pdl1vz$(element);
        $receiver_0.child_30b5ua$($receiver_0_0.create());
      }}
    var $receiver_1 = $receiver_0.css;
    set_position($receiver_1, Position.fixed);
    set_bottom($receiver_1, new LinearDimension('0'));
    set_width($receiver_1, new LinearDimension('100%'));
    set_height($receiver_1, new LinearDimension('300px'));
    set_overflowY($receiver_1, Overflow.scroll);
    $receiver.child_30b5ua$($receiver_0.create());
    return Unit;
  }
  var logger;
  function main$lambda($receiver) {
    $receiver.child_1mw94g$(app);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function ACC_STATE(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ACC_STATE_initFields() {
    ACC_STATE_initFields = function () {
    };
    ACC_STATE$STORE_instance = new ACC_STATE('STORE', 0);
    ACC_STATE$LOAD_instance = new ACC_STATE('LOAD', 1);
    ACC_STATE$ALU_OP_instance = new ACC_STATE('ALU_OP', 2);
    ACC_STATE$JUMP_instance = new ACC_STATE('JUMP', 3);
  }
  var ACC_STATE$STORE_instance;
  function ACC_STATE$STORE_getInstance() {
    ACC_STATE_initFields();
    return ACC_STATE$STORE_instance;
  }
  var ACC_STATE$LOAD_instance;
  function ACC_STATE$LOAD_getInstance() {
    ACC_STATE_initFields();
    return ACC_STATE$LOAD_instance;
  }
  var ACC_STATE$ALU_OP_instance;
  function ACC_STATE$ALU_OP_getInstance() {
    ACC_STATE_initFields();
    return ACC_STATE$ALU_OP_instance;
  }
  var ACC_STATE$JUMP_instance;
  function ACC_STATE$JUMP_getInstance() {
    ACC_STATE_initFields();
    return ACC_STATE$JUMP_instance;
  }
  ACC_STATE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ACC_STATE',
    interfaces: [Enum]
  };
  function ACC_STATE$values() {
    return [ACC_STATE$STORE_getInstance(), ACC_STATE$LOAD_getInstance(), ACC_STATE$ALU_OP_getInstance(), ACC_STATE$JUMP_getInstance()];
  }
  ACC_STATE.values = ACC_STATE$values;
  function ACC_STATE$valueOf(name) {
    switch (name) {
      case 'STORE':
        return ACC_STATE$STORE_getInstance();
      case 'LOAD':
        return ACC_STATE$LOAD_getInstance();
      case 'ALU_OP':
        return ACC_STATE$ALU_OP_getInstance();
      case 'JUMP':
        return ACC_STATE$JUMP_getInstance();
      default:throwISE('No enum constant Sim.ACC_STATE.' + name);
    }
  }
  ACC_STATE.valueOf_61zpoe$ = ACC_STATE$valueOf;
  function ACC() {
    ACC_instance = this;
    HardwareBlock.call(this);
    this.data = new UShort(0);
    this.MDR_CONNECTION_0 = 0;
    this.ALU_CONNECTION_0 = 1;
    this.currentState = ACC_STATE$STORE_getInstance();
  }
  ACC.prototype.posEdge = function () {
    switch (this.currentState.name) {
      case 'STORE':
        this.write_1pe3u2$(this.MDR_CONNECTION_0, this.data);
        return -1;
      case 'LOAD':
        this.data = this.read();
        return this.data.data & 65535;
      case 'JUMP':
        this.data = this.read();
        this.write_1pe3u2$(this.MDR_CONNECTION_0, this.data);
        return this.data.data & 65535;
      case 'ALU_OP':
        this.write_1pe3u2$(this.ALU_CONNECTION_0, this.data);
        return -1;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  };
  ACC.prototype.negEdge = function () {
    return -1;
  };
  ACC.prototype.reset = function () {
    this.data = new UShort(0);
    this.currentState = ACC_STATE$STORE_getInstance();
    this.resetHardwareBlock();
  };
  ACC.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ACC',
    interfaces: [HardwareBlock]
  };
  var ACC_instance = null;
  function ACC_getInstance() {
    if (ACC_instance === null) {
      new ACC();
    }return ACC_instance;
  }
  function ALU_OP(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ALU_OP_initFields() {
    ALU_OP_initFields = function () {
    };
    ALU_OP$ADD_instance = new ALU_OP('ADD', 0);
    ALU_OP$SUBSTRACT_instance = new ALU_OP('SUBSTRACT', 1);
    ALU_OP$MULTIPLY_instance = new ALU_OP('MULTIPLY', 2);
    ALU_OP$DIVIDE_instance = new ALU_OP('DIVIDE', 3);
    ALU_OP$AND_instance = new ALU_OP('AND', 4);
    ALU_OP$OR_instance = new ALU_OP('OR', 5);
    ALU_OP$JMP_instance = new ALU_OP('JMP', 6);
    ALU_OP$JGE_instance = new ALU_OP('JGE', 7);
    ALU_OP$JNE_instance = new ALU_OP('JNE', 8);
    ALU_OP$LDI_instance = new ALU_OP('LDI', 9);
    ALU_OP$NONE_instance = new ALU_OP('NONE', 10);
  }
  var ALU_OP$ADD_instance;
  function ALU_OP$ADD_getInstance() {
    ALU_OP_initFields();
    return ALU_OP$ADD_instance;
  }
  var ALU_OP$SUBSTRACT_instance;
  function ALU_OP$SUBSTRACT_getInstance() {
    ALU_OP_initFields();
    return ALU_OP$SUBSTRACT_instance;
  }
  var ALU_OP$MULTIPLY_instance;
  function ALU_OP$MULTIPLY_getInstance() {
    ALU_OP_initFields();
    return ALU_OP$MULTIPLY_instance;
  }
  var ALU_OP$DIVIDE_instance;
  function ALU_OP$DIVIDE_getInstance() {
    ALU_OP_initFields();
    return ALU_OP$DIVIDE_instance;
  }
  var ALU_OP$AND_instance;
  function ALU_OP$AND_getInstance() {
    ALU_OP_initFields();
    return ALU_OP$AND_instance;
  }
  var ALU_OP$OR_instance;
  function ALU_OP$OR_getInstance() {
    ALU_OP_initFields();
    return ALU_OP$OR_instance;
  }
  var ALU_OP$JMP_instance;
  function ALU_OP$JMP_getInstance() {
    ALU_OP_initFields();
    return ALU_OP$JMP_instance;
  }
  var ALU_OP$JGE_instance;
  function ALU_OP$JGE_getInstance() {
    ALU_OP_initFields();
    return ALU_OP$JGE_instance;
  }
  var ALU_OP$JNE_instance;
  function ALU_OP$JNE_getInstance() {
    ALU_OP_initFields();
    return ALU_OP$JNE_instance;
  }
  var ALU_OP$LDI_instance;
  function ALU_OP$LDI_getInstance() {
    ALU_OP_initFields();
    return ALU_OP$LDI_instance;
  }
  var ALU_OP$NONE_instance;
  function ALU_OP$NONE_getInstance() {
    ALU_OP_initFields();
    return ALU_OP$NONE_instance;
  }
  ALU_OP.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ALU_OP',
    interfaces: [Enum]
  };
  function ALU_OP$values() {
    return [ALU_OP$ADD_getInstance(), ALU_OP$SUBSTRACT_getInstance(), ALU_OP$MULTIPLY_getInstance(), ALU_OP$DIVIDE_getInstance(), ALU_OP$AND_getInstance(), ALU_OP$OR_getInstance(), ALU_OP$JMP_getInstance(), ALU_OP$JGE_getInstance(), ALU_OP$JNE_getInstance(), ALU_OP$LDI_getInstance(), ALU_OP$NONE_getInstance()];
  }
  ALU_OP.values = ALU_OP$values;
  function ALU_OP$valueOf(name) {
    switch (name) {
      case 'ADD':
        return ALU_OP$ADD_getInstance();
      case 'SUBSTRACT':
        return ALU_OP$SUBSTRACT_getInstance();
      case 'MULTIPLY':
        return ALU_OP$MULTIPLY_getInstance();
      case 'DIVIDE':
        return ALU_OP$DIVIDE_getInstance();
      case 'AND':
        return ALU_OP$AND_getInstance();
      case 'OR':
        return ALU_OP$OR_getInstance();
      case 'JMP':
        return ALU_OP$JMP_getInstance();
      case 'JGE':
        return ALU_OP$JGE_getInstance();
      case 'JNE':
        return ALU_OP$JNE_getInstance();
      case 'LDI':
        return ALU_OP$LDI_getInstance();
      case 'NONE':
        return ALU_OP$NONE_getInstance();
      default:throwISE('No enum constant Sim.ALU_OP.' + name);
    }
  }
  ALU_OP.valueOf_61zpoe$ = ALU_OP$valueOf;
  function ALU() {
    ALU_instance = this;
    HardwareBlock.call(this);
    this.accData = null;
    this.currentOp = ALU_OP$NONE_getInstance();
    this.ACC_CONNECTION_0 = 0;
  }
  ALU.prototype.posEdge = function () {
    var tmp$;
    if (this.haveData()) {
      if (this.accData == null) {
        if (this.currentOp === ALU_OP$LDI_getInstance()) {
          var readVal = this.read();
          this.write_1pe3u2$(this.ACC_CONNECTION_0, readVal);
          return readVal.data & 65535;
        } else if (this.currentOp === ALU_OP$JNE_getInstance() || this.currentOp === ALU_OP$JGE_getInstance() || this.currentOp === ALU_OP$JMP_getInstance()) {
          this.accData = this.read();
          switch (this.currentOp.name) {
            case 'JMP':
              this.write_1pe3u2$(this.ACC_CONNECTION_0, new UShort(1));
              break;
            case 'JGE':
              var $this = ensureNotNull(this.accData);
              var other = new UInt_init(0);
              if (uintCompare((new UInt_init($this.data & 65535)).data, other.data) >= 0) {
                this.write_1pe3u2$(this.ACC_CONNECTION_0, new UShort(1));
              } else {
                this.write_1pe3u2$(this.ACC_CONNECTION_0, new UShort(0));
              }

              break;
            case 'JNE':
              if (!((tmp$ = ensureNotNull(this.accData)) != null ? tmp$.equals(new UShort(toShort((new UInt_init(0)).data))) : null)) {
                this.write_1pe3u2$(this.ACC_CONNECTION_0, new UShort(1));
              } else {
                this.write_1pe3u2$(this.ACC_CONNECTION_0, new UShort(0));
              }

              break;
          }
          var readVal_0 = ensureNotNull(this.accData).data & 65535;
          this.accData = null;
          return readVal_0;
        } else {
          this.accData = this.read();
          return ensureNotNull(this.accData).data & 65535;
        }
      } else {
        var memoryWord = this.read();
        switch (this.currentOp.name) {
          case 'ADD':
            this.write_1pe3u2$(this.ACC_CONNECTION_0, new UShort(toShort((new UInt_init((new UInt_init(ensureNotNull(this.accData).data & 65535)).data + (new UInt_init(memoryWord.data & 65535)).data | 0)).data)));
            break;
          case 'SUBSTRACT':
            this.write_1pe3u2$(this.ACC_CONNECTION_0, new UShort(toShort((new UInt_init((new UInt_init(ensureNotNull(this.accData).data & 65535)).data - (new UInt_init(memoryWord.data & 65535)).data | 0)).data)));
            break;
          case 'MULTIPLY':
            var tmp$_0 = this.ACC_CONNECTION_0;
            var $this_0 = ensureNotNull(this.accData);
            this.write_1pe3u2$(tmp$_0, new UShort(toShort((new UInt_init(Kotlin.imul((new UInt_init($this_0.data & 65535)).data, (new UInt_init(memoryWord.data & 65535)).data))).data)));
            break;
          case 'DIVIDE':
            this.write_1pe3u2$(this.ACC_CONNECTION_0, new UShort(toShort(uintDivide(new UInt_init(ensureNotNull(this.accData).data & 65535), new UInt_init(memoryWord.data & 65535)).data)));
            break;
          case 'AND':
            this.write_1pe3u2$(this.ACC_CONNECTION_0, new UShort(toShort(ensureNotNull(this.accData).data & 65535 & (memoryWord.data & 65535))));
            break;
          case 'OR':
            this.write_1pe3u2$(this.ACC_CONNECTION_0, new UShort(toShort(ensureNotNull(this.accData).data & 65535 | memoryWord.data & 65535)));
            break;
          default:break;
        }
        this.accData = null;
        return memoryWord.data & 65535;
      }
    }return -1;
  };
  ALU.prototype.negEdge = function () {
    return -1;
  };
  ALU.prototype.reset = function () {
    this.accData = null;
    this.currentOp = ALU_OP$NONE_getInstance();
    this.resetHardwareBlock();
  };
  ALU.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ALU',
    interfaces: [HardwareBlock]
  };
  var ALU_instance = null;
  function ALU_getInstance() {
    if (ALU_instance === null) {
      new ALU();
    }return ALU_instance;
  }
  function ACTION_BLOCK(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ACTION_BLOCK_initFields() {
    ACTION_BLOCK_initFields = function () {
    };
    ACTION_BLOCK$ACC_instance = new ACTION_BLOCK('ACC', 0);
    ACTION_BLOCK$ALU_instance = new ACTION_BLOCK('ALU', 1);
    ACTION_BLOCK$CON_instance = new ACTION_BLOCK('CON', 2);
    ACTION_BLOCK$IR_instance = new ACTION_BLOCK('IR', 3);
    ACTION_BLOCK$MAR_instance = new ACTION_BLOCK('MAR', 4);
    ACTION_BLOCK$MDR_instance = new ACTION_BLOCK('MDR', 5);
    ACTION_BLOCK$MEM_instance = new ACTION_BLOCK('MEM', 6);
    ACTION_BLOCK$PC_instance = new ACTION_BLOCK('PC', 7);
    ACTION_BLOCK$MEMMDR_instance = new ACTION_BLOCK('MEMMDR', 8);
    ACTION_BLOCK$MARMEM_instance = new ACTION_BLOCK('MARMEM', 9);
    ACTION_BLOCK$MDRACC_instance = new ACTION_BLOCK('MDRACC', 10);
    ACTION_BLOCK$ACCALU_instance = new ACTION_BLOCK('ACCALU', 11);
    ACTION_BLOCK$ALUACC_instance = new ACTION_BLOCK('ALUACC', 12);
    ACTION_BLOCK$MDRALU_instance = new ACTION_BLOCK('MDRALU', 13);
    ACTION_BLOCK$MDRIR_instance = new ACTION_BLOCK('MDRIR', 14);
    ACTION_BLOCK$IRMAR_instance = new ACTION_BLOCK('IRMAR', 15);
    ACTION_BLOCK$IRCON_instance = new ACTION_BLOCK('IRCON', 16);
    ACTION_BLOCK$PCMAR_instance = new ACTION_BLOCK('PCMAR', 17);
    ACTION_BLOCK$IRPC_instance = new ACTION_BLOCK('IRPC', 18);
    ACTION_BLOCK$IRALU_instance = new ACTION_BLOCK('IRALU', 19);
  }
  var ACTION_BLOCK$ACC_instance;
  function ACTION_BLOCK$ACC_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$ACC_instance;
  }
  var ACTION_BLOCK$ALU_instance;
  function ACTION_BLOCK$ALU_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$ALU_instance;
  }
  var ACTION_BLOCK$CON_instance;
  function ACTION_BLOCK$CON_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$CON_instance;
  }
  var ACTION_BLOCK$IR_instance;
  function ACTION_BLOCK$IR_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$IR_instance;
  }
  var ACTION_BLOCK$MAR_instance;
  function ACTION_BLOCK$MAR_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$MAR_instance;
  }
  var ACTION_BLOCK$MDR_instance;
  function ACTION_BLOCK$MDR_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$MDR_instance;
  }
  var ACTION_BLOCK$MEM_instance;
  function ACTION_BLOCK$MEM_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$MEM_instance;
  }
  var ACTION_BLOCK$PC_instance;
  function ACTION_BLOCK$PC_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$PC_instance;
  }
  var ACTION_BLOCK$MEMMDR_instance;
  function ACTION_BLOCK$MEMMDR_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$MEMMDR_instance;
  }
  var ACTION_BLOCK$MARMEM_instance;
  function ACTION_BLOCK$MARMEM_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$MARMEM_instance;
  }
  var ACTION_BLOCK$MDRACC_instance;
  function ACTION_BLOCK$MDRACC_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$MDRACC_instance;
  }
  var ACTION_BLOCK$ACCALU_instance;
  function ACTION_BLOCK$ACCALU_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$ACCALU_instance;
  }
  var ACTION_BLOCK$ALUACC_instance;
  function ACTION_BLOCK$ALUACC_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$ALUACC_instance;
  }
  var ACTION_BLOCK$MDRALU_instance;
  function ACTION_BLOCK$MDRALU_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$MDRALU_instance;
  }
  var ACTION_BLOCK$MDRIR_instance;
  function ACTION_BLOCK$MDRIR_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$MDRIR_instance;
  }
  var ACTION_BLOCK$IRMAR_instance;
  function ACTION_BLOCK$IRMAR_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$IRMAR_instance;
  }
  var ACTION_BLOCK$IRCON_instance;
  function ACTION_BLOCK$IRCON_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$IRCON_instance;
  }
  var ACTION_BLOCK$PCMAR_instance;
  function ACTION_BLOCK$PCMAR_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$PCMAR_instance;
  }
  var ACTION_BLOCK$IRPC_instance;
  function ACTION_BLOCK$IRPC_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$IRPC_instance;
  }
  var ACTION_BLOCK$IRALU_instance;
  function ACTION_BLOCK$IRALU_getInstance() {
    ACTION_BLOCK_initFields();
    return ACTION_BLOCK$IRALU_instance;
  }
  ACTION_BLOCK.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ACTION_BLOCK',
    interfaces: [Enum]
  };
  function ACTION_BLOCK$values() {
    return [ACTION_BLOCK$ACC_getInstance(), ACTION_BLOCK$ALU_getInstance(), ACTION_BLOCK$CON_getInstance(), ACTION_BLOCK$IR_getInstance(), ACTION_BLOCK$MAR_getInstance(), ACTION_BLOCK$MDR_getInstance(), ACTION_BLOCK$MEM_getInstance(), ACTION_BLOCK$PC_getInstance(), ACTION_BLOCK$MEMMDR_getInstance(), ACTION_BLOCK$MARMEM_getInstance(), ACTION_BLOCK$MDRACC_getInstance(), ACTION_BLOCK$ACCALU_getInstance(), ACTION_BLOCK$ALUACC_getInstance(), ACTION_BLOCK$MDRALU_getInstance(), ACTION_BLOCK$MDRIR_getInstance(), ACTION_BLOCK$IRMAR_getInstance(), ACTION_BLOCK$IRCON_getInstance(), ACTION_BLOCK$PCMAR_getInstance(), ACTION_BLOCK$IRPC_getInstance(), ACTION_BLOCK$IRALU_getInstance()];
  }
  ACTION_BLOCK.values = ACTION_BLOCK$values;
  function ACTION_BLOCK$valueOf(name) {
    switch (name) {
      case 'ACC':
        return ACTION_BLOCK$ACC_getInstance();
      case 'ALU':
        return ACTION_BLOCK$ALU_getInstance();
      case 'CON':
        return ACTION_BLOCK$CON_getInstance();
      case 'IR':
        return ACTION_BLOCK$IR_getInstance();
      case 'MAR':
        return ACTION_BLOCK$MAR_getInstance();
      case 'MDR':
        return ACTION_BLOCK$MDR_getInstance();
      case 'MEM':
        return ACTION_BLOCK$MEM_getInstance();
      case 'PC':
        return ACTION_BLOCK$PC_getInstance();
      case 'MEMMDR':
        return ACTION_BLOCK$MEMMDR_getInstance();
      case 'MARMEM':
        return ACTION_BLOCK$MARMEM_getInstance();
      case 'MDRACC':
        return ACTION_BLOCK$MDRACC_getInstance();
      case 'ACCALU':
        return ACTION_BLOCK$ACCALU_getInstance();
      case 'ALUACC':
        return ACTION_BLOCK$ALUACC_getInstance();
      case 'MDRALU':
        return ACTION_BLOCK$MDRALU_getInstance();
      case 'MDRIR':
        return ACTION_BLOCK$MDRIR_getInstance();
      case 'IRMAR':
        return ACTION_BLOCK$IRMAR_getInstance();
      case 'IRCON':
        return ACTION_BLOCK$IRCON_getInstance();
      case 'PCMAR':
        return ACTION_BLOCK$PCMAR_getInstance();
      case 'IRPC':
        return ACTION_BLOCK$IRPC_getInstance();
      case 'IRALU':
        return ACTION_BLOCK$IRALU_getInstance();
      default:throwISE('No enum constant Sim.ACTION_BLOCK.' + name);
    }
  }
  ACTION_BLOCK.valueOf_61zpoe$ = ACTION_BLOCK$valueOf;
  function Control(mem) {
    Memory_getInstance().arr = mem;
  }
  Control.prototype.setupComponents = function () {
    this.resetComponents_0();
    this.registerConnection_9rq6k0$(PC_getInstance(), MAR_getInstance());
    this.registerConnection_9rq6k0$(MDR_getInstance(), IR_getInstance());
    this.registerConnection_9rq6k0$(IR_getInstance(), MAR_getInstance());
    this.registerConnection_9rq6k0$(ACC_getInstance(), MDR_getInstance());
    this.registerConnection_9rq6k0$(MDR_getInstance(), ALU_getInstance());
    this.registerConnection_9rq6k0$(ACC_getInstance(), ALU_getInstance());
    this.registerConnection_9rq6k0$(MDR_getInstance(), ACC_getInstance());
    this.registerConnection_9rq6k0$(ALU_getInstance(), ACC_getInstance());
    this.registerConnection_9rq6k0$(IR_getInstance(), PC_getInstance());
    this.registerConnection_9rq6k0$(IR_getInstance(), ALU_getInstance());
  };
  function Control$ProcessorStateChange(visitedComponents, componentToReadValue) {
    this.visitedComponents = visitedComponents;
    this.componentToReadValue = componentToReadValue;
  }
  Control$ProcessorStateChange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProcessorStateChange',
    interfaces: []
  };
  Control$ProcessorStateChange.prototype.component1 = function () {
    return this.visitedComponents;
  };
  Control$ProcessorStateChange.prototype.component2 = function () {
    return this.componentToReadValue;
  };
  Control$ProcessorStateChange.prototype.copy_yeat3t$ = function (visitedComponents, componentToReadValue) {
    return new Control$ProcessorStateChange(visitedComponents === void 0 ? this.visitedComponents : visitedComponents, componentToReadValue === void 0 ? this.componentToReadValue : componentToReadValue);
  };
  Control$ProcessorStateChange.prototype.toString = function () {
    return 'ProcessorStateChange(visitedComponents=' + Kotlin.toString(this.visitedComponents) + (', componentToReadValue=' + Kotlin.toString(this.componentToReadValue)) + ')';
  };
  Control$ProcessorStateChange.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.visitedComponents) | 0;
    result = result * 31 + Kotlin.hashCode(this.componentToReadValue) | 0;
    return result;
  };
  Control$ProcessorStateChange.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.visitedComponents, other.visitedComponents) && Kotlin.equals(this.componentToReadValue, other.componentToReadValue)))));
  };
  Control.prototype.fetchCycle = function () {
    var visitiedComponents = ArrayList_init();
    var componentToReadValue = LinkedHashMap_init();
    if (MDR_getInstance().currentState === MDR_STATE$ALU_OP_getInstance()) {
      var value = ALU_getInstance().posEdge();
      componentToReadValue.put_xwzc9p$('ALU', value);
      ACC_getInstance().currentState = ACC_STATE$LOAD_getInstance();
      var value_0 = ACC_getInstance().posEdge();
      componentToReadValue.put_xwzc9p$('ACC', value_0);
      visitiedComponents.addAll_brywnq$(listOf_0([ACTION_BLOCK$MDR_getInstance(), ACTION_BLOCK$MDRALU_getInstance(), ACTION_BLOCK$ALU_getInstance(), ACTION_BLOCK$ALUACC_getInstance(), ACTION_BLOCK$ACC_getInstance()]));
    } else if (MDR_getInstance().currentState === MDR_STATE$LOAD_getInstance()) {
      var value_1 = ACC_getInstance().posEdge();
      componentToReadValue.put_xwzc9p$('ACC', value_1);
      visitiedComponents.addAll_brywnq$(listOf(ACTION_BLOCK$ACC_getInstance()));
    } else if (IR_getInstance().currentState === IR_STATE$ALU_getInstance()) {
      var value_2 = ALU_getInstance().posEdge();
      componentToReadValue.put_xwzc9p$('ALU', value_2);
      IR_getInstance().currentState = IR_STATE$NONE_getInstance();
      visitiedComponents.addAll_brywnq$(listOf_0([ACTION_BLOCK$MDRALU_getInstance(), ACTION_BLOCK$ALU_getInstance()]));
    } else if (ACC_getInstance().currentState === ACC_STATE$JUMP_getInstance()) {
      var value_3 = ACC_getInstance().posEdge();
      componentToReadValue.put_xwzc9p$('ACC', value_3);
      var value_4 = MDR_getInstance().posEdge();
      componentToReadValue.put_xwzc9p$('MDR', value_4);
      IR_getInstance().currentState = IR_STATE$PC_getInstance();
      var value_5 = IR_getInstance().posEdge();
      componentToReadValue.put_xwzc9p$('IR', value_5);
      visitiedComponents.addAll_brywnq$(listOf_0([ACTION_BLOCK$ACC_getInstance(), ACTION_BLOCK$MDRACC_getInstance(), ACTION_BLOCK$MDR_getInstance(), ACTION_BLOCK$MDRIR_getInstance(), ACTION_BLOCK$IR_getInstance()]));
    }var value_6 = PC_getInstance().posEdge();
    componentToReadValue.put_xwzc9p$('PC', value_6);
    var value_7 = MAR_getInstance().posEdge();
    componentToReadValue.put_xwzc9p$('MAR', value_7);
    MDR_getInstance().currentState = MDR_STATE$FETCH_getInstance();
    var value_8 = MDR_getInstance().negEdge();
    componentToReadValue.put_xwzc9p$('MDR', value_8);
    var value_9 = ensureNotNull(componentToReadValue.get_11rb$('MDR'));
    componentToReadValue.put_xwzc9p$('IR', value_9);
    visitiedComponents.addAll_brywnq$(listOf_0([ACTION_BLOCK$PC_getInstance(), ACTION_BLOCK$PCMAR_getInstance(), ACTION_BLOCK$MAR_getInstance(), ACTION_BLOCK$MARMEM_getInstance(), ACTION_BLOCK$MEM_getInstance(), ACTION_BLOCK$MEMMDR_getInstance(), ACTION_BLOCK$MDR_getInstance(), ACTION_BLOCK$MDRIR_getInstance(), ACTION_BLOCK$IR_getInstance(), ACTION_BLOCK$IRCON_getInstance()]));
    return new Control$ProcessorStateChange(visitiedComponents, componentToReadValue);
  };
  Control.prototype.executeCycle = function () {
    return this.decodeAndExec_0(IR_getInstance().getOpcode());
  };
  function Control$InstructionEffect(log, pcJump, memUpdate, processorStateChange) {
    this.log = log;
    this.pcJump = pcJump;
    this.memUpdate = memUpdate;
    this.processorStateChange = processorStateChange;
  }
  Control$InstructionEffect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstructionEffect',
    interfaces: []
  };
  Control$InstructionEffect.prototype.component1 = function () {
    return this.log;
  };
  Control$InstructionEffect.prototype.component2 = function () {
    return this.pcJump;
  };
  Control$InstructionEffect.prototype.component3 = function () {
    return this.memUpdate;
  };
  Control$InstructionEffect.prototype.component4 = function () {
    return this.processorStateChange;
  };
  Control$InstructionEffect.prototype.copy_q1mgv5$ = function (log, pcJump, memUpdate, processorStateChange) {
    return new Control$InstructionEffect(log === void 0 ? this.log : log, pcJump === void 0 ? this.pcJump : pcJump, memUpdate === void 0 ? this.memUpdate : memUpdate, processorStateChange === void 0 ? this.processorStateChange : processorStateChange);
  };
  Control$InstructionEffect.prototype.toString = function () {
    return 'InstructionEffect(log=' + Kotlin.toString(this.log) + (', pcJump=' + Kotlin.toString(this.pcJump)) + (', memUpdate=' + Kotlin.toString(this.memUpdate)) + (', processorStateChange=' + Kotlin.toString(this.processorStateChange)) + ')';
  };
  Control$InstructionEffect.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.log) | 0;
    result = result * 31 + Kotlin.hashCode(this.pcJump) | 0;
    result = result * 31 + Kotlin.hashCode(this.memUpdate) | 0;
    result = result * 31 + Kotlin.hashCode(this.processorStateChange) | 0;
    return result;
  };
  Control$InstructionEffect.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.log, other.log) && Kotlin.equals(this.pcJump, other.pcJump) && Kotlin.equals(this.memUpdate, other.memUpdate) && Kotlin.equals(this.processorStateChange, other.processorStateChange)))));
  };
  Control.prototype.decodeAndExec_0 = function (opcode) {
    var tmp$;
    var operandSaveForLogging = IR_getInstance().getOperand();
    var retVal = new Control$InstructionEffect('', 1, new MemUpdate(null, null), new Control$ProcessorStateChange(mutableListOf([ACTION_BLOCK$CON_getInstance()]), LinkedHashMap_init()));
    var aluOpComponents = listOf_0([ACTION_BLOCK$IR_getInstance(), ACTION_BLOCK$IRMAR_getInstance(), ACTION_BLOCK$MAR_getInstance(), ACTION_BLOCK$MARMEM_getInstance(), ACTION_BLOCK$ACC_getInstance(), ACTION_BLOCK$ACCALU_getInstance(), ACTION_BLOCK$ALU_getInstance(), ACTION_BLOCK$MDR_getInstance(), ACTION_BLOCK$MEMMDR_getInstance(), ACTION_BLOCK$MEM_getInstance(), ACTION_BLOCK$MEMMDR_getInstance()]);
    var jumpComponents = listOf_0([ACTION_BLOCK$IR_getInstance(), ACTION_BLOCK$IRALU_getInstance(), ACTION_BLOCK$ACC_getInstance(), ACTION_BLOCK$ACCALU_getInstance(), ACTION_BLOCK$ALU_getInstance(), ACTION_BLOCK$ACCALU_getInstance()]);
    switch (opcode.data & 65535) {
      case 0:
        retVal.processorStateChange.componentToReadValue = this.executeLoad_0();
        retVal.processorStateChange.visitedComponents.addAll_brywnq$(listOf_0([ACTION_BLOCK$IR_getInstance(), ACTION_BLOCK$IRMAR_getInstance(), ACTION_BLOCK$MAR_getInstance(), ACTION_BLOCK$MARMEM_getInstance(), ACTION_BLOCK$MEM_getInstance(), ACTION_BLOCK$MEMMDR_getInstance(), ACTION_BLOCK$MDR_getInstance(), ACTION_BLOCK$MDRACC_getInstance(), ACTION_BLOCK$ACC_getInstance()]));
        retVal.log = 'MEM[' + operandSaveForLogging + '] -> ACC' + '\n';
        break;
      case 1:
        retVal.processorStateChange.componentToReadValue = this.executeStore_0();
        retVal.processorStateChange.visitedComponents.addAll_brywnq$(listOf_0([ACTION_BLOCK$IR_getInstance(), ACTION_BLOCK$IRMAR_getInstance(), ACTION_BLOCK$MAR_getInstance(), ACTION_BLOCK$MARMEM_getInstance(), ACTION_BLOCK$MEM_getInstance(), ACTION_BLOCK$ACC_getInstance(), ACTION_BLOCK$MDRACC_getInstance(), ACTION_BLOCK$MDR_getInstance(), ACTION_BLOCK$MEMMDR_getInstance(), ACTION_BLOCK$MEM_getInstance()]));
        retVal.log = 'MEM[' + operandSaveForLogging + '] <- ' + ACC_getInstance().data + '\n';
        retVal.memUpdate.storeAddress = operandSaveForLogging.data & 65535;
        retVal.memUpdate.storeValue = ACC_getInstance().data;
        break;
      case 2:
        retVal.processorStateChange.componentToReadValue = this.executeAluOp_0(ALU_OP$ADD_getInstance());
        retVal.processorStateChange.visitedComponents.addAll_brywnq$(aluOpComponents);
        retVal.log = 'ACC + MEM[' + operandSaveForLogging + '] -> ACC' + '\n';
        break;
      case 3:
        retVal.processorStateChange.componentToReadValue = this.executeAluOp_0(ALU_OP$SUBSTRACT_getInstance());
        retVal.processorStateChange.visitedComponents.addAll_brywnq$(aluOpComponents);
        retVal.log = 'ACC - MEM[' + operandSaveForLogging + '] -> ACC' + '\n';
        break;
      case 4:
        retVal.log = operandSaveForLogging.toString() + ' -> PC' + '\n';
        var $this = PC_getInstance().content;
        var other = new UInt_init(1);
        var other_0 = new UInt_init((new UInt_init($this.data & 65535)).data - other.data | 0);
        retVal.pcJump = (new UInt_init((new UInt_init(operandSaveForLogging.data & 65535)).data - other_0.data | 0)).data;
        retVal.processorStateChange.visitedComponents.addAll_brywnq$(jumpComponents);
        retVal.processorStateChange.componentToReadValue = this.executeJump_0(ALU_OP$JMP_getInstance());
        break;
      case 5:
        var $this_0 = ACC_getInstance().data;
        var other_1 = new UInt_init(0);
        if (uintCompare((new UInt_init($this_0.data & 65535)).data, other_1.data) >= 0) {
          retVal.log = operandSaveForLogging.toString() + ' -> PC' + '\n';
          var $this_1 = PC_getInstance().content;
          var other_2 = new UInt_init(1);
          var other_3 = new UInt_init((new UInt_init($this_1.data & 65535)).data - other_2.data | 0);
          retVal.pcJump = (new UInt_init((new UInt_init(operandSaveForLogging.data & 65535)).data - other_3.data | 0)).data;
        } else {
          retVal.log = 'NOP\n';
        }

        retVal.processorStateChange.visitedComponents.addAll_brywnq$(jumpComponents);
        retVal.processorStateChange.componentToReadValue = this.executeJump_0(ALU_OP$JGE_getInstance());
        break;
      case 6:
        if (!((tmp$ = ACC_getInstance().data) != null ? tmp$.equals(new UShort(toShort((new UInt_init(0)).data))) : null)) {
          retVal.log = operandSaveForLogging.toString() + ' -> PC' + '\n';
          var $this_2 = PC_getInstance().content;
          var other_4 = new UInt_init(1);
          var other_5 = new UInt_init((new UInt_init($this_2.data & 65535)).data - other_4.data | 0);
          retVal.pcJump = (new UInt_init((new UInt_init(operandSaveForLogging.data & 65535)).data - other_5.data | 0)).data;
        } else {
          retVal.log = 'NOP\n';
        }

        retVal.processorStateChange.visitedComponents.addAll_brywnq$(jumpComponents);
        retVal.processorStateChange.componentToReadValue = this.executeJump_0(ALU_OP$JNE_getInstance());
        break;
      case 7:
        retVal.log = 'break\n';
        break;
      case 8:
        retVal.processorStateChange.componentToReadValue = this.executeLoadImmediate_0();
        retVal.processorStateChange.visitedComponents.addAll_brywnq$(listOf_0([ACTION_BLOCK$IR_getInstance(), ACTION_BLOCK$IRALU_getInstance(), ACTION_BLOCK$ALU_getInstance(), ACTION_BLOCK$ALUACC_getInstance(), ACTION_BLOCK$ACC_getInstance()]));
        retVal.log = operandSaveForLogging.toString() + ' -> ACC' + '\n';
        break;
      case 9:
        retVal.processorStateChange.componentToReadValue = this.executeAluOp_0(ALU_OP$MULTIPLY_getInstance());
        retVal.processorStateChange.visitedComponents.addAll_brywnq$(aluOpComponents);
        retVal.log = 'ACC * MEM[' + operandSaveForLogging + '] -> ACC' + '\n';
        break;
      case 10:
        retVal.processorStateChange.componentToReadValue = this.executeAluOp_0(ALU_OP$DIVIDE_getInstance());
        retVal.processorStateChange.visitedComponents.addAll_brywnq$(aluOpComponents);
        retVal.log = 'ACC / MEM[' + operandSaveForLogging + '] -> ACC' + '\n';
        break;
      case 11:
        retVal.processorStateChange.componentToReadValue = this.executeAluOp_0(ALU_OP$AND_getInstance());
        retVal.processorStateChange.visitedComponents.addAll_brywnq$(aluOpComponents);
        retVal.log = 'ACC AND MEM[' + operandSaveForLogging + '] -> ACC' + '\n';
        break;
      case 12:
        retVal.processorStateChange.componentToReadValue = this.executeAluOp_0(ALU_OP$OR_getInstance());
        retVal.processorStateChange.visitedComponents.addAll_brywnq$(aluOpComponents);
        retVal.log = 'ACC OR MEM[' + operandSaveForLogging + '] -> ACC' + '\n';
        break;
      case 13:
        this.executeSyscall_0(Control$SyscallTypes$Companion_getInstance().fromInt_za3lpa$(ACC_getInstance().data.data & 65535), IR_getInstance().getOperand());
        retVal.log = 'syscall\n';
        break;
      default:break;
    }
    return retVal;
  };
  Control.prototype.executeAluOp_0 = function (operation) {
    var componentToReadValue = LinkedHashMap_init();
    IR_getInstance().currentState = IR_STATE$MAR_getInstance();
    var value = IR_getInstance().posEdge();
    componentToReadValue.put_xwzc9p$('IR', value);
    var value_0 = MAR_getInstance().posEdge();
    componentToReadValue.put_xwzc9p$('MAR', value_0);
    MDR_getInstance().currentState = MDR_STATE$ALU_OP_getInstance();
    ACC_getInstance().currentState = ACC_STATE$ALU_OP_getInstance();
    var value_1 = ACC_getInstance().posEdge();
    componentToReadValue.put_xwzc9p$('ACC', value_1);
    ALU_getInstance().currentOp = operation;
    var value_2 = ALU_getInstance().posEdge();
    componentToReadValue.put_xwzc9p$('ALU', value_2);
    var value_3 = MDR_getInstance().negEdge();
    componentToReadValue.put_xwzc9p$('MDR', value_3);
    return componentToReadValue;
  };
  Control.prototype.executeJump_0 = function (operation) {
    var componentToReadValue = LinkedHashMap_init();
    var value = IR_getInstance().posEdge();
    componentToReadValue.put_xwzc9p$('IR', value);
    ACC_getInstance().currentState = ACC_STATE$ALU_OP_getInstance();
    var value_0 = ACC_getInstance().posEdge();
    componentToReadValue.put_xwzc9p$('ACC', value_0);
    ALU_getInstance().currentOp = operation;
    var value_1 = ALU_getInstance().posEdge();
    componentToReadValue.put_xwzc9p$('ALU', value_1);
    ACC_getInstance().currentState = ACC_STATE$JUMP_getInstance();
    return componentToReadValue;
  };
  Control.prototype.executeLoadImmediate_0 = function () {
    var componentToReadValue = LinkedHashMap_init();
    IR_getInstance().currentState = IR_STATE$ALU_getInstance();
    var value = IR_getInstance().posEdge();
    componentToReadValue.put_xwzc9p$('IR', value);
    IR_getInstance().currentState = IR_STATE$NONE_getInstance();
    ALU_getInstance().currentOp = ALU_OP$LDI_getInstance();
    var value_0 = ALU_getInstance().posEdge();
    componentToReadValue.put_xwzc9p$('ALU', value_0);
    ACC_getInstance().currentState = ACC_STATE$LOAD_getInstance();
    var value_1 = ACC_getInstance().posEdge();
    componentToReadValue.put_xwzc9p$('ACC', value_1);
    return componentToReadValue;
  };
  Control.prototype.executeLoad_0 = function () {
    var componentToReadValue = LinkedHashMap_init();
    IR_getInstance().currentState = IR_STATE$MAR_getInstance();
    var value = IR_getInstance().posEdge();
    componentToReadValue.put_xwzc9p$('IR', value);
    var value_0 = MAR_getInstance().posEdge();
    componentToReadValue.put_xwzc9p$('MAR', value_0);
    MDR_getInstance().currentState = MDR_STATE$LOAD_getInstance();
    ACC_getInstance().currentState = ACC_STATE$LOAD_getInstance();
    MDR_getInstance().negEdge();
    var value_1 = MDR_getInstance().negEdge();
    componentToReadValue.put_xwzc9p$('MDR', value_1);
    return componentToReadValue;
  };
  Control.prototype.executeStore_0 = function () {
    var componentToReadValue = LinkedHashMap_init();
    IR_getInstance().currentState = IR_STATE$MAR_getInstance();
    var value = IR_getInstance().posEdge();
    componentToReadValue.put_xwzc9p$('IR', value);
    var value_0 = MAR_getInstance().posEdge();
    componentToReadValue.put_xwzc9p$('MAR', value_0);
    ACC_getInstance().currentState = ACC_STATE$STORE_getInstance();
    var value_1 = ACC_getInstance().posEdge();
    componentToReadValue.put_xwzc9p$('ACC', value_1);
    MDR_getInstance().currentState = MDR_STATE$STORE_getInstance();
    var value_2 = MDR_getInstance().negEdge();
    componentToReadValue.put_xwzc9p$('MDR', value_2);
    return componentToReadValue;
  };
  Control.prototype.registerConnection_9rq6k0$ = function (a, b) {
    a.registerOutputConnection_gg9doy$(b);
  };
  function Control$SyscallTypes(name, ordinal, value) {
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Control$SyscallTypes_initFields() {
    Control$SyscallTypes_initFields = function () {
    };
    Control$SyscallTypes$PRINT_INT_instance = new Control$SyscallTypes('PRINT_INT', 0, 0);
    Control$SyscallTypes$PRINT_FLOAT_instance = new Control$SyscallTypes('PRINT_FLOAT', 1, 1);
    Control$SyscallTypes$PRINT_STRING_instance = new Control$SyscallTypes('PRINT_STRING', 2, 2);
    Control$SyscallTypes$Companion_getInstance();
  }
  var Control$SyscallTypes$PRINT_INT_instance;
  function Control$SyscallTypes$PRINT_INT_getInstance() {
    Control$SyscallTypes_initFields();
    return Control$SyscallTypes$PRINT_INT_instance;
  }
  var Control$SyscallTypes$PRINT_FLOAT_instance;
  function Control$SyscallTypes$PRINT_FLOAT_getInstance() {
    Control$SyscallTypes_initFields();
    return Control$SyscallTypes$PRINT_FLOAT_instance;
  }
  var Control$SyscallTypes$PRINT_STRING_instance;
  function Control$SyscallTypes$PRINT_STRING_getInstance() {
    Control$SyscallTypes_initFields();
    return Control$SyscallTypes$PRINT_STRING_instance;
  }
  function Control$SyscallTypes$Companion() {
    Control$SyscallTypes$Companion_instance = this;
  }
  Control$SyscallTypes$Companion.prototype.fromInt_za3lpa$ = function (value) {
    var $receiver = Control$SyscallTypes$values();
    var first$result;
    first$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (element.value === value) {
          first$result = element;
          break first$break;
        }}
      throw new NoSuchElementException_init('Array contains no element matching the predicate.');
    }
     while (false);
    return first$result;
  };
  Control$SyscallTypes$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Control$SyscallTypes$Companion_instance = null;
  function Control$SyscallTypes$Companion_getInstance() {
    Control$SyscallTypes_initFields();
    if (Control$SyscallTypes$Companion_instance === null) {
      new Control$SyscallTypes$Companion();
    }return Control$SyscallTypes$Companion_instance;
  }
  Control$SyscallTypes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SyscallTypes',
    interfaces: [Enum]
  };
  function Control$SyscallTypes$values() {
    return [Control$SyscallTypes$PRINT_INT_getInstance(), Control$SyscallTypes$PRINT_FLOAT_getInstance(), Control$SyscallTypes$PRINT_STRING_getInstance()];
  }
  Control$SyscallTypes.values = Control$SyscallTypes$values;
  function Control$SyscallTypes$valueOf(name) {
    switch (name) {
      case 'PRINT_INT':
        return Control$SyscallTypes$PRINT_INT_getInstance();
      case 'PRINT_FLOAT':
        return Control$SyscallTypes$PRINT_FLOAT_getInstance();
      case 'PRINT_STRING':
        return Control$SyscallTypes$PRINT_STRING_getInstance();
      default:throwISE('No enum constant Sim.Control.SyscallTypes.' + name);
    }
  }
  Control$SyscallTypes.valueOf_61zpoe$ = Control$SyscallTypes$valueOf;
  Control.prototype.executeSyscall_0 = function (type, arg) {
    switch (type.name) {
      case 'PRINT_INT':
        syscallPrintInt(arg);
        break;
      case 'PRINT_FLOAT':
        syscallPrintFloat(arg);
        break;
      case 'PRINT_STRING':
        syscallPrintString(arg);
        break;
    }
  };
  Control.prototype.resetComponents_0 = function () {
    PC_getInstance().reset();
    ACC_getInstance().reset();
    ALU_getInstance().reset();
    IR_getInstance().reset();
    MAR_getInstance().reset();
    MDR_getInstance().reset();
    PC_getInstance().reset();
  };
  Control.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Control',
    interfaces: []
  };
  function HardwareBlock() {
    this.outputConnection = ArrayList_init();
    this.buffer = null;
  }
  HardwareBlock.prototype.resetHardwareBlock = function () {
    this.buffer = null;
    this.outputConnection = ArrayList_init();
  };
  HardwareBlock.prototype.registerOutputConnection_gg9doy$ = function (block) {
    this.outputConnection.add_11rb$(block);
  };
  HardwareBlock.prototype.write_1pe3u2$ = function (index, data) {
    this.outputConnection.get_za3lpa$(index).buffer = data;
  };
  HardwareBlock.prototype.read = function () {
    var tmp$;
    if (this.buffer != null) {
      var copy = Kotlin.isType(tmp$ = this.buffer, UShort) ? tmp$ : throwCCE();
      this.buffer = null;
      return copy;
    } else {
      throw Exception_init('Empty buffer');
    }
  };
  HardwareBlock.prototype.haveData = function () {
    if (this.buffer == null) {
      return false;
    }return true;
  };
  HardwareBlock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HardwareBlock',
    interfaces: []
  };
  function IR_STATE(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IR_STATE_initFields() {
    IR_STATE_initFields = function () {
    };
    IR_STATE$MAR_instance = new IR_STATE('MAR', 0);
    IR_STATE$ALU_instance = new IR_STATE('ALU', 1);
    IR_STATE$PC_instance = new IR_STATE('PC', 2);
    IR_STATE$NONE_instance = new IR_STATE('NONE', 3);
  }
  var IR_STATE$MAR_instance;
  function IR_STATE$MAR_getInstance() {
    IR_STATE_initFields();
    return IR_STATE$MAR_instance;
  }
  var IR_STATE$ALU_instance;
  function IR_STATE$ALU_getInstance() {
    IR_STATE_initFields();
    return IR_STATE$ALU_instance;
  }
  var IR_STATE$PC_instance;
  function IR_STATE$PC_getInstance() {
    IR_STATE_initFields();
    return IR_STATE$PC_instance;
  }
  var IR_STATE$NONE_instance;
  function IR_STATE$NONE_getInstance() {
    IR_STATE_initFields();
    return IR_STATE$NONE_instance;
  }
  IR_STATE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IR_STATE',
    interfaces: [Enum]
  };
  function IR_STATE$values() {
    return [IR_STATE$MAR_getInstance(), IR_STATE$ALU_getInstance(), IR_STATE$PC_getInstance(), IR_STATE$NONE_getInstance()];
  }
  IR_STATE.values = IR_STATE$values;
  function IR_STATE$valueOf(name) {
    switch (name) {
      case 'MAR':
        return IR_STATE$MAR_getInstance();
      case 'ALU':
        return IR_STATE$ALU_getInstance();
      case 'PC':
        return IR_STATE$PC_getInstance();
      case 'NONE':
        return IR_STATE$NONE_getInstance();
      default:throwISE('No enum constant Sim.IR_STATE.' + name);
    }
  }
  IR_STATE.valueOf_61zpoe$ = IR_STATE$valueOf;
  function IR() {
    IR_instance = this;
    HardwareBlock.call(this);
    this.MAR_CONNECTION_0 = 0;
    this.PC_CONNECTION_0 = 1;
    this.ALU_CONNECTION_0 = 2;
    this.currentState = IR_STATE$NONE_getInstance();
    this.container = new UShort(0);
  }
  IR.prototype.posEdge = function () {
    if (this.currentState === IR_STATE$MAR_getInstance()) {
      this.container = this.read();
      this.write_1pe3u2$(this.MAR_CONNECTION_0, new UShort(toShort(this.container.data & 65535 & 4095)));
      return this.container.data & 65535;
    } else if (this.currentState === IR_STATE$PC_getInstance()) {
      var readVal = this.read().data & 65535;
      if (readVal === 1) {
        this.write_1pe3u2$(this.PC_CONNECTION_0, new UShort(toShort(ensureNotNull(this.container).data & 65535 & 4095)));
      }return readVal;
    } else {
      this.container = this.read();
      this.write_1pe3u2$(this.ALU_CONNECTION_0, new UShort(toShort(this.container.data & 65535 & 4095)));
      return this.container.data & 65535;
    }
  };
  IR.prototype.negEdge = function () {
    return -1;
  };
  IR.prototype.reset = function () {
    this.currentState = IR_STATE$NONE_getInstance();
    this.resetHardwareBlock();
  };
  IR.prototype.getOpcode = function () {
    return new UShort(toShort((ensureNotNull(this.buffer).data & 65535) >> 12));
  };
  IR.prototype.getOperand = function () {
    return new UShort(toShort(ensureNotNull(this.buffer).data & 65535 & 4095));
  };
  IR.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'IR',
    interfaces: [HardwareBlock]
  };
  var IR_instance = null;
  function IR_getInstance() {
    if (IR_instance === null) {
      new IR();
    }return IR_instance;
  }
  function MAR() {
    MAR_instance = this;
    HardwareBlock.call(this);
    this.memoryConnection = Memory_getInstance();
  }
  MAR.prototype.posEdge = function () {
    var readVal = this.read();
    this.memoryConnection.setCurrentAddress_6hrhkk$(readVal);
    return readVal.data & 65535;
  };
  MAR.prototype.negEdge = function () {
    return -1;
  };
  MAR.prototype.reset = function () {
    this.resetHardwareBlock();
  };
  MAR.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MAR',
    interfaces: [HardwareBlock]
  };
  var MAR_instance = null;
  function MAR_getInstance() {
    if (MAR_instance === null) {
      new MAR();
    }return MAR_instance;
  }
  function MDR_STATE(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MDR_STATE_initFields() {
    MDR_STATE_initFields = function () {
    };
    MDR_STATE$FETCH_instance = new MDR_STATE('FETCH', 0);
    MDR_STATE$STORE_instance = new MDR_STATE('STORE', 1);
    MDR_STATE$LOAD_instance = new MDR_STATE('LOAD', 2);
    MDR_STATE$ALU_OP_instance = new MDR_STATE('ALU_OP', 3);
  }
  var MDR_STATE$FETCH_instance;
  function MDR_STATE$FETCH_getInstance() {
    MDR_STATE_initFields();
    return MDR_STATE$FETCH_instance;
  }
  var MDR_STATE$STORE_instance;
  function MDR_STATE$STORE_getInstance() {
    MDR_STATE_initFields();
    return MDR_STATE$STORE_instance;
  }
  var MDR_STATE$LOAD_instance;
  function MDR_STATE$LOAD_getInstance() {
    MDR_STATE_initFields();
    return MDR_STATE$LOAD_instance;
  }
  var MDR_STATE$ALU_OP_instance;
  function MDR_STATE$ALU_OP_getInstance() {
    MDR_STATE_initFields();
    return MDR_STATE$ALU_OP_instance;
  }
  MDR_STATE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDR_STATE',
    interfaces: [Enum]
  };
  function MDR_STATE$values() {
    return [MDR_STATE$FETCH_getInstance(), MDR_STATE$STORE_getInstance(), MDR_STATE$LOAD_getInstance(), MDR_STATE$ALU_OP_getInstance()];
  }
  MDR_STATE.values = MDR_STATE$values;
  function MDR_STATE$valueOf(name) {
    switch (name) {
      case 'FETCH':
        return MDR_STATE$FETCH_getInstance();
      case 'STORE':
        return MDR_STATE$STORE_getInstance();
      case 'LOAD':
        return MDR_STATE$LOAD_getInstance();
      case 'ALU_OP':
        return MDR_STATE$ALU_OP_getInstance();
      default:throwISE('No enum constant Sim.MDR_STATE.' + name);
    }
  }
  MDR_STATE.valueOf_61zpoe$ = MDR_STATE$valueOf;
  function MDR() {
    MDR_instance = this;
    HardwareBlock.call(this);
    this.IR_CONNECTION_0 = 0;
    this.ACC_CONNECTION_0 = 2;
    this.ALU_CONNECTION_0 = 1;
    this.memoryConnection = Memory_getInstance();
    this.currentState = MDR_STATE$FETCH_getInstance();
  }
  MDR.prototype.posEdge = function () {
    var readVal = this.read();
    this.write_1pe3u2$(this.IR_CONNECTION_0, readVal);
    return readVal.data & 65535;
  };
  MDR.prototype.negEdge = function () {
    var fetchVal = this.memoryConnection.fetchMem();
    switch (this.currentState.name) {
      case 'FETCH':
        this.write_1pe3u2$(this.IR_CONNECTION_0, fetchVal);
        break;
      case 'STORE':
        var readVal = this.read();
        this.memoryConnection.writeMem_6hrhkk$(readVal);
        return readVal.data & 65535;
      case 'LOAD':
        this.write_1pe3u2$(this.ACC_CONNECTION_0, fetchVal);
        break;
      case 'ALU_OP':
        this.write_1pe3u2$(this.ALU_CONNECTION_0, fetchVal);
        break;
    }
    return fetchVal.data & 65535;
  };
  MDR.prototype.reset = function () {
    this.resetHardwareBlock();
    this.currentState = MDR_STATE$FETCH_getInstance();
  };
  MDR.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDR',
    interfaces: [HardwareBlock]
  };
  var MDR_instance = null;
  function MDR_getInstance() {
    if (MDR_instance === null) {
      new MDR();
    }return MDR_instance;
  }
  function Main(inputT) {
    this.inputType = inputT;
    this.cpu_ce7u34$_0 = this.cpu_ce7u34$_0;
  }
  Object.defineProperty(Main.prototype, 'cpu', {
    configurable: true,
    get: function () {
      if (this.cpu_ce7u34$_0 == null)
        return throwUPAE('cpu');
      return this.cpu_ce7u34$_0;
    },
    set: function (cpu) {
      this.cpu_ce7u34$_0 = cpu;
    }
  });
  Main.prototype.runSimulation_61zpoe$ = function (memString) {
    var preprocess = new Preprocess(this.inputType);
    var compilation = preprocess.setupMemoryForRun_61zpoe$(memString);
    if (!equals(compilation.compilationStatus, 'OK')) {
      return compilation.compilationStatus;
    }this.cpu = new Sim(compilation.memory);
    var logOutput = this.cpu.runSimulation();
    return logOutput;
  };
  Main.prototype.preprocessAndCompile_61zpoe$ = function (memString) {
    var preprocess = new Preprocess(this.inputType);
    return preprocess.setupMemoryForRun_61zpoe$(memString);
  };
  Main.prototype.prepareModelForDebug_1n40sl$ = function (memory) {
    this.cpu = new Sim(memory);
    this.cpu.setupSimulator();
  };
  Main.prototype.stepDebug = function () {
    return this.cpu.stepInstruction();
  };
  Main.prototype.fetchCycleStep = function () {
    return this.cpu.stepFetchCycle();
  };
  Main.prototype.executeCycleStep = function () {
    return this.cpu.stepExecuteCycle();
  };
  Main.prototype.updateSimulatorsMemory_1pe3u2$ = function (index, value) {
    this.cpu.memoryWrite_1pe3u2$(index, value);
  };
  Main.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Main',
    interfaces: []
  };
  function UShortArray$lambda_0(closure$init) {
    return function (index) {
      return closure$init(index).data;
    };
  }
  function Memory() {
    Memory_instance = this;
    this.arr = new UShortArray_init(Kotlin.fillArray(new Int16Array(4096), UShortArray$lambda_0(Memory$arr$lambda)));
    this.addr = new UShort(0);
  }
  Memory.prototype.setCurrentAddress_6hrhkk$ = function (addr) {
    this.addr = addr;
  };
  Memory.prototype.fetchMem = function () {
    return this.arr.get_za3lpa$(this.addr.data & 65535);
  };
  Memory.prototype.writeMem_6hrhkk$ = function (data) {
    this.arr.set_1pe3u2$(this.addr.data & 65535, data);
  };
  function Memory$arr$lambda(it) {
    return new UShort(-8531);
  }
  Memory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Memory',
    interfaces: []
  };
  var Memory_instance = null;
  function Memory_getInstance() {
    if (Memory_instance === null) {
      new Memory();
    }return Memory_instance;
  }
  function PC() {
    PC_instance = this;
    HardwareBlock.call(this);
    this.content = new UShort(0);
    this.MAR_CONNECTION_0 = 0;
  }
  PC.prototype.posEdge = function () {
    if (this.haveData()) {
      this.content = this.read();
    }this.write_1pe3u2$(0, this.content);
    var tmp$ = this.content;
    var other = new UShort(toShort(1));
    this.content = new UShort(toShort((new UInt_init((new UInt_init(tmp$.data & 65535)).data + (new UInt_init(other.data & 65535)).data | 0)).data));
    return this.content.data & 65535;
  };
  PC.prototype.negEdge = function () {
    return -1;
  };
  PC.prototype.reset = function () {
    this.content = new UShort(0);
    this.resetHardwareBlock();
  };
  PC.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PC',
    interfaces: [HardwareBlock]
  };
  var PC_instance = null;
  function PC_getInstance() {
    if (PC_instance === null) {
      new PC();
    }return PC_instance;
  }
  function UShortArray$lambda_1(closure$init) {
    return function (index) {
      return closure$init(index).data;
    };
  }
  function MemorySetupOutput(compilationStatus, memory, firstLine) {
    this.compilationStatus = compilationStatus;
    this.memory = memory;
    this.firstLine = firstLine;
  }
  MemorySetupOutput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemorySetupOutput',
    interfaces: []
  };
  MemorySetupOutput.prototype.component1 = function () {
    return this.compilationStatus;
  };
  MemorySetupOutput.prototype.component2 = function () {
    return this.memory;
  };
  MemorySetupOutput.prototype.component3 = function () {
    return this.firstLine;
  };
  MemorySetupOutput.prototype.copy_clv30l$ = function (compilationStatus, memory, firstLine) {
    return new MemorySetupOutput(compilationStatus === void 0 ? this.compilationStatus : compilationStatus, memory === void 0 ? this.memory : memory, firstLine === void 0 ? this.firstLine : firstLine);
  };
  MemorySetupOutput.prototype.toString = function () {
    return 'MemorySetupOutput(compilationStatus=' + Kotlin.toString(this.compilationStatus) + (', memory=' + Kotlin.toString(this.memory)) + (', firstLine=' + Kotlin.toString(this.firstLine)) + ')';
  };
  MemorySetupOutput.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.compilationStatus) | 0;
    result = result * 31 + Kotlin.hashCode(this.memory) | 0;
    result = result * 31 + Kotlin.hashCode(this.firstLine) | 0;
    return result;
  };
  MemorySetupOutput.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.compilationStatus, other.compilationStatus) && Kotlin.equals(this.memory, other.memory) && Kotlin.equals(this.firstLine, other.firstLine)))));
  };
  function Preprocess(inputT) {
    this.inputType = inputT;
    this.memory_0 = new UShortArray_init(Kotlin.fillArray(new Int16Array(4096), UShortArray$lambda_1(Preprocess$memory$lambda)));
    this.labeledInstructions_0 = listOf_0(['syscall', 'STO', 'ADD', 'LDW', 'MUL', 'SUB', 'JMP', 'JNE', 'JGE', 'MUL', 'DIV', 'AND', 'OR']);
  }
  Preprocess.prototype.setupMemoryForRun_61zpoe$ = function (memString) {
    var textSection = memString;
    var inputAsArray = split(textSection, ['\n']);
    var firstLine = {v: 1};
    if (this.inputType === InputT$ASM_getInstance()) {
      if (contains(memString, '.data')) {
        if (contains(memString, '.text')) {
          firstLine.v = inputAsArray.indexOf_11rb$('.text') + 2 | 0;
          var dataAndText = toMutableList(split(split(memString, ['.data']).get_za3lpa$(1), ['.text']));
          var dataLabelsMap;
          try {
            dataLabelsMap = this.dataSectionSetup_0(dataAndText.get_za3lpa$(0));
          } catch (e) {
            if (Kotlin.isType(e, Exception)) {
              return new MemorySetupOutput(toString(e.message), new UShortArray_init(new Int16Array([])), firstLine.v);
            } else
              throw e;
          }
          var textLines = toMutableList(split(dataAndText.get_za3lpa$(1), ['\n']));
          if (equals(textLines.get_za3lpa$(0), '')) {
            textLines.removeAt_za3lpa$(0);
          }var tmp$, tmp$_0;
          var index = 0;
          tmp$ = textLines.iterator();
          while (tmp$.hasNext()) {
            var item = tmp$.next();
            var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
            var tmp$_1;
            var isValueLabel = false;
            tmp$_1 = this.labeledInstructions_0.iterator();
            while (tmp$_1.hasNext()) {
              var instruction = tmp$_1.next();
              if (split(item, [' ']).contains_11rb$(instruction)) {
                if (dataLabelsMap.containsKey_11rb$(split(textLines.get_za3lpa$(index_0), [' ']).get_za3lpa$(1))) {
                  textLines.set_wxm5ur$(index_0, instruction + (' ' + toString(dataLabelsMap.get_11rb$(split(item, [' ']).get_za3lpa$(1)))));
                  isValueLabel = true;
                  break;
                }}}
            if (!isValueLabel) {
              try {
                toUShort_0(split(textLines.get_za3lpa$(index_0), [' ']).get_za3lpa$(1));
              } catch (e_0) {
                if (Kotlin.isType(e_0, NumberFormatException)) {
                  return new MemorySetupOutput('Compilation error line ' + (index_0 + firstLine.v | 0) + " , label '" + split(item, [' ']).get_za3lpa$(1) + "' not found", new UShortArray_init(new Int16Array([])), firstLine.v);
                } else if (Kotlin.isType(e_0, IndexOutOfBoundsException)) {
                  var _ = e_0;
                } else
                  throw e_0;
              }
            }}
          dataAndText.set_wxm5ur$(1, joinToString(textLines, '\n'));
          textSection = dataAndText.get_za3lpa$(1);
        }}}var counter = {v: 0};
    var memList;
    try {
      memList = this.memStringToMemArr_0(textSection, firstLine.v);
      var tmp$_2;
      tmp$_2 = memList.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        this.memory_0.set_1pe3u2$(counter.v, element);
        counter.v = counter.v + 1 | 0;
      }
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        return new MemorySetupOutput(toString(e.message), new UShortArray_init(new Int16Array([])), firstLine.v);
      } else
        throw e;
    }
    return new MemorySetupOutput('OK', this.memory_0, firstLine.v);
  };
  Preprocess.prototype.memStringToMemArr_0 = function (memInput, firstLine) {
    var memArr = ArrayList_init();
    switch (this.inputType.name) {
      case 'HEX':
        var tmp$;
        tmp$ = split(memInput, ['\n']).iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          memArr.add_11rb$(toUShort(replace(element, '0x', ''), 16));
        }

        break;
      case 'BIN':
        var tmp$_0;
        tmp$_0 = split(memInput, ['\n']).iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          memArr.add_11rb$(toUShort(element_0, 2));
        }

        break;
      default:var tmp$_1, tmp$_0_0;
        var index = 0;
        tmp$_1 = split(memInput, ['\n']).iterator();
        while (tmp$_1.hasNext()) {
          var item = tmp$_1.next();
          var index_0 = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
          try {
            memArr.add_11rb$(this.compileInstruction_0(item));
          } catch (e) {
            if (Kotlin.isType(e, Exception)) {
              throw Exception_init('Compilation error line ' + (firstLine + index_0 | 0) + ' , no such instruction');
            } else
              throw e;
          }
        }

        break;
    }
    return memArr;
  };
  Preprocess.prototype.compileInstruction_0 = function (instruction) {
    var asArr = split(instruction, [' ']);
    var inst = asArr.get_za3lpa$(0);
    var operand = '';
    if (asArr.size > 1) {
      operand = asArr.get_za3lpa$(1);
    }switch (inst) {
      case 'LDW':
        return new UShort(toShort(0 | toInt(operand)));
      case 'STO':
        return new UShort(toShort(4096 | toInt(operand)));
      case 'ADD':
        return new UShort(toShort(8192 | toInt(operand)));
      case 'SUB':
        return new UShort(toShort(12288 | toInt(operand)));
      case 'JMP':
        return new UShort(toShort(16384 | toInt(operand)));
      case 'JGE':
        return new UShort(toShort(20480 | toInt(operand)));
      case 'JNE':
        return new UShort(toShort(24576 | toInt(operand)));
      case 'STP':
        return new UShort(toShort(28672));
      case 'LDI':
        return new UShort(toShort(32768 | toInt(operand)));
      case 'MUL':
        return new UShort(toShort(36864 | toInt(operand)));
      case 'DIV':
        return new UShort(toShort(40960 | toInt(operand)));
      case 'AND':
        return new UShort(toShort(45056 | toInt(operand)));
      case 'OR':
        return new UShort(toShort(49152 | toInt(operand)));
      case 'syscall':
        return new UShort(toShort(53248 | toInt(operand)));
      default:throw Exception_init('Unrecognized instruction exception');
    }
  };
  Preprocess.prototype.dataSectionSetup_0 = function (data) {
    var dataArr = split(data, ['\n']);
    var labelMap = LinkedHashMap_init();
    var currentWriteAddress = {v: 1920};
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = dataArr.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      if (!equals(item, '')) {
        if (indexOf(split(item, [' ']).get_za3lpa$(0), ':') === -1) {
          throw Exception_init('Label not found, line ' + (index_0 + 1 | 0));
        }if (indexOf(split(item, [' ']).get_za3lpa$(1), '.') === -1) {
          throw Exception_init('Label value type not found, line ' + (index_0 + 1 | 0));
        }var endIndex = indexOf(item, ':');
        var labelName = item.substring(0, endIndex);
        var startIndex = indexOf(item, '.') + 1 | 0;
        var valueType = item.substring(startIndex);
        var $receiver = valueType;
        var startIndex_0 = indexOf(valueType, ' ') + 1 | 0;
        var value = $receiver.substring(startIndex_0);
        var $receiver_0 = valueType;
        var endIndex_0 = indexOf(valueType, ' ');
        valueType = $receiver_0.substring(0, endIndex_0);
        var value_0 = currentWriteAddress.v;
        labelMap.put_xwzc9p$(labelName, value_0);
        switch (valueType) {
          case 'ascii':
            if (value.charCodeAt(0) !== 34 || value.charCodeAt(value.length - 1 | 0) !== 34) {
              throw Exception_init('Value for label of type .ascii is not a string, line ' + (index_0 + 1 | 0));
            }
            var $receiver_1 = value;
            var endIndex_1 = value.length - 1 | 0;
            value = $receiver_1.substring(1, endIndex_1);
            var $receiver_2 = value;
            var byteArray = encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver_2, 0, $receiver_2.length);
            var index_1 = {v: 0};
            var tmp$_1;
            for (tmp$_1 = 0; tmp$_1 !== byteArray.length; ++tmp$_1) {
              var element = byteArray[tmp$_1];
              var tmp$_2;
              if (index_1.v % 2 === 0) {
                tmp$_2 = index_1.v;
                if (tmp$_2 === (byteArray.length - 1 | 0)) {
                  this.memory_0.set_1pe3u2$(currentWriteAddress.v, toUShort(toString_0(new UShort(element), 16) + '00', 16));
                  currentWriteAddress.v = currentWriteAddress.v + 1 | 0;
                } else if (tmp$_2 === (byteArray.length - 2 | 0)) {
                  this.memory_0.set_1pe3u2$(currentWriteAddress.v, toUShort(toString_0(new UShort(element), 16) + toString_0(new UShort(byteArray[index_1.v + 1 | 0]), 16), 16));
                  currentWriteAddress.v = currentWriteAddress.v + 1 | 0;
                  this.memory_0.set_1pe3u2$(currentWriteAddress.v, toUShort('00', 16));
                  currentWriteAddress.v = currentWriteAddress.v + 1 | 0;
                } else {
                  this.memory_0.set_1pe3u2$(currentWriteAddress.v, toUShort(toString_0(new UShort(element), 16) + toString_0(new UShort(byteArray[index_1.v + 1 | 0]), 16), 16));
                  currentWriteAddress.v = currentWriteAddress.v + 1 | 0;
                }
              }index_1.v = index_1.v + 1 | 0;
            }

            break;
          case 'word':
            var tmp$_3;
            tmp$_3 = split(value, [', ']).iterator();
            while (tmp$_3.hasNext()) {
              var element_0 = tmp$_3.next();
              try {
                this.memory_0.set_1pe3u2$(currentWriteAddress.v, new UShort(toShort(toInt(element_0))));
              } catch (e) {
                if (Kotlin.isType(e, NumberFormatException)) {
                  throw Exception_init('Value for label of type .word is not a number, line ' + (index_0 + 1 | 0));
                } else
                  throw e;
              }
              currentWriteAddress.v = currentWriteAddress.v + 1 | 0;
            }

            break;
          default:throw Exception_init('Unrecognized label value type, line ' + (index_0 + 1 | 0));
        }
      }}
    return labelMap;
  };
  function Preprocess$memory$lambda(it) {
    return new UShort(-8531);
  }
  Preprocess.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Preprocess',
    interfaces: []
  };
  function Sim(memory) {
    this.control = new Control(memory);
  }
  Sim.prototype.runSimulation = function () {
    this.control.setupComponents();
    var logs = '';
    do {
      this.control.fetchCycle();
      var log = this.control.executeCycle().log;
      logs += log;
    }
     while (!contains(log, 'break'));
    return logs;
  };
  Sim.prototype.setupSimulator = function () {
    this.control.setupComponents();
  };
  Sim.prototype.stepInstruction = function () {
    this.control.fetchCycle();
    return this.control.executeCycle();
  };
  Sim.prototype.stepFetchCycle = function () {
    return this.control.fetchCycle();
  };
  Sim.prototype.stepExecuteCycle = function () {
    return this.control.executeCycle();
  };
  Sim.prototype.memoryWrite_1pe3u2$ = function (index, value) {
    Memory_getInstance().arr.set_1pe3u2$(index, value);
  };
  Sim.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sim',
    interfaces: []
  };
  function proceedWithZeros(targetLength, theHexString) {
    if (theHexString.length >= targetLength) {
      return theHexString;
    }var missingZeros = targetLength - theHexString.length | 0;
    return repeat('0', missingZeros) + theHexString;
  }
  Object.defineProperty(_, 'lineSelectStepDebug', {
    get: function () {
      return lineSelectStepDebug;
    },
    set: function (value) {
      lineSelectStepDebug = value;
    }
  });
  $$importsForInline$$['kotlin-react'] = $module$kotlin_react;
  Object.defineProperty(_, 'app', {
    get: function () {
      return app;
    }
  });
  _.buildDiagram_61zpoe$ = buildDiagram;
  _.showSimulation_mx3d83$ = showSimulation;
  _.refreshMemoryWindow_za3lpa$ = refreshMemoryWindow;
  _.syscallPrintInt_6hrhkk$ = syscallPrintInt;
  _.syscallPrintFloat_6hrhkk$ = syscallPrintFloat;
  _.syscallPrintString_6hrhkk$ = syscallPrintString;
  _.removeSyscallLogs = removeSyscallLogs;
  _.enableLogs_6taknv$ = enableLogs;
  _.areLogsEnabled = areLogsEnabled;
  _.enableLightMode_6taknv$ = enableLightMode;
  _.isLightMode = isLightMode;
  _.buildDiagramWithValues = buildDiagramWithValues;
  Object.defineProperty(_, 'DIAGRAM_FONT_SIZE', {
    get: function () {
      return DIAGRAM_FONT_SIZE;
    }
  });
  Object.defineProperty(_, 'diagramLinkColor', {
    get: function () {
      return diagramLinkColor;
    },
    set: function (value) {
      diagramLinkColor = value;
    }
  });
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  $$importsForInline$$['kotlin-styled'] = $module$kotlin_styled;
  Object.defineProperty(_, 'inputComponent', {
    get: function () {
      return inputComponent;
    }
  });
  _.toggleColorMode = toggleColorMode;
  _.getTextInEditor = getTextInEditor;
  _.changeColorOfALineInEditor_19mbxw$ = changeColorOfALineInEditor;
  _.changeAllLinesToBlackInEditor = changeAllLinesToBlackInEditor;
  _.changeMemoryWindowPage_za3lpa$ = changeMemoryWindowPage;
  _.setupMemoryContents_1n40sl$ = setupMemoryContents;
  _.updateMemoryWord_1pe3u2$ = updateMemoryWord;
  _.changePageInput_za3lpa$ = changePageInput;
  _.getPageNumberForAddress_za3lpa$ = getPageNumberForAddress;
  _.removeUpdateColoring = removeUpdateColoring;
  _.MemUpdate = MemUpdate;
  _.getFrontMemoryContents = getFrontMemoryContents;
  _.changeMemWindowVisibility_6taknv$ = changeMemWindowVisibility;
  _.resetMemory = resetMemory;
  _.scrollToLine_za3lpa$ = scrollToLine;
  _.showMemoryCellAsChanged_za3lpa$ = showMemoryCellAsChanged;
  Object.defineProperty(InputT, 'HEX', {
    get: InputT$HEX_getInstance
  });
  Object.defineProperty(InputT, 'ASM', {
    get: InputT$ASM_getInstance
  });
  Object.defineProperty(InputT, 'BIN', {
    get: InputT$BIN_getInstance
  });
  Object.defineProperty(InputT, 'Companion', {
    get: InputT$Companion_getInstance
  });
  _.InputT = InputT;
  Object.defineProperty(_, 'logger', {
    get: function () {
      return logger;
    }
  });
  _.main = main;
  Object.defineProperty(ACC_STATE, 'STORE', {
    get: ACC_STATE$STORE_getInstance
  });
  Object.defineProperty(ACC_STATE, 'LOAD', {
    get: ACC_STATE$LOAD_getInstance
  });
  Object.defineProperty(ACC_STATE, 'ALU_OP', {
    get: ACC_STATE$ALU_OP_getInstance
  });
  Object.defineProperty(ACC_STATE, 'JUMP', {
    get: ACC_STATE$JUMP_getInstance
  });
  var package$Sim = _.Sim || (_.Sim = {});
  package$Sim.ACC_STATE = ACC_STATE;
  Object.defineProperty(package$Sim, 'ACC', {
    get: ACC_getInstance
  });
  Object.defineProperty(ALU_OP, 'ADD', {
    get: ALU_OP$ADD_getInstance
  });
  Object.defineProperty(ALU_OP, 'SUBSTRACT', {
    get: ALU_OP$SUBSTRACT_getInstance
  });
  Object.defineProperty(ALU_OP, 'MULTIPLY', {
    get: ALU_OP$MULTIPLY_getInstance
  });
  Object.defineProperty(ALU_OP, 'DIVIDE', {
    get: ALU_OP$DIVIDE_getInstance
  });
  Object.defineProperty(ALU_OP, 'AND', {
    get: ALU_OP$AND_getInstance
  });
  Object.defineProperty(ALU_OP, 'OR', {
    get: ALU_OP$OR_getInstance
  });
  Object.defineProperty(ALU_OP, 'JMP', {
    get: ALU_OP$JMP_getInstance
  });
  Object.defineProperty(ALU_OP, 'JGE', {
    get: ALU_OP$JGE_getInstance
  });
  Object.defineProperty(ALU_OP, 'JNE', {
    get: ALU_OP$JNE_getInstance
  });
  Object.defineProperty(ALU_OP, 'LDI', {
    get: ALU_OP$LDI_getInstance
  });
  Object.defineProperty(ALU_OP, 'NONE', {
    get: ALU_OP$NONE_getInstance
  });
  package$Sim.ALU_OP = ALU_OP;
  Object.defineProperty(package$Sim, 'ALU', {
    get: ALU_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'ACC', {
    get: ACTION_BLOCK$ACC_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'ALU', {
    get: ACTION_BLOCK$ALU_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'CON', {
    get: ACTION_BLOCK$CON_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'IR', {
    get: ACTION_BLOCK$IR_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'MAR', {
    get: ACTION_BLOCK$MAR_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'MDR', {
    get: ACTION_BLOCK$MDR_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'MEM', {
    get: ACTION_BLOCK$MEM_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'PC', {
    get: ACTION_BLOCK$PC_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'MEMMDR', {
    get: ACTION_BLOCK$MEMMDR_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'MARMEM', {
    get: ACTION_BLOCK$MARMEM_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'MDRACC', {
    get: ACTION_BLOCK$MDRACC_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'ACCALU', {
    get: ACTION_BLOCK$ACCALU_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'ALUACC', {
    get: ACTION_BLOCK$ALUACC_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'MDRALU', {
    get: ACTION_BLOCK$MDRALU_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'MDRIR', {
    get: ACTION_BLOCK$MDRIR_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'IRMAR', {
    get: ACTION_BLOCK$IRMAR_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'IRCON', {
    get: ACTION_BLOCK$IRCON_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'PCMAR', {
    get: ACTION_BLOCK$PCMAR_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'IRPC', {
    get: ACTION_BLOCK$IRPC_getInstance
  });
  Object.defineProperty(ACTION_BLOCK, 'IRALU', {
    get: ACTION_BLOCK$IRALU_getInstance
  });
  package$Sim.ACTION_BLOCK = ACTION_BLOCK;
  Control.ProcessorStateChange = Control$ProcessorStateChange;
  Control.InstructionEffect = Control$InstructionEffect;
  Object.defineProperty(Control$SyscallTypes, 'PRINT_INT', {
    get: Control$SyscallTypes$PRINT_INT_getInstance
  });
  Object.defineProperty(Control$SyscallTypes, 'PRINT_FLOAT', {
    get: Control$SyscallTypes$PRINT_FLOAT_getInstance
  });
  Object.defineProperty(Control$SyscallTypes, 'PRINT_STRING', {
    get: Control$SyscallTypes$PRINT_STRING_getInstance
  });
  Object.defineProperty(Control$SyscallTypes, 'Companion', {
    get: Control$SyscallTypes$Companion_getInstance
  });
  Control.SyscallTypes = Control$SyscallTypes;
  package$Sim.Control = Control;
  package$Sim.HardwareBlock = HardwareBlock;
  Object.defineProperty(IR_STATE, 'MAR', {
    get: IR_STATE$MAR_getInstance
  });
  Object.defineProperty(IR_STATE, 'ALU', {
    get: IR_STATE$ALU_getInstance
  });
  Object.defineProperty(IR_STATE, 'PC', {
    get: IR_STATE$PC_getInstance
  });
  Object.defineProperty(IR_STATE, 'NONE', {
    get: IR_STATE$NONE_getInstance
  });
  package$Sim.IR_STATE = IR_STATE;
  Object.defineProperty(package$Sim, 'IR', {
    get: IR_getInstance
  });
  Object.defineProperty(package$Sim, 'MAR', {
    get: MAR_getInstance
  });
  Object.defineProperty(MDR_STATE, 'FETCH', {
    get: MDR_STATE$FETCH_getInstance
  });
  Object.defineProperty(MDR_STATE, 'STORE', {
    get: MDR_STATE$STORE_getInstance
  });
  Object.defineProperty(MDR_STATE, 'LOAD', {
    get: MDR_STATE$LOAD_getInstance
  });
  Object.defineProperty(MDR_STATE, 'ALU_OP', {
    get: MDR_STATE$ALU_OP_getInstance
  });
  package$Sim.MDR_STATE = MDR_STATE;
  Object.defineProperty(package$Sim, 'MDR', {
    get: MDR_getInstance
  });
  package$Sim.Main = Main;
  Object.defineProperty(package$Sim, 'Memory', {
    get: Memory_getInstance
  });
  Object.defineProperty(package$Sim, 'PC', {
    get: PC_getInstance
  });
  package$Sim.MemorySetupOutput = MemorySetupOutput;
  $$importsForInline$$['ktor-ktor-io-js-legacy'] = $module$ktor_ktor_io_js_legacy;
  package$Sim.Preprocess = Preprocess;
  package$Sim.Sim = Sim;
  _.proceedWithZeros_19mbxw$ = proceedWithZeros;
  simulator = new Main(InputT$ASM_getInstance());
  lineSelectStepDebug = 1;
  MAX_WORD_VAL = 65535;
  disable_logs = true;
  light_mode = true;
  isFetchNext = true;
  componentToValue = LinkedHashMap_init();
  app = fc(app$lambda);
  memoryContents = new UShortArray_init(Kotlin.fillArray(new Int16Array(4096), UShortArray$lambda(memoryContents$lambda)));
  WORDS_PER_PAGE = 128;
  currentMemoryPage = 1;
  DIAGRAM_FONT_SIZE = 30;
  diagramLinkColor = '#343a40';
  inputComponent = fc(inputComponent$lambda);
  logger = fc(logger$lambda);
  main();
  Kotlin.defineModule('confexplorer', _);
  return _;
}));

//# sourceMappingURL=confexplorer.js.map
