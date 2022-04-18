import inquirer from "inquirer";
import { basicTypes, version, webpackMode } from "./helpers/types";
import { start } from "./start";
import { preset } from "./helpers/enum";
import { generateWebpackConfig } from "./webpack-set.content";
import { addContentToPreset } from "./add-content-preset";
import {
  addingBannerToChunk,
  setCompressionOptions,
  contextAnswer,
  cssPreprocessors,
  entryPointsAnswer,
  fontsExtensions,
  chooseStaticFilesLoader,
  htmlPreprocessorsAnswer,
  imageExtensions,
  integrationInstruments,
  isAvoidErrorStyles,
  isCacheWebpack,
  isClosureLibrary,
  isCompressionAnswer,
  isCopyStaticFiles,
  isCreateChromeProfileFile,
  isCssPreprocessorsAnswer,
  isCsvExtension,
  isDevServerAnswer,
  isDiscoverPreviousCompilation,
  isEnvironmentVariables,
  isFontsAnswer,
  isGlobalVariableAnswer,
  isHMRAnswer,
  isHtmlPreprocessorAnswer,
  isIgnoreSomeFiles,
  isImageExtensionAnswer,
  isIntegrationInstrument,
  isLazyLoading,
  isLocalizeAnswer,
  isPwaSupport,
  isSplitBundlesThroughDLL,
  isSplittingChunks,
  isXmlExtension,
  isYamlExtension,
  outputDir,
  setAliasAnswer,
  setEnvironmentVariables,
  setFilesCatalogesCopy,
  setGlobalVariable,
  setLocalizeDetails,
  setMaximumChunkSize,
  setMinimumChunkSize,
  supportFromCoffeScriptAnswer,
  supportSplitBundlesThroughDLL,
  staticLoader,
  isCopyPlugin,
  isCleanPlugin,
  fontsOutDir,
} from "./answers";
import { addContentToCustom } from "./add-content-custom";

async function firstChoose() {
  await start();

  const basicChoose = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "Are you want a basic preset or you want to create a custom?",
    choices: ["Preset", "Custom"],
  });

  await choosePreset(basicChoose.question_1);
}

async function choosePreset(type: basicTypes) {
  const presetChoose = await inquirer.prompt({
    name: "question_2",
    type: "list",
    message: "What do you want to choose from presets?",
    choices: ["Vue", "React", "Svelte", "Typescript", "Javascript"],
  });

  const webpackVersion = await inquirer.prompt({
    name: "question_3",
    type: "list",
    message: "What is the version of webpack do you want to use?",
    choices: ["4", "5"],
  });

  const webpackMode = await inquirer.prompt({
    name: "question_4",
    type: "list",
    message: "What is the development mode do you want for webpack ?",
    choices: ["development", "production"],
  });

  await handleAnswer(
    presetChoose.question_2,
    webpackMode.question_4,
    webpackVersion.question_3,
    type
  );
}

async function handleAnswer(
  presetOptions: preset,
  mode: webpackMode,
  webpackVersion: version,
  type: basicTypes
) {
  await generateWebpackConfig(presetOptions, mode, webpackVersion, type);
  process.exit(1);
}

async function checkPresetTsConfig(preset: preset) {
  return preset === "Typescript"
    ? {
        tslintFilePath: await inquirer.prompt({
          name: "question_12",
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
          name: "question_12",
          type: "list",
          message:
            "What is the language you want to select for that framework ?",
          choices: ["Javascript", "Typescript"],
        }),
      }
    : void 0;
}

async function checkPresetHTML(preset: preset, text: any) {
  return ["React", "Vue", "Svelte"].includes(preset)
    ? {
        htmlTitle: await inquirer.prompt({
          name: "question_6",
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

async function WebpackConfigCustom(presetType: preset, mode: webpackMode) {
  const contextPrintWrite = await contextAnswer();
  const entryPointWrite = await entryPointsAnswer(
    presetType,
    contextPrintWrite.question_context
  );
  const setAliasPathes = await setAliasAnswer(
    contextPrintWrite.question_context
  );
  const checkLangPreset = await checkPresetFrameworkConfig(presetType);
  const isCoffescriptSupport = await supportFromCoffeScriptAnswer();
  const isHtmlPreprocessorSupport = await isHtmlPreprocessorAnswer();
  const htmlPreprocessors = await htmlPreprocessorsAnswer(
    isHtmlPreprocessorSupport.question_is_html_preprocessor
  );
  const isCssPreprocessor = await isCssPreprocessorsAnswer();
  const cssPreprocessorsSupport = await cssPreprocessors(
    isCssPreprocessor.question_is_css_preprocessor
  );
  const isStaticLoaderSupport = await staticLoader();
  const chooseStaticFilesLoaderSupport = await chooseStaticFilesLoader(
    isStaticLoaderSupport.question_static_loader
  );
  const isImageExtension = await isImageExtensionAnswer();
  const imageExtensionsSupport = await imageExtensions(
    isImageExtension.question_is_image_extensions
  );
  const isFontsSupport = await isFontsAnswer();
  const fontsExtensionsSupport = await fontsExtensions(isFontsSupport.is_fonts);
  const fontsOutDirSupport = await fontsOutDir(isFontsSupport.is_fonts);
  const isXmlSupport = await isXmlExtension();
  const isYamlSupport = await isYamlExtension();
  const isCsvSupport = await isCsvExtension();
  const isLazyLoadingSupport = await isLazyLoading();
  const isAvoidErrorStylesSupport = await isAvoidErrorStyles();
  const isCacheWebpackSupport = await isCacheWebpack();
  const isSplittingChunksSupport = await isSplittingChunks();
  const isPwaAnswer = await isPwaSupport();
  const isBannerSupport = await addingBannerToChunk(
    isSplittingChunksSupport.question_is_splitting_chunks
  );
  const isClosureLibrarySupport = await isClosureLibrary();
  const isGlobalVariableSupport = await isGlobalVariableAnswer();
  const SetGlobalVariableSupport = await setGlobalVariable(
    isGlobalVariableSupport.question_is_global_variable_answer
  );
  const isSplitBundlesThroughDLLSupport = await isSplitBundlesThroughDLL();
  const supportSplitBundlesDLL = await supportSplitBundlesThroughDLL(
    isSplitBundlesThroughDLLSupport.question_is_split_bundles_dll
  );
  const isEnvironmentVariablesSupport = await isEnvironmentVariables();
  const setEnvironmentVariableNameAndValueSupport =
    await setEnvironmentVariables(
      isEnvironmentVariablesSupport.question_environment_variables
    );
  const isDiscoverPreviousCompilationSupport =
    await isDiscoverPreviousCompilation();
  const isLocalizeSupport = await isLocalizeAnswer();
  const setLocalizeDetailsSupport = await setLocalizeDetails(
    isLocalizeSupport.question_is_localize
  );
  const setMinimumChunkSizeSupport = await setMinimumChunkSize(
    isSplittingChunksSupport.question_is_splitting_chunks
  );
  const setMaximumChunkSizeSupport = await setMaximumChunkSize(
    isSplittingChunksSupport.question_is_splitting_chunks
  );
  const isCreateChromeProfileFileSupport = await isCreateChromeProfileFile();
  const isIgnoreSomeFilesSupport = await isIgnoreSomeFiles();
  const isIntegrationSupport = await isIntegrationInstrument();
  const setIntegrationSupport = await integrationInstruments(
    isIntegrationSupport.question_is_integration
  );
  const isHMRSupport = await isHMRAnswer();
  const isCompressionSupport = await isCompressionAnswer();
  const setCompressionOptionsSupport = await setCompressionOptions(
    isCompressionSupport.question_is_compression_answer
  );
  const isCopyPluginSupport = await isCopyPlugin();
  const isCleanPluginSupport = await isCleanPlugin();
  const isCopyStaticFilesSupport = await isCopyStaticFiles();
  const setFilesCatalogesCopySupport = await setFilesCatalogesCopy(
    isCopyStaticFilesSupport.is_copy_static_files
  );
  const setOutputDirectory = await outputDir();
  const isDevServerSupport = await isDevServerAnswer();

  return addContentToCustom(presetType, mode, {
    context: contextPrintWrite.question_context,
    entryPoint: entryPointWrite.entry_point,
    aliasPath: setAliasPathes.set_alias,
    isCoffeScriptSupport: isCoffescriptSupport.question_coffe_script,
    isHtmlPreprocessorSupport:
      isHtmlPreprocessorSupport.question_is_html_preprocessor,
    htmlPreprocessor: htmlPreprocessors?.question_html_preprocessor,
    tslintFilePath: checkLangPreset?.langForFramework.question_12,
    isCssPreprocessorSupport: isCssPreprocessor.question_is_css_preprocessor,
    cssPreprocessors: cssPreprocessorsSupport?.question_css_preprocessor,
    staticLoader: setFilesCatalogesCopySupport?.set_files_cataloges_copy,
    isImageSupport: isImageExtension.question_is_image_extensions,
    imageExtensionsSupport: imageExtensionsSupport?.question_image_extensions,
    isFontsSupport: isFontsSupport.is_fonts,
    fontsExtensionsSupport: fontsExtensionsSupport?.question_fonts_extensions,
    fontsOutputDirectory: fontsOutDirSupport?.question_fonts_dir,
    isXmlSupport: isXmlSupport.question_xml_exension,
    isYamlSupport: isYamlSupport.question_yaml_extension,
    isCsvSupport: isCsvSupport.question_csv_extension,
    fileLoaderSupport:
      chooseStaticFilesLoaderSupport?.question_is_choose_static_loader,
    isLazyLoadingSupport: isLazyLoadingSupport.is_lazy_loading,
    isAvoidErrorStyleSupport: isAvoidErrorStylesSupport.is_avoid_error_styles,
    isCacheWebpackSupport: isCacheWebpackSupport.cache_webpack,
    isSplittingChunksSupport:
      isSplittingChunksSupport.question_is_splitting_chunks,
    minimumChunkSizeSupport:
      setMinimumChunkSizeSupport?.question_minimum_chunk_size,
    maximumChunkSizeSupport:
      setMaximumChunkSizeSupport?.question_maximum_chunk_size,
    isPwaAnswer: isPwaAnswer.question_build_pwa,
    isBannerSupport: isBannerSupport?.question_adding_banner_to_chunk,
    isClosureSupport: isClosureLibrarySupport.question_closure_library,
    isGlobalVariableSupport:
      isGlobalVariableSupport.question_is_global_variable_answer,
    globalVariable: {
      name: SetGlobalVariableSupport?.name,
      value: SetGlobalVariableSupport?.value,
    },
    isSplitBundlesThroughDLLSupport:
      isSplitBundlesThroughDLLSupport.question_is_split_bundles_dll,
    dllOptions: {
      name: supportSplitBundlesDLL?.name.question_context_split_bundles_dll,
      path: supportSplitBundlesDLL?.path.question_path_to_files,
      manifest: supportSplitBundlesDLL?.manifest.question_path_to_manifest_dll,
    },
    isEnvironmentalVariablesSupport:
      isEnvironmentVariablesSupport.question_environment_variables,
    environmentVariable: {
      name: setEnvironmentVariableNameAndValueSupport?.name
        .set_environment_names,
      value:
        setEnvironmentVariableNameAndValueSupport?.value.set_environment_values,
    },
    isDiscoverPreviousCompilationSupport:
      isDiscoverPreviousCompilationSupport.question_discover_previous_compilation,
    isLocalizeSupport: isLocalizeSupport.question_is_localize,
    localizeDetailsSupport:
      setLocalizeDetailsSupport?.question_set_localize_details,
    isCreateChromeProfileFileSupport:
      isCreateChromeProfileFileSupport.question_is_create_chrome_profile_file,
    isIgnoreSomeFilesSupport:
      isIgnoreSomeFilesSupport.question_is_ignore_some_files,
    isIntegrationSupport: isIntegrationSupport.question_is_integration,
    integrationSupport: setIntegrationSupport?.question_integration_instrument,
    isHMRSupport: isHMRSupport.question_is_hmr,
    isCompressionSupport: isCompressionSupport.question_is_compression_answer,
    compressionOptions: {
      level:
        setCompressionOptionsSupport?.compressionLevel
          .question_compression_level,
      ratio:
        setCompressionOptionsSupport?.ratio
          .question_set_level_ratio_compression,
      threshold:
        setCompressionOptionsSupport?.threshold.question_threshold_level,
    },
    isCopyPluginSupport: isCopyPluginSupport.question_is_copy_plugin,
    isCleanPluginSUpport: isCleanPluginSupport.question_is_clean_plugin,
    isCopyStaticFilesSupport: isCopyStaticFilesSupport.is_copy_static_files,
    filesCatalogesCopySupport:
      setFilesCatalogesCopySupport?.set_files_cataloges_copy,
    outputDirectory: setOutputDirectory.question_output_dir,
    isDevServerSupport: isDevServerSupport.is_dev_server,
    devMode: mode,
  });
}

async function WebpackConfigOptions(presetType: preset, mode: webpackMode) {
  const contextPointWrite = await contextAnswer();

  const entryPointWrite = await entryPointsAnswer(
    presetType,
    contextPointWrite.question_context
  );

  const aliasPathWrite = await setAliasAnswer(
    contextPointWrite.question_context
  );

  const portWrite = await inquirer.prompt({
    name: "question_8",
    type: "input",
    message: "What is the port would be in Dev Server (default: 3500) ?",
    default: 3500,
  });

  const outputFolder = await outputDir();

  const htmlPreset = await checkPresetHTML(
    presetType,
    contextPointWrite.question_context
  );

  const checkLangPreset = await checkPresetFrameworkConfig(presetType);

  const checkTsConfigPreset = await checkPresetTsConfig(
    checkLangPreset?.langForFramework.question_12
  );

  const watchFilesPath = await inquirer.prompt({
    name: "question_13",
    type: "input",
    message: `What is the folder with files do you want to watch for changes with starting devServer (example: ${contextPointWrite.question_context}/html) ?`,
    default: `${contextPointWrite.question_context}/html`,
  });

  return addContentToPreset(presetType, {
    context: contextPointWrite.question_context,
    entryPoint: entryPointWrite.entry_point,
    aliasPath: aliasPathWrite.set_alias,
    devPort: portWrite.question_8,
    htmlTitle: htmlPreset?.htmlTitle.question_6,
    htmlTemplate: htmlPreset?.htmlTemplate.question_7,
    tslintFilePath: checkTsConfigPreset?.tslintFilePath.question_12,
    outputFolder: outputFolder.question_output_dir,
    watchFiles: watchFilesPath.question_13,
    devMode: mode,
  });
}

export { firstChoose, WebpackConfigOptions, WebpackConfigCustom };
