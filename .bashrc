#
# ~/.bashrc
#


alias cp="cp -i"                          # confirm before overwriting something
alias df='df -h'                          # human-readable sizes
alias free='free -m'                      # show sizes in MB
alias np='nano -w PKGBUILD'
alias more=less
alias b='source ~/.bashrc'
alias grep='grep --color=never'
alias ls='ls --color=never'
alias lsort='lt -t'
alias launch_test='code ~/save_shortcut/.bash_testing && source ~/save_shortcut/.bash_testing'
alias cfgb='code ~/.bashrc'
alias open='xdg-open .'
alias ..='cd ..'

source ~/shell_function_n_shortcuts/.shortcut
