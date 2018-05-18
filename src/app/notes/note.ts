export class Note {
  title: string;
  content: string;

  constructor (content: string) {
    this.content = content;
    this.title = content.substr(0, 12);
  }

}
