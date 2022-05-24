#!/usr/bin/env node

import inquirer from "inquirer";
import { preset } from "./helpers/enum";
import { generateExtensions } from "./helpers/extensions";
import { cacheType, linterChoose, questionResponse } from "./helpers/types";

async function basicChoose() {
  return await inquirer.prompt({
    name: "question_basic_choose",
    type: "list",
    message: "Are you want a basic preset or you want to create a custom?",
    choices: ["Preset", "Custom"],
  });
}

async function chooseBasicPreset() {
  return await inquirer.prompt({
    name: "question_choose_basic_preset",
    type: "list",
    message: "What do you want to choose from presets?",
    choices: ["Vue", "React", "Svelte", "Typescript", "Javascript"],
  });
}

async function chooseWebpackVersion() {
  return await inquirer.prompt({
    name: "question_webpack_version",
    type: "list",
    message: "What is the version of webpack do you want to use?",
    choices: ["4", "5"],
  });
}

async function chooseWebpackMode() {
  return await inquirer.prompt({
    name: "question_is_webpack_mode",
    type: "list",
    message: "What is the development mode do you want for webpack ?",
    choices: ["development", "production"],
  });
}

async function contextAnswer() {
  return await inquirer.prompt({
    name: "question_context",
    type: "input",
    message:
      "What is the context would be in webpack config (example: ./src) ?",
    default: "./src",
  });
}

async function entryPointsAnswer(
  preset: preset,
  entrypoint: string,
  subType: linterChoose
) {
  return await inquirer.prompt({
    name: "entry_point",
    type: "input",
    message: `What is the entrypoint would be in webpack config (example: ${entrypoint}/main${generateExtensions(
      preset,
      subType
    )}) ?`,
  });
}

async function checkPresetTsConfig(preset: preset) {
  return preset === "Typescript"
    ? {
        tslintFilePath: await inquirer.prompt({
          name: "question_check_preset_ts_config",
          type: "input",
          message:
            "What is the path to you'r tslint.json file (default: ./tslint.json)?",
          default: "./tslint.json",
        }),
      }
    : void 0;
}

async function checkPresetFrameworkConfig(preset: preset) {
  return ["Vue", "React", "Svelte"].includes(preset)
    ? {
        langForFramework: await inquirer.prompt({
          name: "question_preset_framework_config",
          type: "list",
          message:
            "What is the language you want to select for that framework ?",
          choices: ["Javascript", "Typescript"],
        }),
      }
    : void 0;
}

async function checkPresetHTML(preset: preset, text: any) {
  return !["React", "Vue", "Svelte"].includes(preset)
    ? {
        htmlTitle: await inquirer.prompt({
          name: "question_preset_html",
          type: "input",
          message:
            "What is the title do you want in html page (example: Hello world) ?",
          default: "Hello world",
        }),
        htmlTemplate: await inquirer.prompt({
          name: "question_7",
          type: "input",
          message: `What is the html template would be in webpack config (example: ${text}/main.html) ?`,
        }),
      }
    : void 0;
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

async function isCopyPlugin() {
  return await inquirer.prompt({
    name: "question_is_copy_plugin",
    type: "list",
    message:
      "Do you want to copy individual files or entire directories, which already exist to the build directory ?",
    choices: ["Yes", "No"],
  });
}

async function isCleanPlugin() {
  return await inquirer.prompt({
    name: "question_is_clean_plugin",
    type: "list",
    message:
      "Do you want that all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild would be removed ?",
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

async function supportSplitBundlesThroughDLL(response: questionResponse) {
  return response === "Yes"
    ? {
        name: await inquirer.prompt({
          name: "question_context_split_bundles_dll",
          type: "input",
          message:
            "What is the name would be for bundle for DLL (example: bundle) ?",
        }),
        path: await inquirer.prompt({
          name: "question_path_to_files",
          type: "input",
          message: "What is the path to files for DLL (example: ./src)",
        }),
        manifest: await inquirer.prompt({
          name: "question_path_to_manifest_dll",
          type: "input",
          message:
            "What is the path to manifest for DLL (example: ./src/manifest.json) ?",
        }),
      }
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

async function imageExtensions(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_image_extensions",
        type: "checkbox",
        message: "What is the image extension(s) do you want to use ?",
        choices: [".png", ".jpeg", ".jpg", ".svg", ".gif", ".webp"],
      })
    : void 0;
}

async function imagesOutDir(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_images_dir",
        type: "input",
        message:
          "What is the directory would be an output for images (example: ./src/images) ?",
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

async function isCachingSupport() {}

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

async function fontsOutDir(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_fonts_dir",
        type: "input",
        message:
          "What is the directory would be an output for fonts (example: ./src/fonts) ?",
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
            "What is value would be for environment variable (example: mydatabase 5423)",
        }),
      }
    : void 0;
}

async function isLinter() {
  return await inquirer.prompt({
    name: "question_set_linter_support",
    type: "list",
    message: "Do you want to support a linter in you'r project ?",
    choices: ["Yes", "No"],
  });
}

async function isLinterType(response: questionResponse, type: linterChoose) {
  return type === "Typescript" ? setUpTsLint() : setUpEslint(response);
}

async function setUpEslint(response: questionResponse) {
  return response === "Yes"
    ? {
        context: await inquirer.prompt({
          name: "question_is_context",
          type: "input",
          message:
            "What is the root would be for eslint(example: ./src/utils)?",
        }),
        eslintPath: await inquirer.prompt({
          name: "question_is_eslint_path",
          type: "input",
          message:
            "What is the path to eslint instance that would be used for linting (default: eslint)?",
          default: "eslint",
        }),
        extensions: await inquirer.prompt({
          name: "question_eslint_extensions",
          type: "input",
          message:
            "What is the specify files and/or directories to exclude(example: node_modules file.js file2.js)?",
        }),
        exclude: await inquirer.prompt({
          name: "question_is_exclude",
          type: "input",
          message:
            "What is the specify files and/or directories to exclude(example: node_modules file.js file2.js)?",
        }),
        files: await inquirer.prompt({
          name: "question_is_files",
          type: "input",
          message:
            "What is the specify directories, files, or globs would be (example: ./src/utils)?",
        }),
        fix: await inquirer.prompt({
          name: "question_is_fix",
          type: "list",
          message: "Be careful: this option will change source files",
          choices: ["Yes", "No"],
        }),
        linDirtyModulesOnly: await inquirer.prompt({
          name: "question_is_lin_dirty_modules_only",
          type: "list",
          message:
            "Do you want to lint only changed files, skip lint on start ?",
          choices: ["Yes", "No"],
        }),
        threads: await inquirer.prompt({
          name: "question_is_threads",
          type: "input",
          message:
            "What is the pool size would be for run lint tasks across thread pool (example: 2) ?",
        }),
        emitError: await inquirer.prompt({
          name: "question_is_emit_error",
          type: "list",
          message: "Do you want, that errors found will always be emitted ?",
          choices: ["Yes", "No"],
        }),
        emitWarning: await inquirer.prompt({
          name: "question_is_emit_warning",
          type: "list",
          message: "Do you want, that warnings found will always be emitted ?",
          choices: ["Yes", "No"],
        }),
        failOnError: await inquirer.prompt({
          name: "question_is_fail_on_error",
          type: "list",
          message:
            "Do you want, that will cause the module build to fail if there are any errors ?",
          choices: ["Yes", "No"],
        }),
        failOnWarning: await inquirer.prompt({
          name: "question_is_fail_on_warning",
          type: "list",
          message:
            "Do you want, that will cause the module build to fail if there are any warnings ?",
          choices: ["Yes", "No"],
        }),
        quit: await inquirer.prompt({
          name: "question_is_quit",
          type: "list",
          message:
            "Do you want, that will process and report erros only and ignore warnings ?",
          choices: ["Yes", "No"],
        }),
      }
    : void 0;
}

async function isHashModulePath() {
  return await inquirer.prompt({
    name: "question_is_hash_module_path",
    type: "list",
    message:
      "Do you want to cause hashes to be based on the relative path of the module, generating a four character string as the module id ?",
    choices: ["Yes", "No"],
  });
}

async function hashModuleIdsSupport(response: questionResponse) {
  return response === "Yes"
    ? {
        context: await inquirer.prompt({
          name: "question_is_context",
          type: "input",
          message:
            "What is the context directory(absolute path) would be for creating names ?",
        }),
        hashFunction: await inquirer.prompt({
          name: "question_is_hash_algorithm",
          type: "input",
          message:
            "What is the hashing algorithm would be to use (defaut: md4) ?",
          default: "md4",
        }),
        hashDigest: await inquirer.prompt({
          name: "question_is_hash_digest",
          type: "input",
          message:
            "What is the encoding to use when generating the hash (default: base64) ?",
          default: "base64",
        }),
        hashDigestLength: await inquirer.prompt({
          name: "question_is_hash_digest_list",
          type: "input",
          message:
            "What is the prefix length of the hash digest to use (default: 4) ?",
          default: "4",
        }),
      }
    : void 0;
}

async function setUpTsLint() {}

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

async function setGlobalVariable(response: questionResponse) {
  return response === "Yes"
    ? {
        name: await inquirer.prompt({
          name: "question_set_global_variable_name",
          type: "input",
          message:
            "What is the name(s) do you want for you variable(s) (example: PRODUCTION BROWSER_SUPPORTS_HTML5) ?",
        }),
        value: await inquirer.prompt({
          name: "question_set_global_variable_value",
          type: "input",
          message:
            "What is the value(s) do you want for you variable(s) (example: true true) ?",
        }),
      }
    : void 0;
}

async function cacheTypeOptions(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_cache_type",
        type: "list",
        message: "What is the cache type would be ?",
        choices: ["memory", "filesystem"],
      })
    : void 0;
}

async function ChooseCacheOptions(cacheType: cacheType) {
  return cacheType === "filesystem"
    ? {
        cacheType: cacheType,
        name: await inquirer.prompt({
          name: "question_cache_name",
          type: "input",
          message: "What is the name would be a cache (example: someCache) ?",
        }),
        allowCollectingMemory: await inquirer.prompt({
          name: "question_allow_collecting_memory",
          type: "list",
          message:
            "Do you want to collect unused memory allocated during deserialization ?",
          choices: ["Yes", "No"],
        }),
        cacheDirectory: await inquirer.prompt({
          name: "question_cache_directory",
          type: "input",
          message:
            "What is the path to cache directory would be (example: ./src/cache) ?",
        }),
        cacheLocation: await inquirer.prompt({
          name: "question_cache_location",
          type: "input",
          message:
            "What is the location of cache would be (example: ./src/cache/name_of_cache) ?",
        }),
        compression: await inquirer.prompt({
          name: "question_cache_compression",
          type: "list",
          message: "What is the cache compression would be ?",
          choices: ["gzip", "brotli"],
        }),
        hashAlgorithm: await inquirer.prompt({
          name: "question_cache_hash_algorithm",
          type: "input",
          message:
            "What is the hash algorithm would be for cache (example: sha256)?",
        }),
        idleTimeout: await inquirer.prompt({
          name: "question_cache_idle_timeout",
          type: "input",
          message:
            "What is the period of time after which the cache should be saved (example: 10) ?",
        }),
        idleTimeoutAfterLargeChanges: await inquirer.prompt({
          name: "question_cache_idle_timeout_after_large_changes",
          type: "input",
          message:
            "What is the time period after which the cache storing should happen when larger changes have been detected (example: 200) ?",
        }),
        idleTimeoutForInitialStore: await inquirer.prompt({
          name: "question_cache_idle_timeout_for_initial_store",
          type: "input",
          message:
            " is the time period after which the initial cache storing should happen (example: 200) ?",
        }),
        maxAge: await inquirer.prompt({
          name: "question_cache_max_age",
          type: "input",
          message:
            "What is the amount of time, in milliseconds, that unused cache entries can remain in the filesystem cache(the default is one month) ?",
        }),
        maxMemoryGenerations: await inquirer.prompt({
          name: "question_cache_memory_generations",
          type: "list",
          message:
            "What will be the lifetime of unused cache entries in memory cache?",
          choices: ["0", "1", "10"],
        }),
        profile: await inquirer.prompt({
          name: "question_cache_profile",
          type: "list",
          message:
            "Do you want to track and log detailed timing information for individual cache items ?",
          choices: ["Yes", "No"],
        }),
        store: await inquirer.prompt({
          name: "question_cache_store",
          type: "list",
          message:
            "Do you want to store data when the compiler is idle in one file for all cached items ?",
          choices: ["Yes", "No"],
        }),
        version: await inquirer.prompt({
          name: "question_cache_version",
          type: "input",
          message:
            "What version of the data cache will be? (details: different versions do not allow cache reuse and override existing content. Update the version if the configuration is changed in such a way that it does not allow cache reuse. This will invalidate the cache)",
        }),
      }
    : cacheType === "memory"
    ? {
        maxGenerations: await inquirer.prompt({
          name: "question_cache_max_generations",
          type: "list",
          message:
            "What will be the lifetime of unused cache entries in memory cache?",
          choices: ["1", "Infinity"],
        }),
      }
    : void 0;
}

async function setCompressionOptions(response: questionResponse) {
  return response === "Yes"
    ? {
        ratio: await inquirer.prompt({
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
        }),
        compressionLevel: await inquirer.prompt({
          name: "question_compression_level",
          type: "list",
          message: "What is the level for compression do you want to choose ?",
          choices: ["1", "2", "3", "4"],
        }),
        threshold: await inquirer.prompt({
          name: "question_threshold_level",
          type: "input",
          message:
            "How many threshold would be for compression (example: 5320) ?",
        }),
      }
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

async function chooseStaticFilesLoader(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_is_choose_static_loader",
        type: "list",
        message: "What is the static files loader do you want to choose ?",
        choices: ["file-loader", "url-loader", "raw-loader"],
      })
    : void 0;
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

async function staticLoader() {
  return await inquirer.prompt({
    name: "question_static_loader",
    type: "list",
    message: "Do you want to use loader for static files ?",
    choices: ["Yes", "No"],
  });
}

async function setMinimumChunkSize(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_minimum_chunk_size",
        type: "input",
        message: "What is the minimum chunk size would be (example: 800) ?",
      })
    : void 0;
}

async function setMaximumChunkSize(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_maximum_chunk_size",
        type: "input",
        message: "What is the maximum chunk size would be (example: 2400) ?",
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

async function fontsDir(response: questionResponse) {
  return response === "Yes"
    ? await inquirer.prompt({
        name: "question_fonts_dir",
        type: "input",
        message: `What is the folder do you want, that be an output for fonts ?`,
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

async function devServerPort() {
  return await inquirer.prompt({
    name: "question_dev_server_port",
    type: "input",
    message: "What is the port would be in Dev Server (default: 3500) ?",
    default: 3500,
  });
}

async function isMinifyJSONFiles() {
  return await inquirer.prompt({
    name: "question_is_minify_json_files",
    type: "list",
    message: "If you have a .json files, than you want to minimize them ?",
    choices: ["Yes", "No"],
  });
}

async function chooseWatchFiles(port: any) {
  return await inquirer.prompt({
    name: "question_13",
    type: "input",
    message: `What is the folder with files do you want to watch for changes with starting devServer (example: ${port}/html) ?`,
    default: `${port}/html`,
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
  isMinifyJSONFiles,
  isLinter,
  isLinterType,
  setUpEslint,
  isHashModulePath,
  hashModuleIdsSupport,
  setUpTsLint,
  isPwaSupport,
  basicChoose,
  isAvoidErrorStyles,
  cacheTypeOptions,
  ChooseCacheOptions,
  chooseWatchFiles,
  devServerPort,
  fontsDir,
  checkPresetTsConfig,
  chooseBasicPreset,
  chooseWebpackVersion,
  chooseWebpackMode,
  checkPresetHTML,
  checkPresetFrameworkConfig,
  isDevServerAnswer,
  isFontsAnswer,
  isImagesAnswer,
  isLazyLoading,
  fontsExtensions,
  htmlPreprocessorsAnswer,
  isXmlExtension,
  isCacheWebpack,
  imagesOutDir,
  contextAnswer,
  cssPreprocessors,
  isCsvExtension,
  isCssPreprocessorsAnswer,
  isHtmlPreprocessorAnswer,
  isImageExtensionAnswer,
  isFontsExtensionAnswer,
  isSplitBundlesThroughDLL,
  supportSplitBundlesThroughDLL,
  isDiscoverPreviousCompilation,
  isSplittingChunks,
  fontsOutDir,
  isCopyPlugin,
  isCleanPlugin,
  addingBannerToChunk,
  isClosureLibrary,
  chooseStaticFilesLoader,
  isEnvironmentVariables,
  isCopyStaticFiles,
  setFilesCatalogesCopy,
  setEnvironmentVariables,
  isLocalizeAnswer,
  isHMRAnswer,
  setLocalizeDetails,
  isMinimumChunkSize,
  isMaximumChunkSize,
  isCompressionAnswer,
  isGlobalVariableAnswer,
  setGlobalVariable,
  setCompressionOptions,
  isCreateChromeProfileFile,
  isIgnoreSomeFiles,
  isIntegrationInstrument,
  setMaximumChunkSize,
  setMinimumChunkSize,
  setAliasAnswer,
  setFilesForIgnore,
  setFilesForIgnoreInWatchMode,
  isIgnoreSomeFilesWatchMode,
};
