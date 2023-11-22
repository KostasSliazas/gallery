/*jshint esversion: 11 */
import { element, atribute, append, de } from "./helpers";

// Methods
export const methods = {
  autoPlayLoop() {
    this.isAutoPlayOn = true;
    if (this.showButtons) this.play.className = "but tpo lft bra brb opa atc";

    this.timeOut = setTimeout(() => {
      this.right().show();

      if (!this.showButtonsOnPlay) {
        this.left.className = this.rigt.className = this.clos.className = "dpn";
        if (this.showButtons) this.foot.className = this.onow.className = "dpn";
      }

      if (this.indexOfImage === this.imagesArray.length - 1) this.clear();
    }, this.delaySeconds);
  },

  loadComplete() {
    this.spin.className = "dpn";
    if (this.isAutoPlayOn) this.autoPlayLoop();
  },

  downloads() {
    const a = element("a");
    atribute(a, "rel", "noopener", "download", this.imgs.src.split("/").pop(), "href", this.imgs.src, "target", "_blank");
    a.click();
    a.remove();
  },

  lefts() {
    this.indexOfImage = this.indexOfImage > 0 ? this.indexOfImage - 1 : this.imagesArray.length - 1;
    return this;
  },

  right() {
    this.indexOfImage = this.indexOfImage < this.imagesArray.length - 1 ? this.indexOfImage + 1 : 0;
    return this;
  },

  clear() {
    clearTimeout(this.timeOut);
    this.isAutoPlayOn = false;

    if (this.showButtons) {
      this.foot.className = this.onow.className = "";
      this.play.className = "but tpo lft bra brb opa";
    }

    if (!this.showButtonsOnPlay) this.clos.className = "but bra brb rtm rtp opa";
    this.leftRigthBtnsShow();
    return this;
  },

  close() {
    this.imag.className = "hdi w10 tra tpo lft";
    this.isActive = false;

    de.className = de.className.split("fff").join("").trim();
  },

  leftRigthBtnsShow() {
    this.left.className = this.indexOfImage === 0 ? "dpn" : "tpo lft hvr";
    this.rigt.className = this.indexOfImage === this.imagesArray.length - 1 ? "dpn" : "tpo rgt hvr";
  },

  show() {
    const index = this.imagesArray[this.indexOfImage];
    const imageSource = index.src;
    const fileName = imageSource.split("/").pop();
    const arrayFileName = fileName.split(".");
    const fileNameWithExtension = arrayFileName[0] + "." + (this.extension || arrayFileName[1]);
    const fullNamePrefixed = arrayFileName === "svg" ? imageSource : imageSource.replace(fileName, this.folder + fileNameWithExtension);

    if (!this.isActive) {
      this.isActive = true;
      setTimeout(() => {
        de.className = de.className ? de.className + " fff" : "fff";
        this.imag.className = "fff w10 tpo lft";
      }, 90);

      this.imag.className = "fff w10 tra tpo lft";
    }

    if (this.showButtons) {
      this.alts.innerText = arrayFileName[1] === "svg" ? arrayFileName.join(".") : fileNameWithExtension;
      this.fine.innerText = Number(this.indexOfImage) + 1;
    }

    if (this.imgs && (this.imgs.src === imageSource || this.imgs.src === fullNamePrefixed)) return false;

    if (this.insi.getElementsByTagName("img").length > 0) this.insi.removeChild(this.imgs);

    this.spin.className = "bor";

    this.leftRigthBtnsShow();

    this.imgs = element("img");

    this.imgs.onerror = function (e) {
      e.target.onerror = null;
      e.target.src = imageSource;
    };

    this.imgs.onload = function (e) {
      const theRealFileName = this.imgs.src;
      if (this.showButtons && fullNamePrefixed !== theRealFileName) this.alts.innerText = theRealFileName.split("/").pop();

      append(this.insi, this.imgs);
      this.loadComplete();
    }.bind(this);

    if (arrayFileName[1] !== "svg") this.imgs.src = fullNamePrefixed;
    else this.imgs.src = imageSource;
  },

  listenForIG(e) {
    const target = e.target;
    if (target.tagName === "IMG") {
      this.indexOfImage = this.imagesArray.indexOf(target) > -1 ? this.imagesArray.indexOf(target) : 0;
      this.show();
      e.stopImmediatePropagation();
    }
  }
};
