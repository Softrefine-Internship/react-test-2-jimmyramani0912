import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import FormTitle from "./FormTitle/FormTitle";
import Input from "./Input/Input";
import CategoryList from "./Categories/Categories";
import Social from "./Social/Social";

const FormCompo = Styled.div`
padding: 3rem 5rem;

@media screen and (max-width: 768px) {
    padding: 3rem;
}
@media screen and (max-width: 460px) {
    padding: 1rem;
}
`;

const FlexItem = Styled.div`
display: flex;
gap:10rem;

@media screen and (max-width: 768px) {
  gap:4rem;
}

@media screen and (max-width: 460px) {
  gap:2rem;
}
`;

const ML = Styled.div`
width: 100%;
margin-left:2rem;
`;

const Space = Styled.div`
height:3.4rem;
`;

const SpaceM = Styled.div`
height:1.4rem;
`;

const ButtonBox = Styled.div`
margin:auto;
width: 26rem;
border: 0.2rem solid black;
& h1{
text-align: center;
color:#0B0B23;
font-size:2.2rem;
font-weight:500;
padding:0.8rem ;
}
cursor:pointer;
transition: box-shadow 0.3s ease-in-out;
animation: pulseShadow 0.8s infinite; /* Apply animation on hover */

@keyframes pulseShadow {
  0% {
    box-shadow: 0px 0px 0px 3px rgb(128, 128, 128, 0.0);
  }
  25% {
    box-shadow: 0px 0px 0px 6px rgb(128, 128, 128, 0.1);
  }
  50% {
    box-shadow: 0px 0px 0px 9px rgb(128, 128, 128, 0.3); /* Increase shadow intensity */
  }
  75% {
    box-shadow: 0px 0px 0px 6px rgb(128, 128, 128, 0.1); /* Increase shadow intensity */
  }
  100% {
    box-shadow: 0px 0px 0px 3px rgb(128, 128, 128, 0); /* Increase shadow intensity */
  }
}
`;

let inputDataArr = [
  { title: "title", value: "Hi 👋, I'm" },
  { title: "title-name", value: "" },
  { title: "subtitle", value: "A passionate frontend developer from India" },
  { title: "w1", value: "🔭 I’m currently working on" },
  { title: "wpn1", value: "" },
  { title: "wpl1", value: "" },
  { title: "w2", value: "👯 I’m looking to collaborate on" },
  { title: "wpn2", value: "" },
  { title: "wpl2", value: "" },
  { title: "w3", value: "🤝 I’m looking for help with" },
  { title: "wpn3", value: "" },
  { title: "wpl3", value: "" },
  { title: "w4", value: "🌱 I’m currently learning" },
  { title: "wpn4", value: "" },
  { title: "w5", value: "💬 Ask me about" },
  { title: "wpn5", value: "" },
  { title: "w6", value: "📫 How to reach me" },
  { title: "wpn6", value: "" },
  { title: "w7", value: "👨‍💻 All of my projects are available at" },
  { title: "wpn7", value: "" },
  { title: "w8", value: "📝 I regularly write articles on" },
  { title: "wpn8", value: "" },
  { title: "w9", value: "📄 Know about my experiences" },
  { title: "wpn9", value: "" },
  { title: "w10", value: "⚡ Fun fact" },
  { title: "wpn10", value: "" },
];

const categoriesData = [
  {
    category: "Programming Languages",
    icons: [
      {
        name: "C",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
        isChecked: false,
      },
      {
        name: "C++",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
        isChecked: false,
      },
      {
        name: "C#",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
        isChecked: false,
      },
      {
        name: "TypeScript",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        isChecked: false,
      },
      {
        name: "Javascript",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        isChecked: false,
      },
      {
        name: "Java",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        isChecked: false,
      },
      {
        name: "Go",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
        isChecked: false,
      },
      {
        name: "Ruby",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
        isChecked: false,
      },
      {
        name: "php",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
        isChecked: false,
      },
      {
        name: "Perl",
        iconImage: "https://api.iconify.design/logos-perl.svg",
        isChecked: false,
      },
      {
        name: "Scala",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original.svg",
        isChecked: false,
      },
      {
        name: "Python",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        isChecked: false,
      },
      {
        name: "Swift",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
        isChecked: false,
      },
      {
        name: "ObjectiveC",
        iconImage:
          "https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg",
        isChecked: false,
      },
      {
        name: "Clojure",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg",
        isChecked: false,
      },
      {
        name: "Rust",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg",
        isChecked: false,
      },
      {
        name: "Haskell",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg",
        isChecked: false,
      },
      {
        name: "CoffeeScript",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/coffeescript/coffeescript-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "Elixir",
        iconImage:
          "https://www.vectorlogo.zone/logos/elixir-lang/elixir-lang-icon.svg",
        isChecked: false,
      },
      {
        name: "Erlang",
        iconImage:
          "https://www.vectorlogo.zone/logos/erlang/erlang-official.svg",
        isChecked: false,
      },
      {
        name: "nim",
        iconImage:
          "https://www.vectorlogo.zone/logos/nim-lang/nim-lang-icon.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Frontend Development",
    icons: [
      {
        name: "Vue.js",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "ReactJS",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "svelte",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
        isChecked: false,
      },
      {
        name: "angular",
        iconImage:
          "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
        isChecked: false,
      },
      {
        name: "angularjs",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "backbonejs",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/backbonejs/backbonejs-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "bootstrap",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        isChecked: false,
      },
      {
        name: "vuetify",
        iconImage: "https://bestofjs.org/logos/vuetify.svg",
        isChecked: false,
      },
      {
        name: "html",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "css",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "pug",
        iconImage: "https://cdn.worldvectorlogo.com/logos/pug.svg",
        isChecked: false,
      },
      {
        name: "gulp",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg",
        isChecked: false,
      },
      {
        name: "sass",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
        isChecked: false,
      },
      {
        name: "redux",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
        isChecked: false,
      },
      {
        name: "babel",
        iconImage: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
        isChecked: false,
      },
      {
        name: "tailwind",
        iconImage:
          "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        isChecked: false,
      },
      {
        name: "materialise",
        iconImage:
          "https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg",
        isChecked: false,
      },
      {
        name: "ember",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/ember/ember-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "webpack",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "Bulma",
        iconImage:
          "https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg",
        isChecked: false,
      },
      {
        name: "gtk",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/7/71/GTK_logo.svg",
        isChecked: false,
      },
      {
        name: "qt",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg",
        isChecked: false,
      },
      {
        name: "wx_widget",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/b/bb/WxWidgets.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Backend Development",
    icons: [
      {
        name: "nodejs",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "spring",
        iconImage:
          "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
        isChecked: false,
      },
      {
        name: "express",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "kafka",
        iconImage:
          "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
        isChecked: false,
      },
      {
        name: "solr",
        iconImage:
          "https://www.vectorlogo.zone/logos/apache_solr/apache_solr-icon.svg",
        isChecked: false,
      },
      {
        name: "rabbitMQ",
        iconImage:
          "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
        isChecked: false,
      },
      {
        name: "hadoop",
        iconImage:
          "https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg",
        isChecked: false,
      },
      {
        name: "nginx",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
        isChecked: false,
      },
      {
        name: "openresty",
        iconImage: "https://openresty.org/images/logo.png",
        isChecked: false,
      },
      {
        name: "nestjs",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Mobile App Development",
    icons: [
      {
        name: "android",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "flutter",
        iconImage:
          "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
        isChecked: false,
      },
      {
        name: "dart",
        iconImage:
          "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
        isChecked: false,
      },
      {
        name: "kotlin",
        iconImage:
          "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
        isChecked: false,
      },
      {
        name: "nativescript",
        iconImage:
          "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/nativescript.svg",
        isChecked: false,
      },
      {
        name: "xamarin",
        iconImage:
          "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/xamarin.svg",
        isChecked: false,
      },
      {
        name: "reactnative",
        iconImage: "https://reactnative.dev/img/header_logo.svg",
        isChecked: false,
      },
      {
        name: "ionic",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg",
        isChecked: false,
      },
      {
        name: "aparchecordova",
        iconImage:
          "https://cdn.icon-icons.com/icons2/2699/PNG/512/apache_cordova_logo_icon_170570.png",
        isChecked: false,
      },
    ],
  },
  {
    category: "AI / ML",
    icons: [
      {
        name: "tensorflow",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1915px-Tensorflow_logo.svg.png",
        isChecked: false,
      },
      {
        name: "pytorch",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/1200px-PyTorch_logo_icon.svg.png",
        isChecked: false,
      },
      {
        name: "pandas",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
        isChecked: false,
      },
      {
        name: "seaborn",
        iconImage: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
        isChecked: false,
      },
      {
        name: "opencs",
        iconImage: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg",
        isChecked: false,
      },
      {
        name: "scikit_learn",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Databses",
    icons: [
      {
        name: "mongodb",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "mysql",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "postgresql",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "redis",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "oracle",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
        isChecked: false,
      },
      {
        name: "couchdb",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/0d6c64dbbf311879f7d563bfc3ccf559f9ed111c/icons/couchdb/couchdb-original.svg",
        isChecked: false,
      },
      {
        name: "hive",
        iconImage:
          "https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg",
        isChecked: false,
      },
      {
        name: "realm",
        iconImage:
          "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg",
        isChecked: false,
      },
      {
        name: "mariadb",
        iconImage: "https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg",
        isChecked: false,
      },
      {
        name: "cockroachdb",
        iconImage: "https://cdn.worldvectorlogo.com/logos/cockroachdb.svg",
        isChecked: false,
      },
      {
        name: "elesticsearch",
        iconImage: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg",
        isChecked: false,
      },
      {
        name: "sqlite",
        iconImage: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
        isChecked: false,
      },
      {
        name: "mssqle",
        iconImage:
          "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Data Visualization",
    icons: [
      {
        name: "d3js",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg",
        isChecked: false,
      },
      {
        name: "chartjs",
        iconImage: "https://www.chartjs.org/media/logo-title.svg",
        isChecked: false,
      },
      {
        name: "canvasjs",
        iconImage:
          "https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg",
        isChecked: false,
      },
      {
        name: "kibana",
        iconImage:
          "https://www.vectorlogo.zone/logos/elasticco_kibana/elasticco_kibana-icon.svg",
        isChecked: false,
      },
      {
        name: "grafana",
        iconImage: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Devops",
    icons: [
      {
        name: "aws",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "docker",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "jenkins",
        iconImage: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
        isChecked: false,
      },
      {
        name: "gcp",
        iconImage:
          "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
        isChecked: false,
      },
      {
        name: "kubernetes",
        iconImage:
          "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
        isChecked: false,
      },
      {
        name: "bash",
        iconImage:
          "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
        isChecked: false,
      },
      {
        name: "azure",
        iconImage:
          "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
        isChecked: false,
      },
      {
        name: "vagrant",
        iconImage:
          "https://www.vectorlogo.zone/logos/vagrantup/vagrantup-icon.svg",
        isChecked: false,
      },
      {
        name: "circleci",
        iconImage:
          "https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg",
        isChecked: false,
      },
      {
        name: "travisci",
        iconImage:
          "https://www.vectorlogo.zone/logos/travis-ci/travis-ci-icon.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Backend as a Service(BaaS)",
    icons: [
      {
        name: "firebase",
        iconImage:
          "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        isChecked: false,
      },
      {
        name: "appwrite",
        iconImage:
          "https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg",
        isChecked: false,
      },
      {
        name: "amplify",
        iconImage: "https://docs.amplify.aws/assets/logo-dark.svg",
        isChecked: false,
      },
      {
        name: "heroku",
        iconImage: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Framework",
    icons: [
      {
        name: "django",
        iconImage: "https://cdn.worldvectorlogo.com/logos/django.svg",
        isChecked: false,
      },
      {
        name: "dotnet",
        iconImage: "https://cdn.worldvectorlogo.com/logos/django.svg",
        isChecked: false,
      },
      {
        name: "electron",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg",
        isChecked: false,
      },
      {
        name: "symfony",
        iconImage: "https://symfony.com/logos/symfony_black_03.svg",
        isChecked: false,
      },
      {
        name: "laravel",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg",
        isChecked: false,
      },
      {
        name: "codeigniter",
        iconImage: "https://cdn.worldvectorlogo.com/logos/codeigniter.svg",
        isChecked: false,
      },
      {
        name: "rails",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "flask",
        iconImage:
          "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
        isChecked: false,
      },
      {
        name: "quasar",
        iconImage: "https://cdn.quasar.dev/logo/svg/quasar-logo.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Testing",
    icons: [
      {
        name: "cypress",
        iconImage:
          "https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg",
        isChecked: false,
      },
      {
        name: "selenium",
        iconImage:
          "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg",
        isChecked: false,
      },
      {
        name: "jest",
        iconImage:
          "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
        isChecked: false,
      },
      {
        name: "mocha",
        iconImage: "https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg",
        isChecked: false,
      },
      {
        name: "puppeteer",
        iconImage:
          "https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg",
        isChecked: false,
      },
      {
        name: "karma",
        iconImage:
          "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/karma.svg",
        isChecked: false,
      },
      {
        name: "jasmin",
        iconImage: "https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Software",
    icons: [
      {
        name: "illustrator",
        iconImage:
          "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
        isChecked: false,
      },
      {
        name: "photoshop",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
        isChecked: false,
      },
      {
        name: "xd",
        iconImage: "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg",
        isChecked: false,
      },
      {
        name: "figma",
        iconImage: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
        isChecked: false,
      },
      {
        name: "blender",
        iconImage:
          "https://download.blender.org/branding/community/blender_community_badge_white.svg",
        isChecked: false,
      },
      {
        name: "sketch",
        iconImage:
          "https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg",
        isChecked: false,
      },
      {
        name: "invision",
        iconImage:
          "https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg",
        isChecked: false,
      },
      {
        name: "framer",
        iconImage: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
        isChecked: false,
      },
      {
        name: "matlab",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
        isChecked: false,
      },
      {
        name: "postman",
        iconImage:
          "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Static Site Generators",
    icons: [
      {
        name: "gatsby",
        iconImage:
          "https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg",
        isChecked: false,
      },
      {
        name: "gridsome",
        iconImage:
          "https://www.vectorlogo.zone/logos/gridsome/gridsome-icon.svg",
        isChecked: false,
      },
      {
        name: "hugo",
        iconImage: "https://api.iconify.design/logos-hugo.svg",
        isChecked: false,
      },
      {
        name: "jekyll",
        iconImage:
          "https://www.vectorlogo.zone/logos/jekyllrb/jekyllrb-icon.svg",
        isChecked: false,
      },
      {
        name: "nextjs",
        iconImage: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
        isChecked: false,
      },
      {
        name: "nuxtjs",
        iconImage: "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg",
        isChecked: false,
      },
      {
        name: "11ty",
        iconImage:
          "https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/f4c85cce5790758286b8f155ef9a177710b995df/11ty.svg",
        isChecked: false,
      },
      {
        name: "scully",
        iconImage:
          "https://raw.githubusercontent.com/scullyio/scully/main/assets/logos/SVG/scullyio-icon.svg",
        isChecked: false,
      },
      {
        name: "sculpin",
        iconImage:
          "https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/1782aef8672484698c0dd407f900c4a329ed5bc4/sculpin.svg",
        isChecked: false,
      },
      {
        name: "sapper",
        iconImage:
          "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/master/public/logos/sapper.svg",
        isChecked: false,
      },
      {
        name: "vuepress",
        iconImage:
          "https://raw.githubusercontent.com/AliasIO/wappalyzer/master/src/drivers/webextension/images/icons/VuePress.svg",
        isChecked: false,
      },
      {
        name: "hexo",
        iconImage: "https://www.vectorlogo.zone/logos/hexoio/hexoio-icon.svg",
        isChecked: false,
      },
      {
        name: "middleman",
        iconImage:
          "https://raw.githubusercontent.com/leungwensen/svg-icon/b84b3f3a3da329b7c1d02346865f8e98beb05413/dist/svg/logos/middleman.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Game Engines",
    icons: [
      {
        name: "unity",
        iconImage: "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg",
        isChecked: false,
      },
      {
        name: "unreal",
        iconImage:
          "https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Automation",
    icons: [
      {
        name: "zapier",
        iconImage: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg",
        isChecked: false,
      },
      {
        name: "ifttt",
        iconImage: "https://www.vectorlogo.zone/logos/ifttt/ifttt-ar21.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Other",
    icons: [
      {
        name: "linux",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
        isChecked: false,
      },
      {
        name: "git",
        iconImage: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
        isChecked: false,
      },
      {
        name: "arduino",
        iconImage: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
        isChecked: false,
      },
    ],
  },
];

function Form({ onSubmit }) {
  const [inputData, setInputData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [socialData, setSocialData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("inputData");
    const savedSocialData = localStorage.getItem("socialData");

    if (savedData) {
      setInputData(JSON.parse(savedData));
    } else {
      setInputData(inputDataArr);
    }

    if (savedSocialData) {
      setSocialData(JSON.parse(savedSocialData));
    } else {
      setSocialData([]);
    }
  }, []);

  const handleSelectionChange = (selectedCategories) => {
    setSelectedData(selectedCategories);
  };

  const handleSubmit = () => {
    const finalData = {
      input: inputData,
      icons: selectedData,
      social: socialData,
    };
    if (finalData.social.length !== 0) {
      onSubmit(finalData);
    }
  };

  const handleInputChange = (title, value) => {
    const existingObjectIndex = inputData.findIndex(
      (item) => item.title === title
    );

    if (existingObjectIndex !== -1) {
      const updatedInputData = [...inputData];
      updatedInputData[existingObjectIndex].value = value;
      setInputData(updatedInputData);
    } else {
      const inputObject = {
        title: title,
        value: value,
      };
      setInputData([...inputData, inputObject]);
    }
    localStorage.setItem("inputData", JSON.stringify(inputData));
  };

  const handleSocialInputChange = (title, logo, value) => {
    const socialItemIndex = socialData.findIndex(
      (item) => item.title === title
    );
    const newSocialItem = { title, logo, value };

    if (socialItemIndex !== -1) {
      const updatedSocialData = [...socialData];
      updatedSocialData[socialItemIndex] = newSocialItem;
      setSocialData(updatedSocialData);
      localStorage.setItem("socialData", JSON.stringify(updatedSocialData));
    } else {
      setSocialData([...socialData, newSocialItem]);
    }
  };

  return (
    <FormCompo>
      <FormTitle headingTitle={"Title"} />
      <FlexItem>
        <Input
          width={window.innerWidth <= 460 ? "60%" : "15%"}
          title={"title"}
          placeholder={""}
          value={inputData.find((item) => item.title === "title")?.value || ""}
          onChange={(value) => handleInputChange("title", value)}
        />
        <ML>
          <Input
            width={window.innerWidth <= 460 ? "80%" : "45%"}
            title={"title-name"}
            value={
              inputData.find((item) => item.title === "title-name")?.value || ""
            }
            placeholder={"name"}
            onChange={(value) => handleInputChange("title-name", value)}
          />
        </ML>
      </FlexItem>
      <Space />
      <FormTitle headingTitle={"Subtitle"} />
      <Input
        width={window.innerWidth <= 460 ? "90%" : "70%"}
        title={"subtitle"}
        placeholder={""}
        value={inputData.find((item) => item.title === "subtitle")?.value || ""}
        onChange={(value) => handleInputChange("subtitle", value)}
      />
      <Space />
      <FormTitle headingTitle={"Work"} />
      <FlexItem>
        <Input
          width={"35%"}
          title={"w1"}
          placeholder={"Hi, I'm"}
          value={inputData.find((item) => item.title === "w1")?.value || ""}
          onChange={(value) => handleInputChange("w1", value)}
        />
        <Input
          width={"20%"}
          title={"wpn1"}
          placeholder={"project name"}
          value={inputData.find((item) => item.title === "wpn1")?.value || ""}
          onChange={(value) => handleInputChange("wpn1", value)}
        />
        <Input
          width={"20%"}
          title={"wpl1"}
          placeholder={"project link"}
          value={inputData.find((item) => item.title === "wpl1")?.value || ""}
          onChange={(value) => handleInputChange("wpl1", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={"35%"}
          title={"w2"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w2")?.value || ""}
          onChange={(value) => handleInputChange("w2", value)}
        />
        <Input
          width={"20%"}
          title={"wpn2"}
          placeholder={"project name"}
          value={inputData.find((item) => item.title === "wpn2")?.value || ""}
          onChange={(value) => handleInputChange("wpn2", value)}
        />
        <Input
          width={"20%"}
          title={"wpl2"}
          placeholder={"project link"}
          value={inputData.find((item) => item.title === "wpl2")?.value || ""}
          onChange={(value) => handleInputChange("wpl2", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={"35%"}
          title={"w3"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w3")?.value || ""}
          onChange={(value) => handleInputChange("w3", value)}
        />
        <Input
          width={"20%"}
          title={"wpn3"}
          placeholder={"project name"}
          value={inputData.find((item) => item.title === "wpn3")?.value || ""}
          onChange={(value) => handleInputChange("wpn3", value)}
        />
        <Input
          width={"20%"}
          title={"wpl3"}
          placeholder={"project link"}
          value={inputData.find((item) => item.title === "wpl3")?.value || ""}
          onChange={(value) => handleInputChange("wpl3", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={window.innerWidth <= 460 ? "50%" : "35%"}
          title={"w4"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w4")?.value || ""}
          onChange={(value) => handleInputChange("w4", value)}
        />
        <Input
          width={window.innerWidth <= 460 ? "50%" : "35%"}
          title={"wpn4"}
          placeholder={"Frameworks, courses etc."}
          value={inputData.find((item) => item.title === "wpn4")?.value || ""}
          onChange={(value) => handleInputChange("wpn4", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={window.innerWidth <= 460 ? "50%" : "35%"}
          title={"w5"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w5")?.value || ""}
          onChange={(value) => handleInputChange("w5", value)}
        />
        <Input
          width={window.innerWidth <= 460 ? "50%" : "35%"}
          title={"wpn5"}
          placeholder={"react, vue and gsap"}
          value={inputData.find((item) => item.title === "wpn5")?.value || ""}
          onChange={(value) => handleInputChange("wpn5", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={window.innerWidth <= 460 ? "50%" : "35%"}
          title={"w6"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w6")?.value || ""}
          onChange={(value) => handleInputChange("w6", value)}
        />
        <Input
          width={window.innerWidth <= 460 ? "50%" : "35%"}
          title={"wpn6"}
          placeholder={"example@gmail.com"}
          value={inputData.find((item) => item.title === "wpn6")?.value || ""}
          onChange={(value) => handleInputChange("wpn6", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={window.innerWidth <= 460 ? "50%" : "35%"}
          title={"w7"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w7")?.value || ""}
          onChange={(value) => handleInputChange("w7", value)}
        />
        <Input
          width={window.innerWidth <= 460 ? "50%" : "35%"}
          title={"wpn7"}
          placeholder={"portfolio link"}
          value={inputData.find((item) => item.title === "wpn7")?.value || ""}
          onChange={(value) => handleInputChange("wpn7", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={window.innerWidth <= 460 ? "50%" : "35%"}
          title={"w8"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w8")?.value || ""}
          onChange={(value) => handleInputChange("w8", value)}
        />
        <Input
          width={window.innerWidth <= 460 ? "50%" : "35%"}
          title={"wpn8"}
          placeholder={"blog link "}
          value={inputData.find((item) => item.title === "wpn8")?.value || ""}
          onChange={(value) => handleInputChange("wpn8", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={window.innerWidth <= 460 ? "50%" : "35%"}
          title={"w9"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w9")?.value || ""}
          onChange={(value) => handleInputChange("w9", value)}
        />
        <Input
          width={window.innerWidth <= 460 ? "50%" : "35%"}
          title={"wpn9"}
          placeholder={"resume link"}
          value={inputData.find((item) => item.title === "wpn9")?.value || ""}
          onChange={(value) => handleInputChange("wpn9", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={window.innerWidth <= 460 ? "50%" : "35%"}
          title={"w10"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w10")?.value || ""}
          onChange={(value) => handleInputChange("w10", value)}
        />
        <Input
          width={window.innerWidth <= 460 ? "50%" : "35%"}
          title={"wpn10"}
          placeholder={"I think I am funny"}
          value={inputData.find((item) => item.title === "wpn10")?.value || ""}
          onChange={(value) => handleInputChange("wpn10", value)}
        />
      </FlexItem>
      <Space />
      <CategoryList
        categoriesDataArr={categoriesData}
        Selected={selectedData}
        onSelectionChange={handleSelectionChange}
      />
      <Space />
      <FormTitle headingTitle={"Social"} />
      <SpaceM />
      <Social socialData={socialData} onInputChange={handleSocialInputChange} />
      <Space />
      <ButtonBox onClick={handleSubmit}>
        <h1>Generate README</h1>
      </ButtonBox>
    </FormCompo>
  );
}

export default Form;
