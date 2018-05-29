export class Note {
  title: string;
  content: string;

  constructor (content: string, title?: string) {
    this.content = content;

    if (!title) {
      this.title = content.substr(0, 12);
    } else {
      this.title = title;
    }
  }
}
