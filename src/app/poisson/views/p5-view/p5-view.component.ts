import {
  AfterContentInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {Circle} from '../../shared/circle';
import {Vector} from '../../shared/vector';
import * as p5 from 'p5';

@Component({
  selector: 'app-p5-view',
  templateUrl: './p5-view.component.html',
  styleUrls: ['./p5-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class P5ViewComponent implements AfterContentInit {


  @ViewChild('p5Canvas') p5Canvas: ElementRef;
  @Input() width: number;
  @Input() height: number;
  @Input() circles: Circle[];
  @Input() circleColors: string[];
  @Input() actives: Vector[];
  @Output() onReadyToPaint = new EventEmitter<number>();

  private scetch: any;
  public frameRate = 0;

  constructor() {
  }

  ngAfterContentInit() {
    this.scetch = new p5((p) => this.initP5(p), this.p5Canvas.nativeElement);
  }


  initP5(p: any) {
    p.setup = () => {
      p.createCanvas(this.width, this.height, 'webgl');
      p.frameRate(30);
    };

    p.draw = () => {
      if (p.frameCount % 15 === 0) {
        this.frameRate = p.frameRate();
      }
      p.background(0);

      if (this.circles) {
        p.push();
        p.fill(this.circles[0].getColor(p.frameCount));
        p.translate(-p.width / 2, -p.height / 2);
        this.circles.forEach(circle => {
          this.drawCircle(circle, p.frameCount, p);
        });
        p.pop();
      }
      this.onReadyToPaint.emit(0);
    };

  }

  drawCircle(circle: Circle, step: number, p: p5): void {
    p.push();
    p.translate(Math.floor(circle.pos.x), Math.floor(circle.pos.y), 10);
    p.sphere(Math.max(Math.floor(circle.r), 1));
    p.pop();
  }
}
