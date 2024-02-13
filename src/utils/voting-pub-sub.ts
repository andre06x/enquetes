type Message = { pollOptionId: string; votes: number };
type Subscriber = (message: Message) => void;

class VotingPubSub {
  private channels: Record<string, Subscriber[]> = {};

  subscribe(pollId: string, subscriber: Subscriber) {
    if (!this.channels[pollId]) {
      this.channels[pollId] = [];
    }
    console.log(
      "Assinantes da enquete " + pollId + ":",
      this.channels[pollId].toString()
    );
    this.channels[pollId].push(subscriber);
  }

  publish(pollId: string, message: Message) {
    if (!this.channels[pollId]) {
      return;
    }

    for (const subscriber of this.channels[pollId]) {
      console.log(subscriber);
      subscriber(message);
    }
  }
}

export const voting = new VotingPubSub();
