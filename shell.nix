{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs       # Node.js (includes npm)
    pkgs.yarn         # Optional: Yarn package manager, remove if you want to use npm only
    pkgs.glibcLocales
    pkgs.git
    pkgs.python311
    pkgs.python311Packages.pip
    pkgs.python311Packages.setuptools
  ];

  shellHook = ''
    export LC_ALL=en_US.UTF-8
    export LANG=en_US.UTF-8
  '';

  # Optional environment variables or shell hooks can go here
}
