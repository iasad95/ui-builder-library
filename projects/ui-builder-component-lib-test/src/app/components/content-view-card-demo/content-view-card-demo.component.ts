import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-view-card-demo',
  templateUrl: './content-view-card-demo.component.html',
  styleUrls: ['./content-view-card-demo.component.scss'],
})
export class ContentViewCardDemoComponent implements OnInit {
  public demoExampleCard: Array<string>;
  public contentCardType: 'clientProspect' | 'matcherClient' | 'clientRequests' | 'clientMatcher';

  ngOnInit(): void {
    this.contentCardType = 'clientMatcher';
    this.demoExampleCard = this.getDemoExampleCard();
  }

  private getDemoExampleCard(): Array<string> {
    const demoCard = `<lib-content-view-card>\n
    <div class="client-request-container">\n
      <div class="client-request-container__top-content">\n
        <div libContentCardFirstColumn imgSrc="assets/content-card/profile-pic-demo.jpg">\n
          <div section>\n
            <ng-template libContentToggle>\n
              <div contentBlock>\n
                <div heading>Options</div>\n
                <div subHeadings>\n
                  <span>Handoff after 3rd exchange</span>\n
                  <span>Invisible Mode</span>\n
                </div>\n
              </div>\n
            </ng-template>\n
          </div>\n
        </div>\n
        <div class="mid-column">\n
          <div section>\n
            <div contentBlock section>\n
              <div xLSubHeadings><span>matchingMaster34, 30</span></div>\n
              <div>\n
                <div heading>Request Location</div>\n
                <div subHeadings>\n
                  <span>Seattle</span>\n
                </div>\n
              </div>\n
            </div>\n
            <ng-template libContentToggle>\n
              <div contentBlock>\n
                <div heading>Accepted Date-Time</div>\n
                <div subHeadings>\n
                  <span>6/11/24 14:32 CST</span>\n
                </div>\n
              </div>\n
              <div contentBlock>\n
                <div heading>Msgs/Date(matcher)</div>\n
                <div subHeadings>\n
                  <span>30</span>\n
                </div>\n
              </div>\n
            </ng-template>\n
          </div>\n
        </div>\n
        <div libContentLastColumn class="last-column">\n
          <div section>\n
            <div contentBlock>\n
              <div heading>\n
                <ng-container *ngTemplateOutlet="lockChevron"></ng-container>\n
              </div>\n
            </div>\n
            <div contentBlock>\n
              <div heading>Fee</div>\n
              <div subHeadings>\n
                <span>125</span>\n
              </div>\n
            </div>\n
            <ng-template libContentToggle>\n
              <div contentBlock>\n
                <div heading>Meetups</div>\n
                <div subHeadings>\n
                  <span>5</span>\n
                </div>\n
              </div>\n
              <div contentBlock>\n
                <div heading>Timeframe</div>\n
                <div subHeadings>\n
                  <span>10 days</span>\n
                </div>\n
              </div>\n
            </ng-template>\n
          </div>\n
        </div>\n
      </div>\n
      <ng-template libContentToggle>\n
        <div class="client-request-container__bottom-content">\n
          <div class="client-request-container__bottom-content--label" heading>Service Enhancement</div>\n
          <div class="client-request-container__bottom-content--sub-headings" subHeadings>\n
            <div class="client-request-container__bottom-content__sub-heading-wrapper">\n
              <span>It is recommended that your Public Profile get enhanced. For best results feel free to use </span>\n
              <a>our AI </a>\n
              <span>or </span>\n
              <a>your matchers </a>\n
              <span>to do this</span>\n
            </div>\n
          </div>\n
        </div>\n
      </ng-template>\n
    </div>\n
  </lib-content-view-card>`;
    return demoCard.split('\n').filter((line) => line.length);
  }
}
