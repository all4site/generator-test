'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  // prompting() {
    // Have Yeoman greet the user.
    // this.log(
    //   yosay(`Welcome to the badass ${chalk.red('generator-test')} generator!`)
    // );

    // const prompts = [
    //   {
    //     type: 'confirm',
    //     name: 'someAnswer',
    //     message: 'Would you like to enable this option?',
    //     default: true
    //   }
    // ];

  //   return this.prompt(prompts).then(props => {
  //     // To access props later use this.props.someAnswer;
  //     this.props = props;
  //   });
  // }

  writing() {
    this.fs.copy(
      this.templatePath('img/*'),
      this.destinationPath('app/img')
    );
    this.fs.copy(
      this.templatePath('fonts/*'),
      this.destinationPath('app/fonts')
    );
    this.fs.copy(
      this.templatePath('js/*'),
      this.destinationPath('app/js')
    );
    this.fs.copy(
      this.templatePath('css/*'),
      this.destinationPath('app/css')
    );
    this.fs.copy(
      this.templatePath('sass/*'),
      this.destinationPath('app/sass')
    );
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('app/index.html')
    );
    this.fs.copy(
      this.templatePath('index.jade'),
      this.destinationPath('app/index.jade')
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
			this.destinationPath('package.json'), {
				name: this.appname
			}
    );
    this.fs.copy(
      this.templatePath('bower.json'),
      this.destinationPath('bower.json')
    );
    this.fs.copy(
      this.templatePath('.bowerrc'),
      this.destinationPath('.bowerrc')
    );
    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
  }
	installingLoadsh() {
		this.npmInstall([
			'gulp','browser-sync', 'gulp-wiredep'
		],

		{
			'save-dev': true
		});
		this.bowerInstall([
			'jquery','animate.css'
		], {
			'save': true
		});
	}
  install() {
    this.installDependencies();
  }
};
