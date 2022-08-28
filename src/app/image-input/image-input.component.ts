import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.css'],
})
export class ImageInputComponent implements OnInit {
  @Input() maxHeight: number;
  @Output() fileSelected = new EventEmitter<string>();
  previewDataUrl: string;
  canvas: HTMLCanvasElement;

  constructor() {}

  ngOnInit(): void {
    this.canvas = document.createElement('canvas');
  }

  selectImage(event) {
    const file = event.srcElement.files[0];

    if (!file || !file.type.match(/^image\//)) return;

    readFileAsDataURL(file).then((originalURL) => {
      resizeImage(originalURL, this.canvas, this.maxHeight).then((url) => {
        this.previewDataUrl = url;

        this.fileSelected.emit(url);
      });
    });
  }
}

const readFileAsDataURL = (file: Blob) =>
  new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      resolve(event.target.result);
    };

    reader.readAsDataURL(file);
  });

const resizeImage = (
  imageURL,
  canvas: HTMLCanvasElement,
  maxHeight: number
): Promise<string> =>
  new Promise((resolve) => {
    const image = new Image();

    image.onload = () => {
      const context = canvas.getContext('2d');

      if (image.height > maxHeight) {
        image.width *= maxHeight / image.height;
        image.height = maxHeight;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      canvas.width = image.width;
      canvas.height = image.height;

      context.drawImage(image, 0, 0, image.width, image.height);

      resolve(canvas.toDataURL('image/jpeg'));
    };

    image.src = imageURL;
  });
