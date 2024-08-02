module.exports = {
  apps: [
    {
      name: "halaman.app",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      mode: "fork",
      watch: false,

      // logging
      out_file: "./out.log",
      error_file: "./error.log",
      merge_logs: true,
      log_date_format: "DD-MM-YYYY HH:mm:ss Z",

      // env
      env_production: {
        NODE_ENV: "production",
        PORT: 3006,
      },
    },
  ],
};
