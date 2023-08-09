import { Component, OnInit, Input } from '@angular/core';
import { ShimmerService } from 'src/app/service/shimmer.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-shimmer-list',
  templateUrl: './shimmer-list.component.html',
  styleUrls: ['./shimmer-list.component.css'],
  animations: [
    trigger('shimmerAnimation', [
      transition('void => *', [
        style({ backgroundPosition: '-100% 0' }),
        animate('2s', style({ backgroundPosition: '100% 0' })),
      ]),
    ]),
  ],
})
export class ShimmerListComponent implements OnInit {
  @Input() itemCount: number = 3; // Default to 3 Shimmer Cards
  shimmerItems: string[] = [];

  constructor(private shimmerService: ShimmerService) {}

  ngOnInit(): void {
    for (let i = 0; i < this.itemCount; i++) {
      const animationId = this.shimmerService.generateShimmerAnimationId();
      this.shimmerItems.push(animationId);
    }
  }

  ngOnDestroy(): void {
    this.shimmerItems.forEach((animationId) => {
      this.shimmerService.removeShimmaeAnimationId(animationId);
    });
  }
}
