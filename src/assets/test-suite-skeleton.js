// Please note making changes to the styles here might make some of the project
// tests no longer work, or even just give a false positive. Especially if you
// change a selector name.
// The project tests generally try to filter out any CSS selectors that
// contain 'fcc_test', or that contain 'mocha'. So please make sure the
// selectors here use that naming convention.
// See the following project tests which rely on filtering out the CSS rules
// used here. If you find other project tests that rely on the CSS here,
// please add them to the list:
// - styleSheetUtils.js
// - product-landing-page-tests.js

const testSuiteSkeleton = `
  <div id="fcc_test_suite_indicator_wrapper"></div>
  <div id="fcc_foldout_toggler">
    <span id="hamburger_top" class="fcc_hamburger transform_top"></span>
    <span id="hamburger_middle" class="fcc_hamburger transform_middle"></span>
    <span id="hamburger_bottom" class="fcc_hamburger transform_bottom"></span>
  </div>
  <input id="toggle" onclick="FCC_Global.hamburgerTransform()" type="checkbox"
    title="CTRL + SHIFT + O">
  <div id="fcc_foldout_menu">
    <div id="fcc_foldout_menu_inner">
      <label for="test-suite-selector">Select Test Suite: </label>
      <select name="Test Suite Selector" id="test-suite-selector"
        onchange="FCC_Global.selectProject(this.value)">
        <option id="placeholder" value="">- - -</option>
        <option value="tribute-page">Tribute Page</option>
        <option value="portfolio">Personal Portfolio</option>
        <option value="survey-form">Survey Form</option>
        <option value="product-landing-page">Product Landing Page</option>
        <option value="technical-docs-page">Technical Documentation Page
        </option>
        <option value="random-quote-machine">Random Quote Machine</option>
        <option value="markdown-previewer">Markdown Previewer</option>
        <option value="drum-machine">Drum Machine</option>
        <option value="pomodoro-clock">Pomodoro Clock</option>
        <option value="javascript-calculator">Javascript Calculator</option>
        <option value="bar-chart">D3: Bar Chart</option>
        <option value="scatter-plot">D3: Scatter Plot</option>
        <option value="heat-map">D3: Heat Map</option>
        <option value="choropleth">D3: Choropleth</option>
        <option value="tree-map">D3: Tree Map</option>
      </select>
      <button id="fcc_test_message-box-rerun-button" type="button"
        class="fcc_foldout_buttons" title="CTRL + SHIFT + ENTER"
        onclick="FCC_Global.FCCRerunTests()">
        Run Tests
      </button>
      <button id="fcc_test_button" type="button"
        class="fcc_foldout_buttons fcc_test_btn-default"
        title="CTRL + SHIFT + T" onclick="FCC_Global.FCCOpenTestModal()">
        Tests
      </button>
      <div id="fcc_legend_wrapper">
        <div class="fcc_legend key"></div>
        <span class="fcc_legend">Test(s) Failed</span>
        <div class="fcc_legend key"></div>
        <span class="fcc_legend">Tests Passed</span>
        <div class="fcc_legend key"></div>
        <span class="fcc_legend">Tests Executing</span>
      </div>
      <span id="fcc_report-bug"><a
        href="https://github.com/freeCodeCamp/testable-projects-fcc/issues/new"
        target="_blank">Report Bug</a>
      </span>
    </div>
  </div>
  <div id="fcc_test_message-box" class="fcc_test_message-box-hidden"
    onclick="FCC_Global.FCCclickOutsideToCloseModal(event)">
    <div class="fcc_test_message-box-content">
      <div class="fcc_test_message-box-header">
        <div class="title">Unit tests</div>
      </div>
      <div class="fcc_test_message-box-body">
        <div id="mocha">Run Test Suite to See Unit Tests!</div>
      </div>
      <div class="fcc_test_message-box-footer">
        <div class="fcc_test_message-box-close-btn"
          onclick="FCC_Global.FCCCloseTestModal()">Close</div>
      </div>
    </div>
  </div>`;

export default testSuiteSkeleton;