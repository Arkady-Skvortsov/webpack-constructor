import inquirer from "inquirer";
import { preset } from "./helpers/enum";
import { generateExtensions } from "./helpers/extensions";
import { questionResponse } from "./helpers/types";

async function contextAnswer() {
  return await inquirer.prompt({
    name: "question_context",
    type: "input",
    message:
      "What is the context would be in webpack config (example: ./src) ?",
    default: "./src",
  });
}

async function entryPointsAnswer(preset: preset, entrypoint: string) {
  return await inquirer.prompt({
    name: "entry_point",
    type: "input",
    message: `What is the entrypoint would be in webpack config (example: ${entrypoint}/main/${generateExtensions(
      preset
    )}) ?`,
  });
}

async function setAliasAnswer(context: string) {
  return await inquirer.prompt({
    name: "set_alias",
    type: "input",
    message: `What is the path for alias(es) would be in webpack config (example: ${context}/utils) ?`,
  });
}

async function isImagesAnswer() {
  return await inquirer.prompt({
    name: "is_images",
    type: "list",
    message: "Do you want to use images in you'r project ?",
    choices: ["Yes", "No"],
  });
}

async function isFontsAnswer() {
  return await inquirer.prompt({
    name: "is_fonts",
    type: "list",
    message: "Do you want to use fonts in you'r project ?",
    choices: ["Yes", "No"],
  });
}

async function isDevServerAnswer() {
  return await inquirer.prompt({
    name: "is_dev_server",
    type: "list",
    message: "Do you want to use DevServer in webpack ?",
    choices: ["Yes", "No"],
  });
}

async function isLazyLoading() {
  return await inquirer.prompt({
    name: "is_lazy_loading",
    type: "list",
    message: "Do you want to use lazy loading in webpack ?",
    choices: ["Yes", "No"],
  });
}

async function isAvoidErrorStyles() {
  return await inquirer.prompt({
    name: "is_avoid_error_styles",
    type: "list",
    message: "Do you want to use avoid error for styles ?",
    choices: ["Yes", "No"],
  });
}

async function isCacheWebpack() {
  return await inquirer.prompt({
    name: "cache_webpack",
    type: "list",
    message: "Do you want to use cache in webpack ?",
    choices: ["Yes", "No"],
  });
}

async function splitChunksWebpack() {
  return await inquirer.prompt({
    name: "split_chinks_webpack",
    type: "list",
    message: "",
  });
}

async function supportFromCoffeScriptAnswer() {
  return await inquirer.prompt({
    name: "question_coffe_script",
    type: "list",
    message: "Do you want to support CoffeScript ?",
    choices: ["Yes", "No"],
  });
}

async function isCopyStaticFiles() {
  return await inquirer.prompt({
    name: "is_copy_static_files",
    type: "list",
    message: "Do you want copy ready catalogs/files in build folders ",
    choices: ["Yes", "No"],
  });
}

async function setFilesCatalogesCopy(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "set_files_cataloges_copy",
        type: "input",
        message: "What is files do you want that be copied in build catalog ?",
      })
    : void 0;
}

async function setFilesForIgnore(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "set_files_for_ignore",
        type: "input",
        message: "What is the files do you want to ignore ?",
      })
    : void 0;
}

async function isIgnoreSomeFilesWatchMode() {
  return await inquirer.prompt({
    name: "is_ignore_some_files_watch_mode",
    type: "list",
    message: "Do you want to set files, which would be ignored in watch mode ?",
    choices: ["Yes", "No"],
  });
}

async function setFilesForIgnoreInWatchMode() {
  return await inquirer.prompt({
    name: "set_files_for_ignore_in_watch_mode",
    type: "input",
    message: "What is the files do you want to ignore in watch mode ?",
  });
}

async function isHtmlPreprocessorAnswer() {
  return await inquirer.prompt({
    name: "question_is_html_preprocessor",
    type: "list",
    message: "Do you want to support by html preprocessor(s) ?",
    choices: ["Yes", "No"],
  });
}

async function htmlPreprocessorsAnswer(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_html_preprocessor",
        type: "checkbox",
        message: "What is html preprocessor(s) do you want to use ?",
        choices: ["Pug", "Jade", "EJS", "HandleBars"],
      })
    : void 0;
}

async function isSplitBundlesThroughDLL() {
  return await inquirer.prompt({
    name: "question_is_split_bundles_dll",
    type: "list",
    message: "Do you want to split bundles through DLL ?",
    choices: ["Yes", "No"],
  });
}

async function contextSplitBundlesThroughDLL(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_context_split_bundles_dll",
        type: "input",
        message:
          "What is the context would be for bundle for DLL (example: ./src) ?",
      })
    : void 0;
}

async function pathToManifestForDLL(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_path_to_manifest_dll",
        type: "input",
        message:
          "What is the path to manifest for DLL (example: ./src/manifest.json) ?",
      })
    : void 0;
}

async function isDiscoverPreviousCompilation() {
  return await inquirer.prompt({
    name: "question_discover_previous_compilation",
    type: "list",
    message:
      "Do you want to discover all modules from the previous compilation upfront while watching for changes, trying to improve the incremental build times. ",
    choices: ["Yes", "No"],
  });
}

async function isCssPreprocessorsAnswer() {
  return await inquirer.prompt({
    name: "question_is_css_preprocessor",
    type: "list",
    message: "Do you want to support by css preprocessor(s) ?",
    choices: ["Yes", "No"],
  });
}

async function cssPreprocessors(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_css_preprocessor",
        type: "checkbox",
        message: "What is css preprocessor(s) do you want to use ?",
        choices: ["(Sass/Scss)", "Less", "PostCSS", "Stylus"],
      })
    : void 0;
}

async function isImageExtensionAnswer() {
  return await inquirer.prompt({
    name: "question_is_image_extensions",
    type: "list",
    message: "Do you want to use images in your project ?",
    choices: ["Yes", "No"],
  });
}

async function imageExtensions(response: "yes" | "no") {
  return response === "yes"
    ? await inquirer.prompt({
        name: "question_image_extensions",
        type: "checkbox",
        message: "What is the image extension(s) do you want to use ?",
        choices: [".png", ".jpeg", ".jpg", ".svg", ".gif", ".webp"],
      })
    : void 0;
}

async function isFontsExtensionAnswer() {
  return await inquirer.prompt({
    name: "question_is_font_extensions",
    type: "list",
    message: "Do you want to use fonts in your project ?",
    choices: ["Yes", "No"],
  });
}

async function fontsExtensions(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_fonts_extensions",
        type: "checkbox",
        message: "What is fonts extension(s) do you want to use ?",
        choices: [".woff", ".ttf", ".eot", ".svg", ".otf"],
      })
    : void 0;
}

async function chooseStaticFilesLoader(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "choose_static_files_loader",
        type: "list",
        message: "Whaat is loader you want to choose for static files ?",
        choices: ["file-loader", "url-loader", "raw-loader"],
      })
    : void 0;
}

async function isXmlExtension() {
  return await inquirer.prompt({
    name: "question_xml_exension",
    type: "list",
    message: "Do you want to use .xml extension ?",
    choices: ["Yes", "No"],
  });
}

async function isYamlExtension() {
  return await inquirer.prompt({
    name: "question_yaml_extension",
    type: "list",
    message: "Do you want to use .yaml extension ?",
    choices: ["Yes", "No"],
  });
}

async function isCsvExtension() {
  return await inquirer.prompt({
    name: "question_csv_extension",
    type: "list",
    message: "Do you want to use .csv extension ?",
    choices: ["Yes", "No"],
  });
}

async function isPwaSupport() {
  return await inquirer.prompt({
    name: "question_build_pwa",
    type: "list",
    message: "Do you want to build pwa ?",
    choices: ["Yes", "No"],
  });
}

async function isSplittingChunks() {
  return await inquirer.prompt({
    name: "question_is_splitting_chunks",
    type: "list",
    message: "Do you want to split chunk ?",
    choices: ["Yes", "No"],
  });
}

async function addingBannerToChunk(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_adding_banner_to_chunk",
        type: "list",
        message: "Do you want to adding banner to chunk ?",
        choices: ["Yes", "No"],
      })
    : void 0;
}

async function isClosureLibrary() {
  return await inquirer.prompt({
    name: "question_closure_library",
    type: "list",
    message: "Do you want to adding support by Closure Library ?",
    choices: ["Yes", "No"],
  });
}

async function isEnvironmentVariables() {
  return await inquirer.prompt({
    name: "question_environment_variables",
    type: "list",
    message: "Do you want to use environment variables in webpack ?",
    choices: ["Yes", "No"],
  });
}

async function setEnvironmentVariables(response: questionResponse) {
  return response === "Yes"
    ? {
        name: await inquirer.prompt({
          name: "set_environment_names",
          type: "input",
          message:
            "What is name would be for environment variable (example: PG_DB PG_PORT) ?",
        }),
        value: await inquirer.prompt({
          name: "set_environment_values",
          type: "input",
          message:
            "What is value would be for environment variable (example: )",
        }),
      }
    : void 0;
}

async function isLocalizeAnswer() {
  return await inquirer.prompt({
    name: "question_is_localize",
    type: "list",
    message: "Do you want to localize in your application ?",
    choices: ["Yes", "No"],
  });
}

async function isHMRAnswer() {
  return await inquirer.prompt({
    name: "question_is_hmr",
    type: "list",
    message: "Do you want to enable HMR(Hot module replacement) in webpack ?",
    choices: ["Yes", "No"],
  });
}

async function setLocalizeDetails(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_set_localize_details",
        type: "input",
        message:
          "What is the languages do you want to use (example: RU EN FR) ?",
      })
    : void 0;
}

async function isMinimumChunkSize(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_is_minimum_chunk_size",
        type: "list",
        message: "Do you want to set minimum chunk size ?",
        choices: ["Yes", "No"],
      })
    : void 0;
}

async function isMaximumChunkSize(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_is_maximum_chunk_size",
        type: "list",
        message: "Do you want to set maximum chunk size ?",
        choices: ["Yes", "No"],
      })
    : void 0;
}

async function isCompressionAnswer() {
  return await inquirer.prompt({
    name: "question_is_compression_answer",
    type: "list",
    message: "Do you want to compress webpack ?",
    choices: ["Yes", "No"],
  });
}

async function isGlobalVariableAnswer() {
  return await inquirer.prompt({
    name: "question_is_global_variable_answer",
    type: "list",
    message: "Do you want to have a global variables in your project ?",
    choices: ["Yes", "No"],
  });
}

async function setGlobalVariableName(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_set_global_variable_name",
        type: "input",
        message:
          "What is the name(s) do you want for you variable(s) (example: PRODUCTION BROWSER_SUPPORTS_HTML5) ?",
      })
    : void 0;
}

async function setGlobalVariableValue(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_set_global_variable_value",
        type: "input",
        message:
          "What is the value(s) do you want for you variable(s) (example: true true) ?",
      })
    : void 0;
}

async function setLevelRatioCompression(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_set_level_ratio_compression",
        type: "list",
        message: "What is ratio level do you want to set for compression ?",
        choices: [
          "0",
          "0.1",
          "0.2",
          "0.3",
          "0.4",
          "0.5",
          "0.6",
          "0.7",
          "0.8",
          "0.9",
          "1",
        ],
      })
    : void 0;
}

async function isCreateChromeProfileFile() {
  return await inquirer.prompt({
    name: "question_is_create_chrome_profile_file",
    type: "list",
    message: "Do you want to create Chrome profile file ?",
    choices: ["Yes", "No"],
  });
}

async function isIgnoreSomeFiles() {
  return await inquirer.prompt({
    name: "question_is_ignore_some_files",
    type: "list",
    message: "Do you want to ignore some files ?",
    choices: ["Yes", "No"],
  });
}

async function isIntegrationInstrument() {
  return await inquirer.prompt({
    name: "question_is_integration",
    type: "list",
    message:
      "Do you want some integration with instruments(like: Gulp) in webpack ?",
    choices: ["Yes", "No"],
  });
}

async function compressionLevel(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_compression_level",
        type: "list",
        message: "What is the level for compression do you want to choose ?",
        choices: ["1", "2", "3", "4"],
      })
    : void 0;
}

async function staticLoader() {
  return await inquirer.prompt({
    name: "question_static_loader",
    type: "list",
    message: "What is the loader for static files do you want to use ?",
    choices: ["Yes", "No"],
  });
}

async function setMinimumChunkSize(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_minimum_chunk_size",
        type: "input",
        message: "What is the minimum chunk size would be (example: 1024) ?",
      })
    : void 0;
}

async function setMaximumChunkSize(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_maximum_chunk_size",
        type: "input",
        message: "What is the maximum chunk size would be (example: 1024) ?",
      })
    : void 0;
}

async function integrationInstruments(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_integration_instrument",
        type: "list",
        message: "What is integration do you want ?",
        choices: ["Gulp", "Grunt", "Mocha", "Karma"],
      })
    : void 0;
}

async function outputDir() {
  return await inquirer.prompt({
    name: "question_output_dir",
    type: "input",
    message:
      "What is the folder do you want, that be an output (default: ./dist)",
    default: "./dist",
  });
}

export {
  integrationInstruments,
  outputDir,
  splitChunksWebpack,
  staticLoader,
  supportFromCoffeScriptAnswer,
  entryPointsAnswer,
  isYamlExtension,
  imageExtensions,
  isPwaSupport,
  isAvoidErrorStyles,
  isDevServerAnswer,
  isFontsAnswer,
  isImagesAnswer,
  isLazyLoading,
  fontsExtensions,
  htmlPreprocessorsAnswer,
  isXmlExtension,
  isCacheWebpack,
  contextAnswer,
  cssPreprocessors,
  isCsvExtension,
  isCssPreprocessorsAnswer,
  isHtmlPreprocessorAnswer,
  isImageExtensionAnswer,
  isFontsExtensionAnswer,
  isSplitBundlesThroughDLL,
  contextSplitBundlesThroughDLL,
  pathToManifestForDLL,
  isDiscoverPreviousCompilation,
  isSplittingChunks,
  addingBannerToChunk,
  isClosureLibrary,
  isEnvironmentVariables,
  isCopyStaticFiles,
  setFilesCatalogesCopy,
  setEnvironmentVariables,
  isLocalizeAnswer,
  isHMRAnswer,
  chooseStaticFilesLoader,
  setLocalizeDetails,
  isMinimumChunkSize,
  isMaximumChunkSize,
  isCompressionAnswer,
  isGlobalVariableAnswer,
  setGlobalVariableName,
  setGlobalVariableValue,
  setLevelRatioCompression,
  isCreateChromeProfileFile,
  isIgnoreSomeFiles,
  isIntegrationInstrument,
  compressionLevel,
  setMaximumChunkSize,
  setMinimumChunkSize,
  setAliasAnswer,
  setFilesForIgnore,
  setFilesForIgnoreInWatchMode,
  isIgnoreSomeFilesWatchMode,
};
