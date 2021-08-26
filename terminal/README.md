<h1 align="center">🧙 <strong>Terminal</strong></h1>

Customizando o melhor terminal para desenvolvedores.

Todo desenvolvedor utiliza (ou já utilizou) um terminal em sua carreira. É com eles que utilizamos comandos para executar determinada tarefa em um projeto ou aplicação. Dentre diversas opções disponíveis na internet, uma que particularmente gosto muito é o Hyper em conjunto com o OhMyZSH. Veremos como instalá-las e o quanto este terminal pode nos auxiliar em nosso dia-a-dia.

![](./images/terminal.png)

---

## 🦩 **Terminal Hyper**

![](./images/hyper-banner.png)

```bash
rafael ~ # Hyper é feito utilizando Electron

rafael ~ # Ou seja utilizando HTML/CSS/JS

rafael ~ # É totalmente extensível

rafael ~ # Possbilidade de instalar temas e plugins para o terminal

rafael ~ # É de código aberto - Open Source

rafael ~

```

---

## **🦸🏼‍♀️ Download Hyper**

A instalação do Hyper é muito simples, basta acessar o site da ferramenta em seu site oficial, selecionar a versão com base no sistema operacional que você utiliza e fazer a instalação. Ao final deste processo, o Hyper já estará disponível e pronto para ser utilizado.

Basta acessar o site oficial:

- [Hyper](https://hyper.is/).
- [Github Hyper](https://github.com/vercel/hyper).

Para deixar o Hyper como o terminal padrão no linux, possibilitando assim abrir utilizando o atalho CTRL+ALT+T.

```bash
$ sudo update-alternatives --config x-terminal-emulator

# escolha a opção do terminal Hyper como padrão

```

Porém, o Hyper irá utilizar o shell padrão do sistema operacional, então precisamos alterá-lo.

---

## 🐝 **Oh My ZSH**

O OhMyZSH é um framework open-source mantido pela comunidade para gerenciar a configuração do ZSH, um interpretador de comandos UNIX (shell) que pode ser utilizado como processador de comandos de script, e melhorar o workflow de desenvolvimento.

Antes de conseguirmos iniciar com qualquer configuração precisamos instalar o ZSH, o ZSH é o shell que o OhMyZSH utiliza.

Para instalar o ZSH basta utilizar o comando abaixo, para mais informações podemos acessar o github [Installing-ZSH](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)

```bash
$ sudo apt install zsh

# Com o ZSH instalado, podemos executar o comando abaixo

$ zsh --version
zsh 5.8 (x86_64-ubuntu-linux-gnu)

```

---

## **🍄 Download Oh My ZSH**

Para instalar o Oh My Zsh você podes seguir a documentação [Github OhMyZsh](https://github.com/ohmyzsh/ohmyzsh).

Vamos instalar utilizando o cURL. Para instalar o cURL execute o seguinte comando.

```bash
$ sudo apt install curl

# Com o cURL instalado, podemos executar o comando abaixo

$ curl --version
curl 7.68.0 (x86_64-pc-linux-gnu)

```

Instalando o OhMyZsh.

```bash
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

```

Feito isso, o OhMyZSH estará instalado e funcionando.

Caso o zsh não fique como padrão na sua máquina, você pode executar o seguinte comando para torna-lo padrão.

```bash
$ chsh -s $(which zsh)

```
Substituindo assim o bash para o zsh

---
Feito com 💜 by Rafael Angonese
